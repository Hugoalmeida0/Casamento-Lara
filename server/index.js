import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pkg from 'pg';

dotenv.config();

const { Pool } = pkg;

const app = express();
app.use(cors());
app.use(express.json());

let connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  console.error('DATABASE_URL is not set');
  process.exit(1);
}

// Some Neon DSNs include channel_binding=require which node-postgres may not support; remove it
connectionString = connectionString
  .replace(/([?&])channel_binding=require(&|$)/, (m, p1, p2) => (p2 ? p1 : ''))
  .replace(/[?&]$/,'');

const pool = new Pool({ connectionString, ssl: { rejectUnauthorized: false } });

async function ensureSchema() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS presentes (
      id SERIAL PRIMARY KEY,
      nome TEXT NOT NULL,
      preco NUMERIC(10,2) NOT NULL,
      imagem TEXT,
      comprado BOOLEAN NOT NULL DEFAULT false
    );
  `);
  await pool.query(`ALTER TABLE presentes ADD COLUMN IF NOT EXISTS imagem TEXT`);
  await pool.query(`ALTER TABLE presentes ADD COLUMN IF NOT EXISTS comprado BOOLEAN NOT NULL DEFAULT false`);
  await pool.query(`ALTER TABLE presentes ADD COLUMN IF NOT EXISTS nome TEXT`);
  await pool.query(`ALTER TABLE presentes ADD COLUMN IF NOT EXISTS preco NUMERIC(10,2)`);
}

app.get('/api/presentes', async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT id, nome, preco, imagem, comprado FROM presentes ORDER BY id ASC`
    );
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching presentes:', err?.message || err);
    res.status(500).json({ error: 'Erro ao buscar presentes' });
  }
});

const port = process.env.PORT || 4000;
(async () => {
  try {
    await ensureSchema();
    app.listen(port, () => {
      console.log(`API server running on http://localhost:${port}`);
    });
  } catch (e) {
    console.error('Failed to ensure schema or start server', e);
    process.exit(1);
  }
})();


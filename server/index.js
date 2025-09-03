import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pkg from 'pg';

dotenv.config();

const { Pool } = pkg;

const app = express();
app.use(cors());
app.use(express.json());

// Configuração da conexão com o banco de dados
let connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  console.error('DATABASE_URL is not set');
  process.exit(1);
}

// Remove channel_binding=require se presente (alguns clientes não suportam)
connectionString = connectionString
  .replace(/([?&])channel_binding=require(&|$)/, (m, p1, p2) => (p2 ? p1 : ''))
  .replace(/[?&]$/,'');

const pool = new Pool({ 
  connectionString, 
  ssl: { rejectUnauthorized: false } 
});

// Função para testar a conexão com o banco de dados
async function testConnection() {
  try {
    const result = await pool.query('SELECT NOW()');
    console.log('✅ Conexão com o banco de dados estabelecida com sucesso:', result.rows[0]);
  } catch (err) {
    console.error('❌ Erro ao conectar com o banco de dados:', err?.message || err);
    throw err;
  }
}

// Rota raiz para verificar se o servidor está funcionando
app.get('/', (req, res) => {
  res.json({
    message: '🚀 API do Casamento L&F funcionando!',
    endpoints: {
      'GET /api/presentes': 'Buscar todos os presentes',
      'PUT /api/presentes/:id/comprado': 'Marcar presente como comprado',
      'PUT /api/presentes/:id/disponivel': 'Marcar presente como disponível'
    },
    status: 'online',
    timestamp: new Date().toISOString()
  });
});

// Endpoint para testar a conexão e ver estrutura da tabela
app.get('/api/test', async (req, res) => {
  try {
    // Testar conexão
    const connectionTest = await pool.query('SELECT NOW() as timestamp');
    
    // Verificar se a tabela existe e sua estrutura
    const tableInfo = await pool.query(`
      SELECT column_name, data_type, is_nullable 
      FROM information_schema.columns 
      WHERE table_name = 'presentes' 
      ORDER BY ordinal_position
    `);
    
    // Contar registros
    const countResult = await pool.query('SELECT COUNT(*) as total FROM presentes');
    
    // Buscar alguns registros de exemplo
    const sampleData = await pool.query('SELECT * FROM presentes LIMIT 5');
    
    res.json({
      connection: '✅ Conectado',
      timestamp: connectionTest.rows[0].timestamp,
      tableStructure: tableInfo.rows,
      totalRecords: countResult.rows[0].total,
      sampleData: sampleData.rows
    });
  } catch (err) {
    console.error('❌ Erro no teste:', err?.message || err);
    res.status(500).json({ 
      error: 'Erro ao testar conexão', 
      details: err?.message || err 
    });
  }
});

// Endpoint para buscar todos os presentes
app.get('/api/presentes', async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT id, nome, preco, imagem, comprado FROM presentes ORDER BY id ASC`
    );
    console.log(`📦 Buscando presentes: ${result.rows.length} encontrados`);
    res.json(result.rows);
  } catch (err) {
    console.error('❌ Erro ao buscar presentes:', err?.message || err);
    res.status(500).json({ error: 'Erro ao buscar presentes' });
  }
});

// Endpoint para marcar um presente como comprado
app.put('/api/presentes/:id/comprado', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      `UPDATE presentes SET comprado = true WHERE id = $1 RETURNING *`,
      [id]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Presente não encontrado' });
    }
    
    console.log(`🎁 Presente ${id} marcado como comprado: ${result.rows[0].nome}`);
    res.json(result.rows[0]);
  } catch (err) {
    console.error('❌ Erro ao atualizar presente:', err?.message || err);
    res.status(500).json({ error: 'Erro ao atualizar presente' });
  }
});

// Endpoint para desmarcar um presente como comprado (opcional)
app.put('/api/presentes/:id/disponivel', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      `UPDATE presentes SET comprado = false WHERE id = $1 RETURNING *`,
      [id]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Presente não encontrado' });
    }
    
    console.log(`🔄 Presente ${id} marcado como disponível: ${result.rows[0].nome}`);
    res.json(result.rows[0]);
  } catch (err) {
    console.error('❌ Erro ao atualizar presente:', err?.message || err);
    res.status(500).json({ error: 'Erro ao atualizar presente' });
  }
});

// Endpoint para marcar um presente como esgotado (área administrativa)
app.put('/api/presentes/:id/esgotado', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      `UPDATE presentes SET comprado = true WHERE id = $1 RETURNING *`,
      [id]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Presente não encontrado' });
    }
    
    console.log(`📦 Presente ${id} marcado como esgotado: ${result.rows[0].nome}`);
    res.json(result.rows[0]);
  } catch (err) {
    console.error('❌ Erro ao marcar presente como esgotado:', err?.message || err);
    res.status(500).json({ error: 'Erro ao marcar presente como esgotado' });
  }
});

const port = process.env.PORT || 4000;

// Inicializar servidor
(async () => {
  try {
    await testConnection();
    app.listen(port, () => {
      console.log(`🚀 API server running on http://localhost:${port}`);
      console.log(`📊 Endpoints disponíveis:`);
      console.log(`   GET  / - Informações da API`);
      console.log(`   GET  /api/test - Testar conexão com banco`);
      console.log(`   GET  /api/presentes - Buscar todos os presentes`);
      console.log(`   PUT  /api/presentes/:id/comprado - Marcar como comprado`);
      console.log(`   PUT  /api/presentes/:id/disponivel - Marcar como disponível`);
      console.log(`   PUT  /api/presentes/:id/esgotado - Marcar como esgotado (ADM)`);
    });
  } catch (e) {
    console.error('❌ Failed to connect to database or start server', e);
    process.exit(1);
  }
})();
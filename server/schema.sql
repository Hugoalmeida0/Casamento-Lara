-- Optional: schema for presentes table
CREATE TABLE IF NOT EXISTS presentes (
  id SERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  preco NUMERIC(10,2) NOT NULL,
  imagem TEXT,
  comprado BOOLEAN NOT NULL DEFAULT false
);


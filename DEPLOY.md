# 🚀 Deploy no Vercel

## Configuração para Deploy

### 1. Variáveis de Ambiente

No painel do Vercel, configure as seguintes variáveis de ambiente:

```
DATABASE_URL=postgresql://seu_usuario:sua_senha@seu_host:5432/seu_banco?sslmode=require
```

### 2. Deploy

1. Conecte seu repositório GitHub ao Vercel
2. Configure as variáveis de ambiente
3. Faça o deploy

### 3. URLs após Deploy

- **Site principal:** `https://seu-projeto.vercel.app`
- **Área administrativa:** `https://seu-projeto.vercel.app/admin`
- **API:** `https://seu-projeto.vercel.app/api/presentes`

### 4. Acesso à Área Administrativa

- **URL:** `https://seu-projeto.vercel.app/admin`
- **Sem autenticação** - Acesso direto
- **Para restringir acesso apenas para você:**

#### Opção 1: URL Secreta (Recomendado)
Renomeie a rota para algo secreto:
```javascript
// Em src/App.tsx, mude:
<Route path="/admin" element={<PaginaAdmin />} />
// Para:
<Route path="/admin-secreto-123" element={<PaginaAdmin />} />
```

#### Opção 2: Variável de Ambiente
Adicione verificação por IP ou token:
```javascript
// Em src/components/paginaAdmin.tsx, adicione:
const isOwner = process.env.REACT_APP_OWNER_TOKEN === 'seu-token-secreto';
if (!isOwner) return <div>Acesso negado</div>;
```

#### Opção 3: Subdomínio Privado
Configure um subdomínio privado no Vercel:
- `admin.seu-projeto.vercel.app`
- Configure DNS para apontar apenas para você

### 5. Configuração de Links

Para configurar os links de compra, edite o arquivo `src/components/paginaPresentes.tsx`:

```javascript
const linksPresentes: Record<string, string> = {
  'CORTINA PARA JANELA': 'https://seu-link-aqui.com',
  'AIR FRYER': 'https://seu-link-aqui.com',
  // ... outros presentes
};
```

### 6. Segurança

- A área administrativa é protegida por senha
- Apenas usuários com a senha podem acessar `/admin`
- A senha é armazenada no localStorage do navegador
- Para maior segurança, considere implementar autenticação JWT

### 7. Banco de Dados

- Certifique-se de que seu banco PostgreSQL está acessível publicamente
- Use SSL (sslmode=require) para conexões seguras
- Configure as credenciais corretas na variável DATABASE_URL

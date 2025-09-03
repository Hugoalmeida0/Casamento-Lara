# 🎨 Sistema de Categorias Automáticas

## Como Funciona

O sistema agora **automaticamente** escolhe imagens e links baseado no **nome do presente**, sem precisar configurar cada um individualmente.

## 📂 Categorias Disponíveis

### 🔌 Eletrodomésticos
**Palavras-chave:** air fryer, liquidificador, microondas, geladeira, fogão, máquina, robo, aspirador

**Imagens usadas:** capa2, capitulo3 (aleatórias)
**Link padrão:** https://exemplo.com/eletrodomesticos

### 🍽️ Cozinha
**Palavras-chave:** utensílio, panela, aparelho, jantar, louça, prato, copo, talher

**Imagens usadas:** capa3, capa5, capitulo1 (aleatórias)
**Link padrão:** https://exemplo.com/cozinha

### 🏠 Decoração/Casa
**Palavras-chave:** cortina, taça, sobre, mesa, decoração, quadro, vaso, luminária

**Imagens usadas:** capa1, capa4, capitulo2 (aleatórias)
**Link padrão:** https://exemplo.com/decoracao

### 🎁 Padrão
**Para presentes não categorizados**

**Imagens usadas:** Todas as imagens disponíveis (aleatórias)
**Link padrão:** https://exemplo.com/presentes

## ⚙️ Como Personalizar

### 1. Adicionar Novas Categorias

No arquivo `src/components/paginaPresentes.tsx`, edite a função `obterImagemPorCategoria`:

```javascript
// Adicione nova categoria
const categorias = {
  eletrodomesticos: [capa2, capitulo3],
  cozinha: [capa3, capa5, capitulo1],
  decoracao: [capa1, capa4, capitulo2],
  // NOVA CATEGORIA
  banheiro: [capa1, capa2], // Exemplo
  padrao: [capa1, capa2, capa3, capa4, capa5, capitulo1, capitulo2, capitulo3]
};

// Adicione palavras-chave
if (nome.includes('toalha') || nome.includes('saboneteira') || nome.includes('banheiro')) {
  return categorias.banheiro[Math.floor(Math.random() * categorias.banheiro.length)];
}
```

### 2. Adicionar Links Específicos

Para presentes com links únicos, edite a função `obterLinkPorCategoria`:

```javascript
const linksEspecificos: Record<string, string> = {
  'cortina para janela': 'https://mpago.la/1pbLB7x',
  'air fryer específico': 'https://seu-link-aqui.com',
  // Adicione mais links específicos
};
```

### 3. Alterar Links por Categoria

```javascript
const linksPorCategoria = {
  eletrodomesticos: 'https://sua-loja.com/eletrodomesticos',
  cozinha: 'https://sua-loja.com/cozinha',
  decoracao: 'https://sua-loja.com/decoracao',
  padrao: 'https://sua-loja.com/presentes'
};
```

## 🎯 Vantagens

- ✅ **Automático** - Funciona com qualquer quantidade de presentes
- ✅ **Flexível** - Fácil de personalizar categorias
- ✅ **Escalável** - Adicione novos presentes sem configurar
- ✅ **Variado** - Imagens aleatórias por categoria
- ✅ **Organizado** - Links agrupados por tipo

## 📝 Exemplos de Funcionamento

- **"AIR FRYER"** → Categoria: Eletrodomésticos → Imagem aleatória + Link de eletrodomésticos
- **"JOGO DE PANELAS"** → Categoria: Cozinha → Imagem aleatória + Link de cozinha
- **"CORTINA PARA JANELA"** → Link específico configurado
- **"PRESENTE NOVO"** → Categoria: Padrão → Imagem aleatória + Link padrão

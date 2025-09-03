/**
 * PÁGINA DE PRESENTES - LARA & FELIPE
 * 
 * INSTRUÇÕES PARA EDIÇÃO MANUAL DE LINKS:
 * 
 * 1. Para editar links dos presentes, procure pela seção "CONFIGURAÇÃO DE LINKS - EDITE AQUI"
 * 2. Adicione ou edite entradas no objeto LINKS_PRESENTES
 * 3. Formato: 'nome exato do presente': 'https://seu-link-aqui.com'
 * 4. O sistema tentará fazer correspondência exata primeiro, depois parcial
 * 5. Se não encontrar link específico, usará o LINK_PADRAO
 * 
 * STATUS ATUAL:
 * - TODOS os presentes estão configurados com o link de teste: https://mpago.la/1pbLB7x
 * - Organizados por categorias: Cozinha, Móveis, Eletrodomésticos, Lua de Mel
 * - Edite um a um conforme necessário no futuro
 * 
 * IMAGENS:
 * - As imagens são configuradas manualmente no objeto IMAGENS_PRESENTES
 * - Cada presente pode ter uma imagem específica dos assets
 * - Use as imagens importadas: capa1, capa2, capa3, capa4, capa5, capitulo1, capitulo2, capitulo3, capitulo4, casal6, pedido, std1, std2
 * - Fallback para logo caso a imagem não carregue
 */

import React, { useEffect } from 'react';
import backgroundImage from '@/assets/capa1.jpeg';
import { useQuery } from '@tanstack/react-query';

// Importar imagens dos assets
import cortinaParaJanela from '@/assets/decoracao-de-cortina-de-cortina-vazia-na-sala-de-estar.jpg';
import airFryer from '@/assets/fritadora-de-ar-preta-com-comida-assada-em-uma-mesa-de-madeira.jpg';
import logo from '@/assets/logo.png';



type Presente = {
  id: number;
  nome: string;
  preco: string | number;
  imagem: string | null;
  comprado: boolean;
};

// Função para obter imagem real baseada no nome do presente
const obterImagemPorNome = (nomePresente: string): string => {
  const nome = nomePresente.toLowerCase().trim();
  
  // Mapeamento específico de presentes para termos de busca em inglês
  const mapeamentoImagens: Record<string, string> = {
    // Cozinha e utensílios
    'cortina para janela': 'window curtain',
    'cortina para porta': 'door curtain',
    'air fryer': 'air fryer kitchen',
    'utensílios de cozinha': 'kitchen utensils',
    'conjunto de taças para sobremesa': 'dessert glasses set',
    'conjunto de taças': 'wine glasses set',
    'faqueiro': 'cutlery set',
    'jantar romântico na lua de mel': 'romantic dinner',
    'potes plásticos': 'plastic containers',
    'ferro de passar': 'iron clothes',
    'conjunto de xícaras': 'coffee cups set',
    'formas e assadeiras': 'baking pans',
    'ventilador': 'fan',
    'purificador de água': 'water purifier',
    'varal dobrável': 'clothesline',
    'tábua de passar': 'ironing board',
    'panela elétrica de arroz': 'rice cooker',
    'jarras': 'pitcher jug',
    'liquidificador': 'blender',
    'processador de alimentos': 'food processor',
    'chaleira': 'kettle',
    'aspirador de pó portátil': 'portable vacuum',
    'panela de pressão': 'pressure cooker',
    'jogo de panelas': 'cookware set',
    'conjunto de copos': 'drinking glasses',
    'jogo de banho': 'bathroom set',
    'almofadas': 'cushions pillows',
    'arandelas': 'wall sconces',
    'travessas e refratários': 'serving dishes',
    'aparelho de jantar': 'dinnerware set',
    'cafeteira': 'coffee maker',
    'fogão': 'stove',
    'panela de pressão elétrica': 'electric pressure cooker',
    'jogo de sousplat': 'placemats',
    'microondas': 'microwave',
    'mixer': 'stand mixer',
    
    // Móveis e decoração
    'mesa de centro': 'coffee table',
    'mesa de jantar': 'dining table',
    'cadeira de escritório': 'office chair',
    'cama king size baú': 'king size bed',
    'sofá': 'sofa couch',
    'estante': 'bookshelf',
    'cristaleira': 'china cabinet',
    'escrivaninha': 'desk',
    'ar-condicionado': 'air conditioner',
    'colchão king size': 'king mattress',
    'edredom': 'comforter',
    'travesseiros': 'pillows',
    'mesa de escritório': 'office desk',
    'roupa de cama': 'bedding set',
    'tapete de sala de estar': 'living room rug',
    'máquina de lavar roupas': 'washing machine',
    'cadeiras': 'dining chairs',
    
    // Eletrodomésticos
    'robô de limpeza': 'robot vacuum',
    
    // Lua de mel
    'cota 1 - passagem lua de mel': 'honeymoon travel',
    'cota 1 hospedagem lua de mel': 'honeymoon hotel',
    'cota 4 - passagem lua de mel': 'honeymoon travel',
    'cota 2 hospedagem lua de mel': 'honeymoon hotel',
    'cota 2 - passagem lua de mel': 'honeymoon travel',
    'cota 3 - passagem lua de mel': 'honeymoon travel',
  };
  
  // Busca o termo específico ou usa o nome original
  const termoBusca = mapeamentoImagens[nome] || nome;
  
  // Gera um hash simples baseado no nome para consistência
  let hash = 0;
  for (let i = 0; i < nome.length; i++) {
    hash = ((hash << 5) - hash + nome.charCodeAt(i)) & 0xffffffff;
  }
  const seed = Math.abs(hash) % 1000;
  
  // Usa Lorem Picsum com seed para imagens consistentes
  const largura = 400;
  const altura = 300;
  
  return `https://picsum.photos/seed/${seed}/${largura}/${altura}`;
};

// ===== CONFIGURAÇÃO DE IMAGENS - EDITE AQUI =====
// Imagens específicas para cada presente do banco de dados
// INICIALMENTE TODOS USAM IMAGENS ALEATÓRIAS - EDITE UM A UM CONFORME NECESSÁRIO
const IMAGENS_PRESENTES: Record<string, string> = {
  // === COZINHA E UTENSÍLIOS ===
  'cortina para janela': cortinaParaJanela, // Exemplo: use capa1 para cortina
  'air fryer': airFryer, // Exemplo: use capa2 para air fryer
  
};

// Imagem padrão para presentes sem imagem específica
const IMAGEM_PADRAO = logo; // Use qualquer imagem dos assets como padrão

// Função para obter imagem baseada no nome do presente
const obterImagemPorCategoria = (nomePresente: string): string => {
  const nome = nomePresente.toLowerCase().trim();
  
  // Primeiro, tenta encontrar uma imagem específica exata
  if (IMAGENS_PRESENTES[nome]) {
    return IMAGENS_PRESENTES[nome];
  }
  
  // Se não encontrar exato, procura por correspondência parcial
  for (const [chave, imagem] of Object.entries(IMAGENS_PRESENTES)) {
    if (nome.includes(chave.toLowerCase()) || chave.toLowerCase().includes(nome)) {
      return imagem;
    }
  }
  
  // Se não encontrar nenhuma imagem específica, retorna a imagem padrão
  return IMAGEM_PADRAO;
};

// ===== CONFIGURAÇÃO DE LINKS - EDITE AQUI =====
// Links específicos para cada presente do banco de dados
// INICIALMENTE TODOS USAM O LINK DE TESTE - EDITE UM A UM CONFORME NECESSÁRIO
const LINKS_PRESENTES: Record<string, string> = {
  // === COZINHA E UTENSÍLIOS ===
  'cortina para janela': 'https://mpago.la/1pbLB7x',
  'air fryer': 'https://mpago.la/1pbLB7x',
  'utensílios de cozinha': 'https://mpago.la/1pbLB7x',
  'conjunto de taças para sobremesa': 'https://mpago.la/1pbLB7x',
  'faqueiro': 'https://mpago.la/1pbLB7x',
  'jantar romântico na lua de mel': 'https://mpago.la/1pbLB7x',
  'potes plásticos': 'https://mpago.la/1pbLB7x',
  'ferro de passar': 'https://mpago.la/1pbLB7x',
  'conjunto de xícaras': 'https://mpago.la/1pbLB7x',
  'formas e assadeiras': 'https://mpago.la/1pbLB7x',
  'ventilador': 'https://mpago.la/1pbLB7x',
  'conjunto de taças': 'https://mpago.la/1pbLB7x',
  'purificador de água': 'https://mpago.la/1pbLB7x',
  'varal dobrável': 'https://mpago.la/1pbLB7x',
  'tábua de passar': 'https://mpago.la/1pbLB7x',
  'panela elétrica de arroz': 'https://mpago.la/1pbLB7x',
  'jarras': 'https://mpago.la/1pbLB7x',
  'cortina para porta': 'https://mpago.la/1pbLB7x',
  'liquidificador': 'https://mpago.la/1pbLB7x',
  'processador de alimentos': 'https://mpago.la/1pbLB7x',
  'chaleira': 'https://mpago.la/1pbLB7x',
  'aspirador de pó portátil': 'https://mpago.la/1pbLB7x',
  'panela de pressão': 'https://mpago.la/1pbLB7x',
  'jogo de panelas': 'https://mpago.la/1pbLB7x',
  'conjunto de copos': 'https://mpago.la/1pbLB7x',
  'jogo de banho': 'https://mpago.la/1pbLB7x',
  'almofadas': 'https://mpago.la/1pbLB7x',
  'arandelas': 'https://mpago.la/1pbLB7x',
  'travessas e refratários': 'https://mpago.la/1pbLB7x',
  'aparelho de jantar': 'https://mpago.la/1pbLB7x',
  'cafeteira': 'https://mpago.la/1pbLB7x',
  'fogão': 'https://mpago.la/1pbLB7x',
  'panela de pressão elétrica': 'https://mpago.la/1pbLB7x',
  'jogo de sousplat': 'https://mpago.la/1pbLB7x',
  'microondas': 'https://mpago.la/1pbLB7x',
  'mixer': 'https://mpago.la/1pbLB7x',

  // === MÓVEIS E DECORAÇÃO ===
  'mesa de centro': 'https://mpago.la/1pbLB7x',
  'mesa de jantar': 'https://mpago.la/1pbLB7x',
  'cadeira de escritório': 'https://mpago.la/1pbLB7x',
  'cama king size baú': 'https://mpago.la/1pbLB7x',
  'sofá': 'https://mpago.la/1pbLB7x',
  'estante': 'https://mpago.la/1pbLB7x',
  'cristaleira': 'https://mpago.la/1pbLB7x',
  'escrivaninha': 'https://mpago.la/1pbLB7x',
  'ar-condicionado': 'https://mpago.la/1pbLB7x',
  'colchão king size': 'https://mpago.la/1pbLB7x',
  'edredom': 'https://mpago.la/1pbLB7x',
  'travesseiros': 'https://mpago.la/1pbLB7x',
  'mesa de escritório': 'https://mpago.la/1pbLB7x',
  'roupa de cama': 'https://mpago.la/1pbLB7x',
  'tapete de sala de estar': 'https://mpago.la/1pbLB7x',
  'máquina de lavar roupas': 'https://mpago.la/1pbLB7x',
  'cadeiras': 'https://mpago.la/1pbLB7x',

  // === ELETRODOMÉSTICOS ===
  'robô de limpeza': 'https://mpago.la/1pbLB7x',

  // === LUA DE MEL (COTAS) ===
  'cota 1 - passagem lua de mel': 'https://mpago.la/1pbLB7x',
  'cota 1 hospedagem lua de mel': 'https://mpago.la/1pbLB7x',
  'cota 4 - passagem lua de mel': 'https://mpago.la/1pbLB7x',
  'cota 2 hospedagem lua de mel': 'https://mpago.la/1pbLB7x',
  'cota 2 - passagem lua de mel': 'https://mpago.la/1pbLB7x',
  'cota 3 - passagem lua de mel': 'https://mpago.la/1pbLB7x',
};

// Link padrão para presentes sem link específico (usando link de teste)
const LINK_PADRAO = 'https://mpago.la/1pbLB7x';

// Função para obter link baseado no nome do presente
const obterLinkPorCategoria = (nomePresente: string): string => {
  const nome = nomePresente.toLowerCase().trim();
  
  // Primeiro, tenta encontrar um link específico exato
  if (LINKS_PRESENTES[nome]) {
    return LINKS_PRESENTES[nome];
  }
  
  // Se não encontrar exato, procura por correspondência parcial
  for (const [chave, link] of Object.entries(LINKS_PRESENTES)) {
    if (nome.includes(chave.toLowerCase()) || chave.toLowerCase().includes(nome)) {
      return link;
    }
  }
  
  // Se não encontrar nenhum link específico, retorna o link padrão
  return LINK_PADRAO;
};

const PaginaPresentes = () => {
  // Buscar presentes do banco de dados
  const { data: presentes, isLoading, isError, error } = useQuery<Presente[]>({
    queryKey: ['presentes'],
    queryFn: async () => {
      console.log('🔄 Buscando presentes da API...');
      const res = await fetch('/api/presentes');
      console.log('📡 Resposta da API:', res.status, res.statusText);
      if (!res.ok) {
        throw new Error(`Erro ${res.status}: ${res.statusText}`);
      }
      const data = await res.json();
      console.log('📦 Dados recebidos:', data);
      return data;
    },
    retry: 3,
    retryDelay: 1000,
  });

  // Log dos dados quando mudarem
  useEffect(() => {
    if (presentes) {
      console.log('✅ Presentes carregados com sucesso:', presentes.length, 'itens');
      console.log('📦 Lista de presentes:', presentes);
    }
    if (isError) {
      console.error('❌ Erro ao carregar presentes:', error);
    }
  }, [presentes, isError, error]);

  const formatarPreco = (valor: string | number) => {
    // Converte para número diretamente, sem multiplicar por 100
    const numero = typeof valor === 'number' ? valor : Number(valor);
    if (Number.isNaN(numero)) return String(valor);
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(numero);
  };

  return (
    <div className="min-h-screen bg-background">
      
      {/* ============== BARRA DE NAVEGAÇÃO PRINCIPAL ============== */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Logo L&F" 
                className="w-12 h-12 object-contain"
              />
            </div>

            {/* Menu Centralizado */}
            <div className="hidden md:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-8">
                <a
                  href="/"
                  className="font-inter text-sm font-medium text-muted-foreground hover:text-mainGreen transition-wedding tracking-wider uppercase"
                >
                  início
                </a>
                {/* Link para CONFIRME PRESENÇA adicionado */}
                <a
                  href="/confirmar"
                  className="font-inter text-sm font-medium text-muted-foreground hover:text-mainGreen transition-wedding tracking-wider uppercase"
                >
                  confirme presença
                </a>
                <span className="font-inter text-sm font-medium text-mainGreen transition-wedding tracking-wider uppercase border-b-2 border-mainGreen pb-1">
                  PRESENTES
                </span>
                <a
                  href="#dicas"
                  className="font-inter text-sm font-medium text-muted-foreground hover:text-mainGreen transition-wedding tracking-wider uppercase"
                >
                  DICAS E INSTRUÇÕES
                </a>
                <a
                  href="#album"
                  className="font-inter text-sm font-medium text-muted-foreground hover:text-mainGreen transition-wedding tracking-wider uppercase"
                >
                  ÁLBUM DE FOTOS
                </a>
                <a
                  href="#historia"
                  className="font-inter text-sm font-medium text-muted-foreground hover:text-mainGreen transition-wedding tracking-wider uppercase"
                >
                  NOSSA HISTÓRIA
                </a>
              </div>
            </div>

            {/* Este div vazio ajuda a centralizar o menu corretamente quando não há outros itens à direita */}
            <div className="w-12 md:block hidden"></div>

          </div>
        </div>
      </div>
      {/* ========================================================== */}

      <section className="min-h-screen bg-background flex flex-col relative">
        {/* Imagem de fundo (mantida) */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{backgroundImage: `url(${backgroundImage})`}}
        ></div>
        
        {/* Conteúdo sobreposto */}
        <div className="relative z-10 flex flex-col flex-1">

          {/* Grid de presentes */}
          <div className="flex-1 px-8 md:px-12 pb-16 md:pb-20 mt-24">
            <div className="max-w-6xl mx-auto">
              
              {/* Status da conexão */}
              {isLoading && (
                <div className="text-center py-8">
                  <div className="inline-flex items-center space-x-2 text-muted-foreground">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-mainGreen"></div>
                    <span>Carregando presentes do banco de dados...</span>
                  </div>
                </div>
              )}
              
              {isError && (
                <div className="text-center py-8">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 max-w-md mx-auto">
                    <div className="text-red-600 font-semibold mb-2">❌ Erro ao carregar presentes</div>
                    <div className="text-red-500 text-sm">
                      {error?.message || 'Não foi possível conectar ao banco de dados'}
                    </div>
                    <div className="text-xs text-red-400 mt-2">
                      Verifique se o servidor está rodando na porta 4000
                    </div>
                  </div>
                </div>
              )}
              
              {presentes?.length === 0 && !isLoading && !isError && (
                <div className="text-center py-8">
                  <div className="text-muted-foreground">
                    📦 Nenhum presente cadastrado no banco de dados
                  </div>
                </div>
              )}
              
              {/* Grid de presentes */}
              {presentes && presentes.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {presentes.map((presente) => (
                    <div 
                      key={presente.id}
                      className={`bg-white/40 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 overflow-hidden flex flex-col text-center transition-all duration-300 hover:scale-105 ${
                        presente.comprado ? 'opacity-75' : ''
                      }`}
                    >
                      <div className="relative">
                        <img 
                          src={obterImagemPorCategoria(presente.nome)} 
                          alt={presente.nome} 
                          className="w-full h-48 object-cover"
                          onError={(e) => {
                            console.log('Erro ao carregar imagem para:', presente.nome);
                            e.currentTarget.src = '/logo.png';
                          }}
                        />
                        
                        {presente.comprado && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                              Comprado
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <div className="p-4 flex flex-col flex-1">
                        <h3 className="font-inter uppercase tracking-wider font-semibold text-foreground text-sm mb-2">
                          {presente.nome}
                        </h3>
                        <p className="font-inter text-muted-foreground mb-4">
                          {formatarPreco(presente.preco)}
                        </p>
                        
                        <div className="mt-auto">
                          {presente.comprado ? (
                            <div className="w-full py-2 px-4 rounded-lg font-inter uppercase tracking-widest text-xs font-bold text-center bg-muted text-muted-foreground">
                              Esgotado
                            </div>
                          ) : (
                            <button
                              onClick={() => {
                                const link = obterLinkPorCategoria(presente.nome);
                                window.open(link, '_blank');
                              }}
                              className="w-full py-2 px-4 rounded-lg font-inter uppercase tracking-widest text-xs font-bold bg-mainGreen text-primary-foreground hover:bg-mainGreen/90 transition-colors"
                            >
                              Presentear
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaginaPresentes;
import React from 'react';
import backgroundImage from '@/assets/capa1.jpeg';
import airFryerImage from '@/assets/capa1.jpeg';
import cortinaImage from '@/assets/capa1.jpeg';
import utensiliosImage from '@/assets/capa1.jpeg';
import tacasImage from '@/assets/capa1.jpeg';

const listaDePresentes = [
  {
    id: 1,
    nome: 'CORTINA PARA JANELA',
    preco: '90,00',
    imagem: cortinaImage,
    comprado: true,
  },
  {
    id: 2,
    nome: 'AIR FRYER',
    preco: '500,00',
    imagem: airFryerImage,
    comprado: false,
  },
  {
    id: 3,
    nome: 'UTENSÍLIOS DE COZINHA',
    preco: '40,00',
    imagem: utensiliosImage,
    comprado: false,
  },
  {
    id: 4,
    nome: 'CONJUNTO DE TAÇAS PARA SOBREMESA',
    preco: '65,00',
    imagem: tacasImage,
    comprado: false,
  },
  {
    id: 5,
    nome: 'JOGO DE PANELAS',
    preco: '350,00',
    imagem: 'https://via.placeholder.com/300',
    comprado: true,
  },
  {
    id: 6,
    nome: 'APARELHO DE JANTAR',
    preco: '250,00',
    imagem: 'https://via.placeholder.com/300',
    comprado: false,
  },
  {
    id: 7,
    nome: 'ROBÔ ASPIRADOR',
    preco: '1200,00',
    imagem: 'https://via.placeholder.com/300',
    comprado: false,
  },
  {
    id: 8,
    nome: 'LIQUIDIFICADOR',
    preco: '150,00',
    imagem: 'https://via.placeholder.com/300',
    comprado: false,
  },
];

const PaginaPresentes = () => {
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
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {listaDePresentes.map((presente) => (
                <div 
                  key={presente.id}
                  className="bg-white/40 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 overflow-hidden flex flex-col text-center transition-transform hover:scale-105"
                >
                  <img 
                    src={presente.imagem} 
                    alt={presente.nome} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="font-inter uppercase tracking-wider font-semibold text-foreground text-sm mb-2">
                      {presente.nome}
                    </h3>
                    <p className="font-inter text-muted-foreground mb-4">
                      R$ {presente.preco}
                    </p>
                    <div className="mt-auto">
                      <button
                        disabled={presente.comprado}
                        className={`
                          w-full py-2 px-4 rounded-lg font-inter uppercase tracking-widest text-xs font-bold transition-colors
                          ${presente.comprado
                            ? 'bg-muted text-muted-foreground cursor-not-allowed'
                            : 'bg-mainGreen text-primary-foreground hover:bg-mainGreen/90'
                          }
                        `}
                      >
                        {presente.comprado ? 'Comprado' : 'Presentear'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaginaPresentes;
import React from 'react';
import backgroundImage from '@/assets/capa1.jpeg';
import { useQuery } from '@tanstack/react-query';

 
type Presente = {
  id: number;
  nome: string;
  preco: string | number;
  imagem: string | null;
  comprado: boolean;
};

const PaginaPresentes = () => {
  const { data: presentes, isLoading, isError } = useQuery<Presente[]>({
    queryKey: ['presentes'],
    queryFn: async () => {
      const res = await fetch('/api/presentes');
      if (!res.ok) throw new Error('Falha ao carregar presentes');
      return res.json();
    },
  });

  const formatarPreco = (valor: string | number) => {
    const numero = typeof valor === 'number' ? valor : Number(String(valor).replace(/\./g, '').replace(',', '.'));
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
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {isLoading && (
                <div className="col-span-full text-center text-muted-foreground">Carregando presentes...</div>
              )}
              {isError && (
                <div className="col-span-full text-center text-red-600">Erro ao carregar presentes.</div>
              )}
              {presentes?.length === 0 && !isLoading && !isError && (
                <div className="col-span-full text-center text-muted-foreground">Nenhum presente cadastrado.</div>
              )}
              {presentes?.map((presente) => (
                <div 
                  key={presente.id}
                  className="bg-white/40 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 overflow-hidden flex flex-col text-center transition-transform hover:scale-105"
                >
                  <img 
                    src={presente.imagem || '/logo.png'} 
                    alt={presente.nome} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="font-inter uppercase tracking-wider font-semibold text-foreground text-sm mb-2">
                      {presente.nome}
                    </h3>
                    <p className="font-inter text-muted-foreground mb-4">
                      {formatarPreco(presente.preco)}
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
import { Button } from '@/components/ui/button';
import capa1 from '@/assets/capa4.jpeg';
import capa2 from '@/assets/capa3.jpeg';
import capa3 from '@/assets/casal6.jpg';
import capa4 from '@/assets/capa2.jpeg';


const InformationSection = () => {
  const informationPanels = [
    {
      id: 'cerimonia',
      title: 'Cerimônia',
      image: capa1,
      alt: 'Casal na praia - Cerimônia',
      action: () => console.log('Ver cerimônia')
    },
    {
      id: 'confirmar',
      title: 'Confirmar Presença',
      image: capa2,
      alt: 'Casal abraçado - Confirmar Presença',
      action: () => console.log('Confirmar presença')
    },
    {
      id: 'presentes',
      title: 'Lista de Presentes',
      image: capa3,
      alt: 'Casal íntimo - Lista de Presentes',
      action: () => console.log('Ver lista de presentes')
    },
    {
      id: 'dicas',
      title: 'Dicas e Instruções',
      image: capa4,
      alt: 'Casal na praia - Dicas e Instruções',
      action: () => console.log('Ver dicas e instruções')
    }
  ];

  return (
        <section id="dicas" className="h-screen bg-background flex flex-col">
      <div className="flex-1 flex flex-col justify-center">
        {/* Section Title */}
        <div className="text-center mb-8 px-4">
          <h2 className="text-4xl md:text-5xl font-seasons font-bold text-mainGreen mb-6">
            Informações Importantes
          </h2>
          <div className="w-24 h-px bg-mainGreen mx-auto mb-6"></div>
          <p className="font-inter text-lg max-w-2xl mx-auto text-muted-foreground">
            Tudo que você precisa saber para celebrar conosco
          </p>
        </div>

                                     {/* Banner Horizontal com 4 Painéis - Altura Reduzida */}
           <div className="h-[250px] md:h-[300px] lg:h-[475px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {informationPanels.map((panel, index) => (
                         <div 
               key={panel.id}
               className="relative group overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
             >
              {/* Imagem de Fundo */}
              <div className="absolute inset-0">
                <img 
                  src={panel.image}
                  alt={panel.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay Gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 group-hover:via-black/30 transition-all duration-500"></div>
              </div>

                                                                                                                                                                                                                                               {/* Botão Sobreposto */}
                  <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 w-full px-3 sm:px-4">
                    <Button 
                      onClick={panel.action}
                      className="w-full bg-transparent border-2 border-mainGreen text-white font-inter font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group-hover:bg-mainGreen/20 group-hover:scale-105 hover:bg-mainGreen/10"
                    >
                      {panel.title}
                    </Button>
                  </div>

              {/* Efeito de Brilho no Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InformationSection;
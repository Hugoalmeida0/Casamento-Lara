import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Gift, Shirt, Calendar } from 'lucide-react';

const InformationSection = () => {
  const informationCards = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'A Cerimônia',
      description: 'Veja informações sobre nosso Grande Dia!',
      location: 'Caioçara, Jarinu - SP, 13240-000\nEstrada Municipal do Bairro Caioçara 1100',
      buttonText: 'Ver Detalhes',
      buttonAction: () => console.log('Ver cerimônia')
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: 'Lista de Presentes',
      description: 'Cheque nossa lista de presentes',
      buttonText: 'Ver Lista',
      buttonAction: () => console.log('Ver presentes')
    },
    {
      icon: <Shirt className="w-8 h-8" />,
      title: 'Código de Vestimenta',
      description: 'Informações sobre o dress code para nossa celebração',
      details: 'Traje Esporte Fino\nCores sugeridas: tons pastéis e neutros',
      buttonText: 'Ver Dicas',
      buttonAction: () => console.log('Ver vestimenta')
    }
  ];

  return (
    <section id="dicas" className="h-screen bg-background flex flex-col justify-center">
      <div className="max-w-6xl mx-auto px-4 h-full flex flex-col justify-center">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-seasons font-bold text-mainGreen mb-6">
            Informações Importantes
          </h2>
          <div className="w-24 h-px bg-mainGreen mx-auto mb-6"></div>
          <p className="font-inter text-lg max-w-2xl mx-auto text-muted-foreground">
            Tudo que você precisa saber para celebrar conosco
          </p>
        </div>

        {/* Information Cards */}
        <div className="flex-1 flex items-center justify-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
            {informationCards.map((card, index) => (
              <Card 
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 shadow-soft hover:shadow-elegant transition-wedding group"
              >
                <div className="text-center">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-mainGreen/10 rounded-full mb-4 group-hover:bg-mainGreen/20 transition-wedding">
                    <div className="text-mainGreen">
                      {card.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-seasons font-bold text-mainGreen mb-3">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="font-inter mb-4 leading-relaxed text-sm md:text-base text-muted-foreground">
                    {card.description}
                  </p>

                  {/* Location or Details */}
                  {card.location && (
                    <div className="mb-4 p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-start justify-center gap-2 text-xs md:text-sm font-inter text-muted-foreground">
                        <MapPin className="w-4 h-4 text-mainGreen mt-1 flex-shrink-0" />
                        <div className="text-left">
                          {card.location.split('\n').map((line, i) => (
                            <div key={i}>{line}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {card.details && (
                    <div className="mb-4 p-3 bg-muted/30 rounded-lg">
                      <div className="text-xs md:text-sm font-inter text-muted-foreground">
                        {card.details.split('\n').map((line, i) => (
                          <div key={i}>{line}</div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Button */}
                  <Button 
                    onClick={card.buttonAction}
                    className="btn-wedding-outline w-full text-sm"
                  >
                    {card.buttonText}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformationSection;
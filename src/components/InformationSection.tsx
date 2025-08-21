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
    <section id="dicas" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl wedding-title font-bold text-champagne mb-6">
            Informações Importantes
          </h2>
          <div className="w-24 h-px bg-champagne mx-auto mb-6"></div>
          <p className="wedding-text text-lg max-w-2xl mx-auto">
            Tudo que você precisa saber para celebrar conosco
          </p>
        </div>

        {/* Information Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {informationCards.map((card, index) => (
            <Card 
              key={index}
              className="p-8 bg-card/50 backdrop-blur-sm border-border/50 shadow-soft hover:shadow-elegant transition-wedding group"
            >
              <div className="text-center">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-champagne/10 rounded-full mb-6 group-hover:bg-champagne/20 transition-wedding">
                  <div className="text-champagne">
                    {card.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl wedding-title font-bold text-champagne mb-4">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="wedding-text mb-6 leading-relaxed">
                  {card.description}
                </p>

                {/* Location or Details */}
                {card.location && (
                  <div className="mb-6 p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-start justify-center gap-2 text-sm wedding-text">
                      <MapPin className="w-4 h-4 text-champagne mt-1 flex-shrink-0" />
                      <div className="text-left">
                        {card.location.split('\n').map((line, i) => (
                          <div key={i}>{line}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {card.details && (
                  <div className="mb-6 p-4 bg-muted/30 rounded-lg">
                    <div className="text-sm wedding-text">
                      {card.details.split('\n').map((line, i) => (
                        <div key={i}>{line}</div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Button */}
                <Button 
                  onClick={card.buttonAction}
                  className="btn-wedding-outline w-full"
                >
                  {card.buttonText}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InformationSection;
import { Card } from '@/components/ui/card';
import couple1 from '@/assets/couple-1.jpg';
import couple2 from '@/assets/couple-2.jpg';
import weddingRings from '@/assets/wedding-rings.jpg';

const TimelineSection = () => {
  const timelineEvents = [
    {
      number: '01.',
      date: '10 April 2018',
      title: 'Nosso Encontro',
      image: couple1,
      description: 'Onde tudo começou, o primeiro encontro que mudou nossas vidas para sempre.'
    },
    {
      number: '02.',
      date: '15 May 2018',
      title: 'O Início do Namoro',
      image: couple2,
      description: 'O momento em que decidimos oficializar nossa relação e começar nossa jornada juntos.'
    },
    {
      number: '03.',
      date: '18 Nov 2023',
      title: 'O Pedido',
      image: weddingRings,
      description: 'O momento mágico em que decidimos passar o resto de nossas vidas juntos.'
    },
    {
      number: '04.',
      date: '26 Jul 2026',
      title: 'O Grande Dia',
      image: couple1,
      description: 'O dia mais especial de nossas vidas, celebrando nosso amor com família e amigos.'
    }
  ];

  return (
    <section id="historia" className="min-h-screen py-20 bg-gradient-soft flex flex-col justify-center">
      <div className="max-w-6xl mx-auto px-4 h-full flex flex-col justify-center">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl wedding-title font-bold text-champagne mb-6">
            Nossa História
          </h2>
          <div className="w-24 h-px bg-champagne mx-auto"></div>
        </div>

        {/* Timeline */}
        <div className="flex-1 flex items-center justify-center">
          <div className="space-y-8 md:space-y-16 max-w-4xl">
            {timelineEvents.map((event, index) => (
              <div 
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-4 md:gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className="flex-1 max-w-sm">
                  <div className="relative group">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 md:h-64 object-cover rounded-lg shadow-elegant transition-wedding group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-champagne/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-wedding"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <Card className="p-4 md:p-6 bg-card/50 backdrop-blur-sm border-border/50 shadow-soft">
                    <div className="mb-4">
                      <span className="text-3xl md:text-5xl font-playfair font-light text-champagne/30">
                        {event.number}
                      </span>
                    </div>
                    
                    <div className="mb-4">
                      <p className="wedding-text text-sm tracking-wider uppercase mb-2">
                        {event.date}
                      </p>
                      <h3 className="text-xl md:text-2xl lg:text-3xl wedding-title font-bold text-champagne mb-4">
                        {event.title}
                      </h3>
                    </div>
                    
                    <p className="wedding-text text-sm md:text-base lg:text-lg leading-relaxed">
                      {event.description}
                    </p>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
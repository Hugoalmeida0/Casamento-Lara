import { Card } from '@/components/ui/card';
import couple1 from '@/assets/couple-1.jpg';
import couple2 from '@/assets/couple-2.jpg';
import weddingRings from '@/assets/wedding-rings.jpg';

const TimelineSection = () => {
  const timelineEvents = [
    {
      number: '01.',
      date: '10 April 2018',
      title: 'O começo',
      image: couple1,
      description: 'Onde tudo começou, o primeiro encontro que mudou nossas vidas para sempre.'
    },
    {
      number: '02.',
      date: '18 Nov 2023',
      title: 'O pedido',
      image: couple2,
      description: 'O momento mágico em que decidimos passar o resto de nossas vidas juntos.'
    },
    {
      number: '03.',
      date: '29 Jun 2024',
      title: 'O casamento',
      image: weddingRings,
      description: 'O dia mais especial de nossas vidas, celebrando nosso amor com família e amigos.'
    }
  ];

  return (
    <section id="historia" className="py-24 bg-gradient-soft">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl wedding-title font-bold text-champagne mb-6">
            Nossa História
          </h2>
          <div className="w-24 h-px bg-champagne mx-auto"></div>
        </div>

        {/* Timeline */}
        <div className="space-y-24">
          {timelineEvents.map((event, index) => (
            <div 
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className="flex-1 max-w-md">
                <div className="relative group">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-80 object-cover rounded-lg shadow-elegant transition-wedding group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-champagne/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-wedding"></div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 shadow-soft">
                  <div className="mb-4">
                    <span className="text-6xl font-playfair font-light text-champagne/30">
                      {event.number}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <p className="wedding-text text-sm tracking-wider uppercase mb-2">
                      {event.date}
                    </p>
                    <h3 className="text-3xl wedding-title font-bold text-champagne mb-4">
                      {event.title}
                    </h3>
                  </div>
                  
                  <p className="wedding-text text-lg leading-relaxed">
                    {event.description}
                  </p>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
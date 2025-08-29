import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

const RSVPSection = () => {
  const handleClick = () => {
    // Futuramente este botão direcionará para outra página
    console.log('Botão de confirmar presença clicado');
    // Exemplo: window.open('https://sua-pagina-de-confirmacao.com', '_blank');
  };

  return (
    <section id="confirme-presenca" className="py-20 bg-gradient-soft flex flex-col justify-center">
      <div className="max-w-4xl mx-auto px-4 flex flex-col justify-center">
        {/* Section Title */}
        <div className="text-center mb-12">
          <Heart className="w-10 h-10 md:w-12 md:h-12 text-mainGreen mx-auto mb-4 md:mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-seasons font-bold text-mainGreen mb-4 md:mb-6">
            Confirme sua Presença
          </h2>
          <div className="w-24 h-px bg-mainGreen mx-auto mb-4 md:mb-6"></div>
          <p className="font-inter text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-muted-foreground">
            Sua presença é o maior presente que podemos receber.
          </p>
        </div>

        {/* RSVP Button */}
        <div className="text-center">
          <Button
            onClick={handleClick}
            className="btn-wedding px-8 md:px-12 py-3 md:py-4 text-base md:text-lg min-w-40 md:min-w-48"
          >
            Confirmar Presença
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;
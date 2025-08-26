import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

const RSVPSection = () => {
  const handleClick = () => {
    // Futuramente este botão direcionará para outra página
    console.log('Botão de confirmar presença clicado');
    // Exemplo: window.open('https://sua-pagina-de-confirmacao.com', '_blank');
  };

  return (
    <section id="confirme-presenca" className="h-screen bg-gradient-soft flex flex-col justify-center">
      <div className="max-w-4xl mx-auto px-4 h-full flex flex-col justify-center">
        {/* Section Title */}
        <div className="text-center mb-16">
          <Heart className="w-12 h-12 text-mainGreen mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-seasons font-bold text-mainGreen mb-6">
            Confirme sua Presença
          </h2>
          <div className="w-24 h-px bg-mainGreen mx-auto mb-6"></div>
          <p className="font-inter text-lg max-w-2xl mx-auto leading-relaxed text-muted-foreground">
            Sua presença é o maior presente que podemos receber.
          </p>
        </div>

        {/* RSVP Button */}
        <div className="text-center">
          <Button
            onClick={handleClick}
            className="btn-wedding px-12 py-4 text-lg min-w-48"
          >
            Confirmar Presença
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;
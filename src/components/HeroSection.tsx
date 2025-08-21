import CountdownTimer from './CountdownTimer';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/wedding-hero-bg.jpg';

const HeroSection = () => {
  return (
    <section 
      id="inicio"
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/40"></div>
      
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Countdown Timer */}
        <div className="mb-16">
          <CountdownTimer />
        </div>

        {/* Main Title */}
        <div className="mb-16">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-playfair font-normal text-white mb-6 tracking-wider">
            AMÁBILLY{' '}
            <span className="text-champagne font-playfair italic">
              &amp;
            </span>{' '}
            GABRIEL
          </h1>
          
          <div className="w-32 h-px bg-champagne mx-auto mb-6"></div>
          
          <p className="text-xl md:text-2xl font-playfair italic text-white/90 mb-4 tracking-wide">
            nas suas linhas em que nos encontramos
          </p>
          
          <p className="text-lg md:text-xl font-inter font-light text-white/80 tracking-wider">
            29 DE JUNHO DE 2024
          </p>
          
          <p className="text-md font-inter font-light text-white/70 tracking-wider">
            MG - SP
          </p>
        </div>

        {/* Save the Date */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-4xl font-playfair font-bold text-white mb-8 tracking-wider">
            SAVE THE DATE!
          </h2>
          
          <Button 
            className="btn-wedding text-lg px-12 py-4 shadow-elegant"
            onClick={() => document.getElementById('confirme-presenca')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Confirme sua presença
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
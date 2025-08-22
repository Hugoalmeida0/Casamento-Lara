import CountdownTimer from './contagemRegressiva';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/image copy 2.png';

const HeroSection = () => {
  return (
    <section 
      id="inicio"
      className="h-screen flex flex-col justify-center items-center relative overflow-hidden"
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
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-garamond font-normal text-white mb-6 tracking-wider">
          LARAㅤ
          <span className="text-champagne font-garamond italic">
            &amp;
          </span>
          ㅤFILIPI
        </h1>

        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
          .font-garamond {
            font-family: 'Cormorant Garamond', serif;
          }
        `}</style>
          
          <div className="w-32 h-px bg-champagne mx-auto mb-6"></div>
          
          <p className="text-xl md:text-2xl font-playfair italic text-white/90 mb-4 tracking-wide">
          "Assim, eles já não são dois, mas sim uma só carne." (Mateus 19:6)
          </p>
          
          <p className="text-lg md:text-xl font-inter font-light text-white/80 tracking-wider">
            29 DE JUNHO DE 2026
          </p>
          
          <p className="text-md font-inter font-light text-white/70 tracking-wider">
            ES
          </p>
        </div>

        {/* Save the Date */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-4xl font-playfair font-bold text-white mb-8 tracking-wider">
            SAVE THE DATE!
          </h2>
          
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
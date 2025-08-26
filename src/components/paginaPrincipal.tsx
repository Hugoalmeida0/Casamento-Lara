import CountdownTimer from './contagemRegressiva';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import fotoCasal1 from '@/assets/foto-casal.jpeg';
import fotoCasal2 from '@/assets/foto-casal-2.jpeg';
import fotoCasal3 from '@/assets/foto-casal-3.jpeg';

// Hook personalizado para gerenciar a troca de imagens
const useBackgroundRotation = (images: string[], interval: number = 5000) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return images[currentImageIndex];
};

const HeroSection = () => {
  const backgroundImages = [fotoCasal1, fotoCasal2, fotoCasal3];
  const currentBackground = useBackgroundRotation(backgroundImages, 4000); // Troca a cada 4 segundos

  return (
    <section 
      id="inicio"
      className="h-screen flex flex-col justify-center items-center relative overflow-hidden transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url(${currentBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
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
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-seasons font-normal text-white mb-6 tracking-wider">
          LARA 
          <span className="text-mainGreen font-seasons italic">
            &amp;
          </span>
           FILIPI
        </h1>

          <div className="w-32 h-px bg-mainGreen mx-auto mb-6"></div>
          
          <p className="text-xl md:text-2xl font-seasons italic text-white/90 mb-4 tracking-wide">
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
          <h2 className="text-2xl md:text-4xl font-seasons font-bold text-white mb-8 tracking-wider">
            SAVE THE DATE!
          </h2>
          
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
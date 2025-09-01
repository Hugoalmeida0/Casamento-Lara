import CountdownTimer from './contagemRegressiva';
import { useState, useEffect } from 'react';
import fotoCasal1 from '@/assets/capa1.jpeg';
import fotoCasal2 from '@/assets/capa2.jpeg';
import fotoCasal3 from '@/assets/capa3.jpeg';
import fotoCasal4 from '@/assets/capa4.jpeg';
import fotoCasal5 from '@/assets/capa5.jpeg';
import papelRasgado from '@/assets/papelRasgado.png';

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
  const backgroundImages = [fotoCasal1, fotoCasal2, fotoCasal3, fotoCasal4, fotoCasal5];
  const currentBackground = useBackgroundRotation(backgroundImages, 4000); // Troca a cada 4 segundos

  return (
    <section 
      id="inicio"
      className="h-screen flex flex-col justify-center items-center relative overflow-hidden transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url(${currentBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      }}
    >

      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/50"></div>
      
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        
        <div className="mb-16 mt-20">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-freight font-normal text-white mb-6 tracking-wider">
          LARAﾠ
          <span className="text-mainGreen font-freight">
            &amp;
          </span>
          ﾠFILIPI
        </h1>

          <div className="w-32 h-px bg-mainGreen mx-auto mb-6"></div>
          
          <p className="text-xl md:text-5xl font-bickham italic text-white/90 mb-4 tracking-wide">
          Sejam bem vindos ao nosso felizes para sempre...
          </p>
          
          
        </div>
      </div>

      <div className="mb-16">
          <CountdownTimer />
        </div>
      
      {/* Papel rasgado - fora do container limitado */}
      <div className="absolute bottom-0 left-0 right-0 h-20 -ml-4 -mr-4" style={{ backgroundImage: `url(${papelRasgado})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      </div>
    </section>
  );
};

export default HeroSection;
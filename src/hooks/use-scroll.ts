import { useState, useEffect } from 'react';

export const useScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOnHero, setIsOnHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const heroHeight = window.innerHeight;
      
      // Se scrollou mais que 50px, considera que saiu do topo
      setIsScrolled(scrollTop > 50);
      
      // Se está na primeira tela (hero section), considera que está na página principal
      setIsOnHero(scrollTop < heroHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Executa uma vez para definir o estado inicial

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { isScrolled, isOnHero };
};

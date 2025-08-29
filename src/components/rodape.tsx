import { Heart, Instagram, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-15 bg-mainGreen/10 border-t border-border/30">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-1 mt-3">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-mainGreen/20 rounded-full mb-4">
            <img 
                src="/logo.png" 
                alt="Logo L&F" 
                className="w-14 h-14 object-contain"
            />
          </div>
          <h3 className="text-2xl font-freight font-bold text-mainGreen">
            Lara & Filipi
          </h3>
        </div>

        {/* Thank You Message */}
        <div className="mb-4 max-w-2xl mx-auto">
          <p className="font-freight text-lg leading-relaxed mb-2 text-muted-foreground">
            Obrigado por fazer parte da nossa história de amor. 
            Cada momento compartilhado conosco é um tesouro em nossos corações.
          </p>
        </div>

        

        {/* Divider */}
        <div className="w-24 h-px bg-mainGreen/30 mx-auto mb-3"></div>

        {/* Copyright */}
        <div className="font-inter text-sm text-muted-foreground mb-2">
          <p>© 2026 Lara & Filipi. Criado com amor para nosso dia especial.</p>
          <p className="mt-2">05 de Julho de 2026 • ES</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
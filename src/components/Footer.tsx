import { Heart, Instagram, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 bg-champagne/10 border-t border-border/30">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-champagne/20 rounded-full mb-4">
            <Heart className="w-8 h-8 text-champagne" />
          </div>
          <h3 className="text-2xl wedding-title font-bold text-champagne">
            Amábilly & Gabriel
          </h3>
        </div>

        {/* Thank You Message */}
        <div className="mb-8 max-w-2xl mx-auto">
          <p className="wedding-text text-lg leading-relaxed mb-4">
            Obrigado por fazer parte da nossa história de amor. 
            Cada momento compartilhado conosco é um tesouro em nossos corações.
          </p>
          <p className="text-champagne font-playfair italic text-xl">
            Com amor e gratidão,
          </p>
          <p className="text-champagne font-playfair italic text-xl">
            A & G
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="#"
            className="inline-flex items-center justify-center w-12 h-12 bg-champagne/10 rounded-full text-champagne hover:bg-champagne hover:text-foreground transition-wedding"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center w-12 h-12 bg-champagne/10 rounded-full text-champagne hover:bg-champagne hover:text-foreground transition-wedding"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="mailto:contato@amabillyegabriel.com"
            className="inline-flex items-center justify-center w-12 h-12 bg-champagne/10 rounded-full text-champagne hover:bg-champagne hover:text-foreground transition-wedding"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Divider */}
        <div className="w-24 h-px bg-champagne/30 mx-auto mb-6"></div>

        {/* Copyright */}
        <div className="wedding-text text-sm text-muted-foreground">
          <p>© 2024 Amábilly & Gabriel. Criado com amor para nosso dia especial.</p>
          <p className="mt-2">29 de Junho de 2024 • Jarinu, SP</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Heart, Instagram, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-20 bg-mainGreen/10 border-t border-border/30">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-mainGreen/20 rounded-full mb-4">
            <Heart className="w-8 h-8 text-mainGreen" />
          </div>
          <h3 className="text-2xl font-seasons font-bold text-mainGreen">
            Lara & Filipi
          </h3>
        </div>

        {/* Thank You Message */}
        <div className="mb-8 max-w-2xl mx-auto">
          <p className="font-inter text-lg leading-relaxed mb-4 text-muted-foreground">
            Obrigado por fazer parte da nossa história de amor. 
            Cada momento compartilhado conosco é um tesouro em nossos corações.
          </p>
          <p className="text-mainGreen font-beautiful text-xl">
            Com amor e gratidão,
          </p>
          <p className="text-mainGreen font-beautiful text-xl">
            L & F
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="#"
            className="inline-flex items-center justify-center w-12 h-12 bg-mainGreen/10 rounded-full text-mainGreen hover:bg-mainGreen hover:text-foreground transition-wedding"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center w-12 h-12 bg-mainGreen/10 rounded-full text-mainGreen hover:bg-mainGreen hover:text-foreground transition-wedding"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="mailto:contato@laraefilipi.com"
            className="inline-flex items-center justify-center w-12 h-12 bg-mainGreen/10 rounded-full text-mainGreen hover:bg-mainGreen hover:text-foreground transition-wedding"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Divider */}
        <div className="w-24 h-px bg-mainGreen/30 mx-auto mb-6"></div>

        {/* Copyright */}
        <div className="font-inter text-sm text-muted-foreground">
          <p>© 2026 Lara & Filipi. Criado com amor para nosso dia especial.</p>
          <p className="mt-2">26 de Julho de 2026 • ES</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
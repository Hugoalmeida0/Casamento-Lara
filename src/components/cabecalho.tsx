import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: 'início', href: '#inicio' },
    { title: 'CONFIRME PRESENÇA', href: '#confirme-presenca' },
    { title: 'PRESENTES', href: '#presentes' },
    { title: 'DICAS E INSTRUÇÕES', href: '#dicas' },
    { title: 'ÁLBUM DE FOTOS', href: '#album' },
    { title: 'NOSSA HISTÓRIA', href: '#historia' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Logo L&F" 
              className="w-12 h-12 object-contain"
            />
          </div>

          {/* Desktop Menu - Centralizado */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="font-inter text-sm font-medium text-muted-foreground hover:text-mainGreen transition-wedding tracking-wider uppercase"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-muted-foreground hover:text-mainGreen transition-wedding"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 font-inter text-sm font-medium text-muted-foreground hover:text-mainGreen transition-wedding tracking-wider uppercase"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
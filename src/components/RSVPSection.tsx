import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Heart, Send } from 'lucide-react';

const RSVPSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '1',
    dietary: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Confirmação recebida! 💕",
      description: "Obrigado por confirmar sua presença. Mal podemos esperar para celebrar com você!",
      duration: 5000,
    });

    setFormData({
      name: '',
      email: '',
      guests: '1',
      dietary: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="confirme-presenca" className="py-24 bg-gradient-soft">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <Heart className="w-12 h-12 text-champagne mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl wedding-title font-bold text-champagne mb-6">
            Confirme sua Presença
          </h2>
          <div className="w-24 h-px bg-champagne mx-auto mb-6"></div>
          <p className="wedding-text text-lg max-w-2xl mx-auto leading-relaxed">
            Sua presença é o maior presente que podemos receber. Por favor, confirme até 15 de maio de 2024.
          </p>
        </div>

        {/* RSVP Form */}
        <Card className="p-8 md:p-12 bg-card/70 backdrop-blur-sm border-border/50 shadow-elegant">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="wedding-text font-medium">
                  Nome Completo *
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-border/50 focus:border-champagne transition-wedding"
                  placeholder="Seu nome completo"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="wedding-text font-medium">
                  Email *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-border/50 focus:border-champagne transition-wedding"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            {/* Number of Guests */}
            <div className="space-y-2">
              <Label htmlFor="guests" className="wedding-text font-medium">
                Número de Convidados
              </Label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-border/50 rounded-md bg-background text-foreground focus:border-champagne transition-wedding"
              >
                <option value="1">1 pessoa</option>
                <option value="2">2 pessoas</option>
                <option value="3">3 pessoas</option>
                <option value="4">4 pessoas</option>
                <option value="5+">5+ pessoas</option>
              </select>
            </div>

            {/* Dietary Restrictions */}
            <div className="space-y-2">
              <Label htmlFor="dietary" className="wedding-text font-medium">
                Restrições Alimentares
              </Label>
              <Input
                id="dietary"
                name="dietary"
                value={formData.dietary}
                onChange={handleChange}
                className="border-border/50 focus:border-champagne transition-wedding"
                placeholder="Vegetariano, vegano, alergias, etc."
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message" className="wedding-text font-medium">
                Mensagem Especial (opcional)
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="border-border/50 focus:border-champagne transition-wedding resize-none"
                placeholder="Deixe uma mensagem carinhosa para os noivos..."
              />
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="btn-wedding px-12 py-4 text-lg min-w-48"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                    Enviando...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Confirmar Presença
                  </div>
                )}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default RSVPSection;
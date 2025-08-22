import Navigation from '@/components/cabecalho';
import HeroSection from '@/components/paginaPrincipal';
import TimelineSection from '@/components/linhaDoTempo';
import InformationSection from '@/components/informacoes';
import RSVPSection from '@/components/confirmarPresenca';
import Footer from '@/components/rodape';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <TimelineSection />
        <InformationSection />
        <RSVPSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import Navigation from '@/components/cabecalho';
import HeroSection from '@/components/paginaPrincipal';
import SaveTheDate from '@/components/saveTheDate';
import TimelineSection from '@/components/nossaHistoria';
import InformationSection from '@/components/informacoes';
import RSVPSection from '@/components/confirmarPresenca';
import Footer from '@/components/rodape';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <SaveTheDate />
        <TimelineSection />
        <InformationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

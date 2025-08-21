import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TimelineSection from '@/components/TimelineSection';
import InformationSection from '@/components/InformationSection';
import RSVPSection from '@/components/RSVPSection';
import Footer from '@/components/Footer';

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

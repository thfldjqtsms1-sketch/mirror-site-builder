import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { StatsSection } from '@/components/StatsSection';
import { SalesSlider } from '@/components/SalesSlider';
import { SuccessStories } from '@/components/SuccessStories';
import { PricingSection } from '@/components/PricingSection';
import { AboutSection } from '@/components/AboutSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { ProcessSection } from '@/components/ProcessSection';
import { ContactSection } from '@/components/ContactSection';
import { FAQSection } from '@/components/FAQSection';
import { StoreLocator } from '@/components/StoreLocator';
import { Footer } from '@/components/Footer';
import { FloatingCTA } from '@/components/FloatingCTA';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <SalesSlider />
        <SuccessStories />
        <PricingSection />
        <AboutSection />
        <FeaturesSection />
        <ProcessSection />
        <ContactSection />
        <FAQSection />
        <StoreLocator />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;

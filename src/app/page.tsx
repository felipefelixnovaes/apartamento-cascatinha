import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import PropertyHighlights from "@/components/PropertyHighlights";
import DescriptionSection from "@/components/DescriptionSection";
import InvestmentSection from "@/components/InvestmentSection";
import FloorPlanSection from "@/components/FloorPlanSection";
import NearbyPlacesSection from "@/components/NearbyPlacesSection";
import LifestyleSection from "@/components/LifestyleSection";
import MapSection from "@/components/MapSection";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import TrackingProvider from "@/components/TrackingProvider";

export default function Home() {
  return (
    <TrackingProvider>
      <main>
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Galeria */}
        <GallerySection />

        {/* 3. Destaques do imóvel */}
        <PropertyHighlights />

        {/* 4. Planta baixa */}
        <FloorPlanSection />

        {/* 5. Descrição comercial */}
        <DescriptionSection />

        {/* 5. Potencial de investimento */}
        <InvestmentSection />

        {/* 6. Proximidades */}
        <NearbyPlacesSection />



        {/* 7. Mapa */}
        <MapSection />

        {/* 6. Estilo de vida */}
        <LifestyleSection />

        {/* 8. FAQ */}
        <FAQSection />

        {/* 9. CTA final */}
        <CTASection />

        {/* 10. Formulário de contato */}
        <ContactForm />

        {/* Footer */}
        <Footer />
      </main>

      {/* Botão flutuante WhatsApp */}
      <WhatsAppFloatingButton />
    </TrackingProvider>
  );
}

import React from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { VenueSection } from "./components/VenueSection";
import { HappyHourSection } from "./components/HappyHourSection";
import { MenuSection } from "./components/MenuSection";
import { RsvpSection } from "./components/RsvpSection";
import { Footer } from "./components/Footer";
import { WavyRibbon } from "./components/WavyRibbon";
import { FloatingMobileBar } from "./components/FloatingMobileBar";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FCFAF7] text-[#2E1015] font-sans selection:bg-[#5B0616] selection:text-[#FCFAF7] relative overflow-x-hidden">
      {/* Navigation Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* A. Hero Section (Convite Limpo e Clássico) */}
        <HeroSection />

        {/* Delicate Wavy Ribbon Divider */}
        <WavyRibbon variant="bottom" />

        {/* B. Seção do Local & Rota (Sem redundâncias) */}
        <VenueSection />

        {/* C. Card Especial do Chopp (Preços detalhados) */}
        <HappyHourSection />

        {/* Delicate Wavy Ribbon Divider */}
        <WavyRibbon variant="top" />

        {/* D. Cardápio do Empório (Com mensagem de boas-vindas) */}
        <MenuSection />

        {/* E. Formulário de Confirmação - RSVP (Apenas nome e bebida) */}
        <RsvpSection />
      </main>

      {/* F. Rodapé Afetivo (Inspirado na arte do Canva) */}
      <Footer />

      {/* Floating Bottom RSVP Bar for Mobile */}
      <FloatingMobileBar />
    </div>
  );
}

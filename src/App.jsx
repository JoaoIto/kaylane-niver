import React from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { VenueSection } from "./components/VenueSection";
import { HappyHourSection } from "./components/HappyHourSection";
import { MenuSection } from "./components/MenuSection";
import { RsvpSection } from "./components/RsvpSection";
import { Footer } from "./components/Footer";
import { RibbonDivider } from "./components/RibbonDivider";
import { FloatingMobileBar } from "./components/FloatingMobileBar";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2E1015] font-sans selection:bg-[#72091F] selection:text-[#FAF8F5] relative overflow-x-hidden">
      {/* Navigation Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* A. Hero Section (O Convite com Laço de Veludo e Contagem Regressiva) */}
        <HeroSection />

        {/* Continuous Flowing Ribbon 1 */}
        <RibbonDivider variant="standard" />

        {/* B. Seção do Local & Experiência (Zé Colméia Gastrobar) */}
        <VenueSection />

        {/* Continuous Flowing Ribbon 2 */}
        <RibbonDivider variant="flip" />

        {/* C. Destaque Especial: Happy Hour & Bebidas (Chopp Dobradinha até às 20h) */}
        <HappyHourSection />

        {/* Continuous Flowing Ribbon 3 */}
        <RibbonDivider variant="standard" />

        {/* D. Cardápio do Local (Menu Digital Interativo) */}
        <MenuSection />

        {/* Continuous Flowing Ribbon 4 */}
        <RibbonDivider variant="flip" />

        {/* E. Confirmação de Presença (RSVP via WhatsApp) */}
        <RsvpSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Bottom RSVP Bar for Mobile */}
      <FloatingMobileBar />
    </div>
  );
}

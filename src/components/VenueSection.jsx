import React, { useState } from "react";
import { MapPin, Navigation, Copy, Check, ExternalLink, Sparkles, Car, ShieldCheck } from "lucide-react";
import { EVENT_DATA } from "../data/eventData";

export function VenueSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(EVENT_DATA.venue.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="local" className="relative py-16 md:py-24 bg-[#FAF8F5] overflow-hidden">
      {/* Decorative background aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-[#8B0021]/5 via-[#D4AF37]/5 to-[#8B0021]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Floating Organic Cherries Accent */}
      <div className="hidden lg:block absolute top-12 right-12 w-20 h-20 opacity-70 pointer-events-none animate-float-cherries select-none">
        <img
          src="/images/dark_cherries.png"
          alt="Cerejas"
          className="w-full h-full object-contain drop-shadow-md"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Badge & Title */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-[#FAF2E3] px-4 py-1.5 rounded-full border border-[#D4AF37]/60 shadow-sm mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={1.5} />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#5C0617]">
              O Local Escolhido
            </span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#4A0412] mb-3">
            {EVENT_DATA.venue.name}
          </h2>
          <p className="font-serif-cormorant text-lg sm:text-xl text-[#72091F]/85 italic">
            "Ambiente descontraído, charmoso e ao ar livre no Open Mall da 208 Sul, ideal para reunir os amigos e brindar em Palmas."
          </p>
        </div>

        {/* Editorial Luxury Venue Card (Sem fotos falsas) */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 md:p-12 border-2 border-[#E8D5B5] shadow-xl relative text-left hover:border-[#D4AF37]/80 transition-all duration-300">
          {/* Top Gold Corner Ornament */}
          <div className="flex items-center justify-between pb-6 border-b border-[#E8D5B5]/60 mb-6">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-[#8B0021] block">
                Palmas • Tocantins
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#5C0617] mt-0.5">
                Zé Colméia Gastrobar
              </h3>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF2E3] border border-[#D4AF37]/50 text-xs font-medium text-[#5C0617]">
              <ShieldCheck className="w-4 h-4 text-[#8B0021]" strokeWidth={1.5} />
              <span>Espaço Reservado</span>
            </div>
          </div>

          {/* Descriptive text */}
          <p className="text-sm sm:text-base text-[#4A3539] leading-relaxed mb-8 font-sans">
            Ambiente descontraído, charmoso e ao ar livre no <strong>Open Mall da 208 Sul</strong>, ideal para reunir os amigos e brindar em Palmas. Um ponto de encontro acolhedor com atendimento atencioso, cardápio repleto de delícias para petiscar e chopp geladíssimo para comemorarmos juntos.
          </p>

          {/* Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {/* Address Info */}
            <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/80 border border-[#E8D5B5]/70 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#72091F] to-[#5C0617] text-[#FAF2E3] flex items-center justify-center shrink-0 shadow-sm">
                <MapPin className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.5} />
              </div>
              <div className="text-xs sm:text-sm">
                <span className="font-bold text-[#5C0617] block mb-0.5">Endereço Completo</span>
                <span className="text-[#684C51] leading-snug block">{EVENT_DATA.venue.fullAddress}</span>
              </div>
            </div>

            {/* Parking Info */}
            <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/80 border border-[#E8D5B5]/70 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#72091F] to-[#5C0617] text-[#FAF2E3] flex items-center justify-center shrink-0 shadow-sm">
                <Car className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.5} />
              </div>
              <div className="text-xs sm:text-sm">
                <span className="font-bold text-[#5C0617] block mb-0.5">Estacionamento Facilitado</span>
                <span className="text-[#684C51] leading-snug block">Vagas amplas, práticas e seguras no próprio estacionamento do mall.</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2">
            {/* Primary Navigation Button */}
            <a
              href={EVENT_DATA.venue.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-gradient-to-r from-[#72091F] to-[#5C0617] text-[#FAF6F2] font-semibold text-sm sm:text-base tracking-wide shadow-lg hover:shadow-xl hover:from-[#8B0021] hover:to-[#72091F] border border-[#D4AF37]/60 transition-all duration-300 hover:scale-[1.02] group"
            >
              <Navigation className="w-5 h-5 text-[#D4AF37] group-hover:rotate-12 transition-transform" strokeWidth={1.5} />
              <span>Como Chegar (Abrir no Google Maps)</span>
              <ExternalLink className="w-4 h-4 text-[#FAF2E3]/70 ml-0.5" strokeWidth={1.5} />
            </a>

            {/* Secondary Copy Button */}
            <button
              onClick={handleCopyAddress}
              type="button"
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white text-[#5C0617] font-semibold text-xs sm:text-sm border border-[#E8D5B5] hover:bg-[#FAF2E3] shadow-sm transition-all duration-200 flex items-center justify-center gap-2"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" strokeWidth={1.5} />
                  <span className="text-emerald-700">Endereço copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#8B0021]" strokeWidth={1.5} />
                  <span>Copiar Endereço</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

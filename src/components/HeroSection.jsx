import React, { useState, useEffect } from "react";
import { Calendar, Clock, MapPin, Sparkles, Heart, ChevronDown, Beer } from "lucide-react";
import { EVENT_DATA } from "../data/eventData";
import { CalendarModal } from "./CalendarModal";

export function HeroSection() {
  const [calendarModalOpen, setCalendarModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
  });

  useEffect(() => {
    // Target event timestamp: 14 Nov 2025 at 17:30 BRT
    const targetDate = new Date(EVENT_DATA.dateISO).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isPast: true,
        });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds, isPast: false });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatDigit = (num) => String(num).padStart(2, "0");

  return (
    <section id="hero" className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden text-center bg-[#FAF8F5]">
      {/* Background Soft Lighting / Aura */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-gradient-to-b from-[#8B0021]/10 via-[#FAF2E3]/50 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Floating Organic Cherries Accent - Top Left */}
      <div className="hidden sm:block absolute top-16 left-6 md:left-14 w-16 h-16 md:w-20 md:h-20 opacity-80 pointer-events-none animate-float-cherries z-0 select-none">
        <img
          src="/images/dark_cherries.png"
          alt="Cerejas Decorativas"
          className="w-full h-full object-contain drop-shadow-md"
        />
      </div>

      {/* Floating Organic Cherries Accent - Top Right */}
      <div className="hidden sm:block absolute top-24 right-6 md:right-16 w-14 h-14 md:w-16 md:h-16 opacity-75 pointer-events-none animate-float-gentle z-0 select-none">
        <img
          src="/images/dark_cherries.png"
          alt="Cerejas Decorativas"
          className="w-full h-full object-contain drop-shadow-md scale-x-[-1]"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* ======================================================== */}
        {/* 1. ORGANIC VELVET BOW - SEM MOLDURAS OU CAIXAS            */}
        {/* ======================================================== */}
        <div className="relative mx-auto max-w-[280px] sm:max-w-[360px] md:max-w-[420px] mb-2 sm:mb-4 animate-float-gentle pointer-events-none select-none">
          {/* Subtle soft warmth under the bow */}
          <div className="absolute inset-x-8 top-12 h-24 bg-[#5C0617]/12 blur-2xl rounded-full" />
          
          <img
            src="/images/burgundy_velvet_bow.png"
            alt="Laço de Veludo Vinho Acetinado"
            className="relative z-10 w-full h-auto object-contain drop-shadow-xl"
          />

          {/* Floating Organic Cherry Detail next to ribbon */}
          <div className="absolute -right-2 sm:-right-4 bottom-2 z-20 w-12 h-12 sm:w-14 sm:h-14 animate-float-cherries">
            <img
              src="/images/dark_cherries.png"
              alt="Cerejas Frescas"
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. SCRIPT OPENING PHRASE                                 */}
        {/* ======================================================== */}
        <div className="mb-2 sm:mb-3">
          <span className="font-handwriting text-3xl sm:text-4xl md:text-5xl text-[#8B0021] block tracking-wide">
            Te convido a celebrar comigo
          </span>
        </div>

        {/* ======================================================== */}
        {/* 3. MAIN EDITORIAL TITLE                                  */}
        {/* ======================================================== */}
        <div className="relative inline-block mb-6 sm:mb-8">
          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#4A0412] leading-[1.08]">
            {EVENT_DATA.celebrantName}
          </h1>
          <div className="flex items-center justify-center gap-3 mt-3">
            <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#8B0021]">
              Celebração Especial de Aniversário
            </span>
            <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          </div>
        </div>

        {/* ======================================================== */}
        {/* 4. ESSENTIAL INFO CARD (DATA, HORÁRIO, LOCAL)            */}
        {/* ======================================================== */}
        <div className="max-w-xl mx-auto mb-8 sm:mb-10">
          <div className="glass-card rounded-3xl p-5 sm:p-6 border border-[#E8D5B5] shadow-lg relative overflow-hidden group hover:border-[#D4AF37] transition-all">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E8D5B5]/70">
              {/* Data */}
              <div className="flex flex-col items-center justify-center pt-2 sm:pt-0">
                <div className="flex items-center gap-1.5 text-[#8B0021] text-xs font-semibold uppercase tracking-wider mb-1">
                  <Calendar className="w-3.5 h-3.5 text-[#8B0021]" strokeWidth={1.5} />
                  <span>Data</span>
                </div>
                <p className="font-editorial text-xl sm:text-2xl font-bold text-[#5C0617]">
                  14 de Novembro
                </p>
                <span className="text-xs text-[#72091F]/80 font-medium">Sexta-feira • 2025</span>
              </div>

              {/* Horário */}
              <div className="flex flex-col items-center justify-center pt-3 sm:pt-0 sm:px-2">
                <div className="flex items-center gap-1.5 text-[#8B0021] text-xs font-semibold uppercase tracking-wider mb-1">
                  <Clock className="w-3.5 h-3.5 text-[#8B0021]" strokeWidth={1.5} />
                  <span>Horário</span>
                </div>
                <p className="font-editorial text-xl sm:text-2xl font-bold text-[#5C0617]">
                  A partir das 17h30
                </p>
                <div className="flex items-center gap-1 text-[11px] text-[#8B0021] font-semibold bg-[#FAF2E3] px-2.5 py-0.5 rounded-full border border-[#D4AF37]/50 mt-1">
                  <Beer className="w-3 h-3 text-[#D4AF37]" strokeWidth={1.5} />
                  <span>Chopp Dobradinha</span>
                </div>
              </div>

              {/* Local */}
              <div className="flex flex-col items-center justify-center pt-3 sm:pt-0 sm:pl-2">
                <div className="flex items-center gap-1.5 text-[#8B0021] text-xs font-semibold uppercase tracking-wider mb-1">
                  <MapPin className="w-3.5 h-3.5 text-[#8B0021]" strokeWidth={1.5} />
                  <span>Local</span>
                </div>
                <p className="font-editorial text-lg sm:text-xl font-bold text-[#5C0617] leading-tight">
                  Zé Colméia
                </p>
                <span className="text-xs text-[#72091F]/80 font-medium">Open Mall • 208 Sul</span>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 5. COUNTDOWN TIMER (MINIMALIST CARDS)                     */}
        {/* ======================================================== */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 mb-3 bg-[#FAF2E3]/90 px-4 py-1.5 rounded-full border border-[#D4AF37]/60 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={1.5} />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#5C0617]">
              {timeLeft.isPast ? "O Momento da Celebração" : "Contagem Regressiva para o Brinde"}
            </span>
          </div>

          {timeLeft.isPast ? (
            <div className="max-w-md mx-auto p-4 rounded-2xl bg-gradient-to-r from-[#72091F] to-[#5C0617] text-[#FAF6F2] shadow-lg border border-[#D4AF37]">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Sparkles className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.5} />
                <p className="font-editorial text-2xl font-bold">Chegou o grande dia!</p>
              </div>
              <p className="text-xs sm:text-sm text-[#FAF2E3]/90">
                Estamos comemorando no Zé Colméia Gastrobar! Venha brindar conosco!
              </p>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2 sm:gap-4 max-w-lg mx-auto">
              {/* Dias */}
              <div className="flex-1 bg-gradient-to-b from-[#5C0617] to-[#420410] rounded-2xl p-2.5 sm:p-4 text-[#FAF2E3] border border-[#D4AF37]/50 shadow-md">
                <span className="block font-editorial text-2xl sm:text-4xl font-bold tracking-tight">
                  {formatDigit(timeLeft.days)}
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#E8D5B5]/90 font-medium">
                  Dias
                </span>
              </div>

              {/* Horas */}
              <div className="flex-1 bg-gradient-to-b from-[#5C0617] to-[#420410] rounded-2xl p-2.5 sm:p-4 text-[#FAF2E3] border border-[#D4AF37]/50 shadow-md">
                <span className="block font-editorial text-2xl sm:text-4xl font-bold tracking-tight">
                  {formatDigit(timeLeft.hours)}
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#E8D5B5]/90 font-medium">
                  Horas
                </span>
              </div>

              {/* Minutos */}
              <div className="flex-1 bg-gradient-to-b from-[#5C0617] to-[#420410] rounded-2xl p-2.5 sm:p-4 text-[#FAF2E3] border border-[#D4AF37]/50 shadow-md">
                <span className="block font-editorial text-2xl sm:text-4xl font-bold tracking-tight">
                  {formatDigit(timeLeft.minutes)}
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#E8D5B5]/90 font-medium">
                  Minutos
                </span>
              </div>

              {/* Segundos */}
              <div className="flex-1 bg-gradient-to-b from-[#72091F] to-[#5C0617] rounded-2xl p-2.5 sm:p-4 text-[#FAF2E3] border border-[#D4AF37]/60 shadow-md animate-pulse">
                <span className="block font-editorial text-2xl sm:text-4xl font-bold tracking-tight text-[#FAF2E3]">
                  {formatDigit(timeLeft.seconds)}
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
                  Segundos
                </span>
              </div>
            </div>
          )}
        </div>

        {/* ======================================================== */}
        {/* 6. CALL TO ACTION BUTTONS                                */}
        {/* ======================================================== */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          {/* Confirm RSVP Link Button (Primary) */}
          <a
            href="#rsvp"
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#72091F] to-[#5C0617] text-[#FAF6F2] font-semibold text-sm sm:text-base tracking-wide shadow-lg hover:shadow-xl hover:from-[#8B0021] hover:to-[#72091F] border border-[#D4AF37]/60 transition-all duration-300 hover:scale-105 group"
          >
            <Heart className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]/20 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
            <span>Confirmar Presença</span>
          </a>

          {/* Save to Calendar Button (Secondary) */}
          <button
            onClick={() => setCalendarModalOpen(true)}
            type="button"
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-[#5C0617] font-semibold text-sm sm:text-base tracking-wide shadow-md hover:shadow-lg border border-[#E8D5B5] hover:bg-[#FAF2E3]/60 transition-all duration-300 hover:scale-105 group"
          >
            <Calendar className="w-5 h-5 text-[#8B0021] group-hover:scale-110 transition-transform" strokeWidth={1.5} />
            <span>Salvar na Minha Agenda</span>
          </button>
        </div>

        {/* Scroll down indicator */}
        <div className="mt-12 flex flex-col items-center justify-center text-[#8B0021]/70">
          <span className="text-[11px] font-sans uppercase tracking-widest mb-1 font-medium">
            Deslize para ver o cardápio e local
          </span>
          <ChevronDown className="w-5 h-5 animate-bounce" strokeWidth={1.5} />
        </div>
      </div>

      {/* Calendar Modal */}
      <CalendarModal
        isOpen={calendarModalOpen}
        onClose={() => setCalendarModalOpen(false)}
      />
    </section>
  );
}

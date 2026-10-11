import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, ChevronDown, Heart } from "lucide-react";
import { EVENT_DATA } from "../data/eventData";
import { CalendarModal } from "./CalendarModal";
import { CherryBowIllustration } from "./CherryBowIllustration";
import { WavyRibbon } from "./WavyRibbon";

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
    // Target event timestamp: 14 Nov 2026 at 17:30 BRT
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="hero" className="relative pt-16 pb-14 md:pt-20 md:pb-20 overflow-hidden text-center bg-[#FCFAF7]">
      {/* Top Continuous Wavy Ribbon Line (Canva style) */}
      <WavyRibbon variant="top" className="mb-4 sm:mb-6" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10"
      >
        {/* ======================================================== */}
        {/* 1. DELICATE BOW & CHERRIES ARTWORK (SEM MOLDURA/CAIXA)   */}
        {/* ======================================================== */}
        <motion.div variants={itemVariants} className="mb-3 sm:mb-4">
          <CherryBowIllustration />
        </motion.div>

        {/* ======================================================== */}
        {/* 2. SCRIPT OPENING PHRASE                                 */}
        {/* ======================================================== */}
        <motion.div variants={itemVariants} className="mb-2">
          <span className="font-handwriting text-3xl sm:text-4xl md:text-5xl text-[#5B0616] block tracking-wide">
            Te convido a celebrar comigo
          </span>
        </motion.div>

        {/* ======================================================== */}
        {/* 3. MAIN EDITORIAL TITLE                                  */}
        {/* ======================================================== */}
        <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#420410] leading-none mb-3">
            {EVENT_DATA.celebrantName}
          </h1>
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1px] w-12 sm:w-20 bg-[#EADFD7]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-sans font-medium text-[#7D1225]">
              Celebração Especial de Aniversário
            </span>
            <span className="h-[1px] w-12 sm:w-20 bg-[#EADFD7]" />
          </div>
        </motion.div>

        {/* ======================================================== */}
        {/* 4. ESSENTIAL INFO BLOCK (CLEAN & MINIMALIST)             */}
        {/* Regra 2: SEM menção de chopp aqui!                        */}
        {/* ======================================================== */}
        <motion.div variants={itemVariants} className="max-w-xl mx-auto mb-8 sm:mb-10">
          <div className="bg-white/80 rounded-2xl p-5 sm:p-6 border border-[#EADFD7] shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#EADFD7]">
              {/* Data */}
              <div className="flex flex-col items-center justify-center pt-2 sm:pt-0">
                <div className="flex items-center gap-1.5 text-[#5B0616] text-[11px] font-semibold uppercase tracking-wider mb-1">
                  <Calendar className="w-3.5 h-3.5" strokeWidth={1.25} />
                  <span>Data</span>
                </div>
                <p className="font-editorial text-lg sm:text-xl font-bold text-[#5B0616]">
                  14 de Novembro
                </p>
                <span className="text-xs text-[#7D1225] font-light">Sábado • 2026</span>
              </div>

              {/* Horário */}
              <div className="flex flex-col items-center justify-center pt-3 sm:pt-0 sm:px-2">
                <div className="flex items-center gap-1.5 text-[#5B0616] text-[11px] font-semibold uppercase tracking-wider mb-1">
                  <Clock className="w-3.5 h-3.5" strokeWidth={1.25} />
                  <span>Horário</span>
                </div>
                <p className="font-editorial text-lg sm:text-xl font-bold text-[#5B0616]">
                  A partir das 17h30
                </p>
                <span className="text-xs text-[#7D1225] font-light">Encontro ao entardecer</span>
              </div>

              {/* Local */}
              <div className="flex flex-col items-center justify-center pt-3 sm:pt-0 sm:pl-2">
                <div className="flex items-center gap-1.5 text-[#5B0616] text-[11px] font-semibold uppercase tracking-wider mb-1">
                  <MapPin className="w-3.5 h-3.5" strokeWidth={1.25} />
                  <span>Local</span>
                </div>
                <p className="font-editorial text-base sm:text-lg font-bold text-[#5B0616] leading-tight">
                  Zé Colméia
                </p>
                <span className="text-xs text-[#7D1225] font-light">Open Mall • 208 Sul</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ======================================================== */}
        {/* 5. MINIMALIST COUNTDOWN TIMER                             */}
        {/* ======================================================== */}
        <motion.div variants={itemVariants} className="mb-8 sm:mb-10">
          <div className="flex items-center justify-center gap-2 sm:gap-3 max-w-md mx-auto">
            {/* Dias */}
            <div className="flex-1 bg-white border border-[#EADFD7] rounded-xl p-2.5 sm:p-3 shadow-xs">
              <span className="block font-editorial text-2xl sm:text-3xl font-bold text-[#5B0616] leading-none">
                {formatDigit(timeLeft.days)}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#7D1225] font-medium mt-1 block">
                Dias
              </span>
            </div>

            {/* Horas */}
            <div className="flex-1 bg-white border border-[#EADFD7] rounded-xl p-2.5 sm:p-3 shadow-xs">
              <span className="block font-editorial text-2xl sm:text-3xl font-bold text-[#5B0616] leading-none">
                {formatDigit(timeLeft.hours)}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#7D1225] font-medium mt-1 block">
                Horas
              </span>
            </div>

            {/* Minutos */}
            <div className="flex-1 bg-white border border-[#EADFD7] rounded-xl p-2.5 sm:p-3 shadow-xs">
              <span className="block font-editorial text-2xl sm:text-3xl font-bold text-[#5B0616] leading-none">
                {formatDigit(timeLeft.minutes)}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#7D1225] font-medium mt-1 block">
                Minutos
              </span>
            </div>

            {/* Segundos */}
            <div className="flex-1 bg-white border border-[#EADFD7] rounded-xl p-2.5 sm:p-3 shadow-xs">
              <span className="block font-editorial text-2xl sm:text-3xl font-bold text-[#7D1225] leading-none">
                {formatDigit(timeLeft.seconds)}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#7D1225] font-medium mt-1 block">
                Segundos
              </span>
            </div>
          </div>
        </motion.div>

        {/* ======================================================== */}
        {/* 6. CALL TO ACTION BUTTONS                                */}
        {/* ======================================================== */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
          {/* Confirm RSVP Link Button */}
          <motion.a
            href="#rsvp"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto flex-1 min-h-[48px] flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#5B0616] text-[#FCFAF7] font-sans font-medium text-sm tracking-wide shadow-xs hover:bg-[#72091F] transition-colors"
          >
            <Heart className="w-4 h-4 text-[#EADFD7]" strokeWidth={1.25} />
            <span>Confirmar Presença</span>
          </motion.a>

          {/* Save to Calendar Button */}
          <motion.button
            onClick={() => setCalendarModalOpen(true)}
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto flex-1 min-h-[48px] flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-[#5B0616] font-sans font-medium text-sm tracking-wide border border-[#EADFD7] hover:border-[#5B0616] transition-colors shadow-xs"
          >
            <Calendar className="w-4 h-4 text-[#5B0616]" strokeWidth={1.25} />
            <span>Salvar na Agenda</span>
          </motion.button>
        </motion.div>

        {/* Subtle scroll down indicator */}
        <motion.div variants={itemVariants} className="mt-10 flex flex-col items-center justify-center text-[#7D1225]/60">
          <span className="text-[10px] font-sans uppercase tracking-widest mb-1 font-light">
            Deslize para ver os detalhes
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce" strokeWidth={1.25} />
        </motion.div>
      </motion.div>

      {/* Calendar Modal */}
      <CalendarModal
        isOpen={calendarModalOpen}
        onClose={() => setCalendarModalOpen(false)}
      />
    </section>
  );
}

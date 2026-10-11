import React, { useState } from "react";
import { ArrowUp, Heart, Share2, Check, Calendar, Clock, MapPin } from "lucide-react";
import { EVENT_DATA } from "../data/eventData";

export function Footer() {
  const [copiedLink, setCopiedLink] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Aniversário de Kaylane Almeida",
        text: "Te convido a celebrar comigo! 14 de Novembro às 17h30 no Zé Colméia Gastrobar.",
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <footer className="relative bg-[#2B030A] text-[#FAF6F2] pt-16 pb-12 overflow-hidden border-t-2 border-[#D4AF37]/50">
      {/* Background warm lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-[#8B0021]/30 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-6">
        {/* Monogram Brand Header */}
        <div className="inline-flex items-center justify-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#5C0617] flex items-center justify-center border border-[#D4AF37]/60">
            <span className="font-editorial text-sm font-bold text-[#FAF2E3]">K</span>
          </div>
          <span className="font-editorial text-2xl font-bold tracking-wider text-[#FAF2E3]">
            {EVENT_DATA.celebrantName}
          </span>
        </div>

        {/* Romantic quote */}
        <p className="font-handwriting text-2xl sm:text-3xl text-[#E8D5B5] max-w-lg mx-auto">
          "Celebrar mais um ano ao lado de quem amamos torna a vida inesquecível."
        </p>

        {/* Quick event summary with Lucide icons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-[#FAF2E3]/85 font-medium pt-2">
          <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={1.5} />
            <span>{EVENT_DATA.dateString}</span>
          </span>
          <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={1.5} />
            <span>A partir das {EVENT_DATA.startTime}</span>
          </span>
          <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={1.5} />
            <span>{EVENT_DATA.venue.name}</span>
          </span>
        </div>

        {/* Share and Back to Top actions */}
        <div className="flex items-center justify-center gap-4 pt-4">
          <button
            onClick={handleShare}
            type="button"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-[#FAF2E3] border border-[#D4AF37]/40 transition-colors"
          >
            {copiedLink ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" strokeWidth={1.5} />
                <span>Link Copiado!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={1.5} />
                <span>Compartilhar Convite</span>
              </>
            )}
          </button>

          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-[#FAF2E3] border border-white/20 transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5" strokeWidth={1.5} />
            <span>Voltar ao Topo</span>
          </button>
        </div>

        {/* Copyright & Warm Note */}
        <div className="pt-8 border-t border-white/10 text-[11px] text-[#FAF2E3]/50">
          <p className="flex items-center justify-center gap-1.5">
            <span>Celebração de Aniversário • Kaylane Almeida</span>
            <Heart className="w-3 h-3 text-[#E63956] fill-[#E63956]" strokeWidth={1.5} />
          </p>
          <p className="mt-1">Palmas, Tocantins • 2025</p>
        </div>
      </div>
    </footer>
  );
}

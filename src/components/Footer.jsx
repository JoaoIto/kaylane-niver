import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp, Share2, Check } from "lucide-react";
import { EVENT_DATA } from "../data/eventData";
import { CakeIllustration } from "./CakeIllustration";
import { WavyRibbon } from "./WavyRibbon";

export function Footer() {
  const [copiedLink, setCopiedLink] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Aniversário de Kaylane Almeida",
        text: "Te convido a celebrar comigo! 14 de Novembro de 2026 às 17h30 no Zé Colméia Gastrobar.",
        url: window.location.href,
      }).catch(() => { });
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <footer className="relative bg-[#FCFAF7] text-[#2E1015] pt-12 pb-8 overflow-hidden text-center">
      <div className="max-w-xl mx-auto px-4 sm:px-6 relative z-10 space-y-5">
        {/* ======================================================== */}
        {/* AFFECTIVE CARD SECTION (REPRODUZINDO A ARTE DO CANVA)     */}
        {/* ======================================================== */}

        {/* 1. Main Cursive Phrase */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-handwriting text-3xl sm:text-4xl md:text-5xl text-[#5B0616] block tracking-wide">
            Obrigada pela sua presença!
          </span>
        </motion.div>

        {/* 2. Italic Serif Line */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif-cormorant text-base sm:text-lg italic text-[#5B0616] max-w-sm mx-auto"
        >
          Esse dia não seria tão especial sem você!
        </motion.p>

        {/* 3. Delicate Cake Illustration (as on the card) */}
        <div className="py-2">
          <CakeIllustration />
        </div>

        {/* 4. Affectionate Signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-0.5 pt-1"
        >
          <span className="text-xs font-serif-cormorant italic text-[#7D1225] block">
            com carinho,
          </span>
          <span className="font-handwriting text-2xl sm:text-3xl text-[#5B0616] block">
            Kaylane Almeida.
          </span>
        </motion.div>

        {/* Actions (Compartilhar e Voltar ao Topo) */}
        <div className="flex items-center justify-center gap-3 pt-4">
          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-xs font-sans text-[#5B0616] border border-[#EADFD7] hover:border-[#5B0616] transition-colors shadow-xs"
          >
            <ArrowUp className="w-3.5 h-3.5" strokeWidth={1.25} />
            <span>Voltar ao Topo</span>
          </button>
        </div>

        {/* Location & Year */}
        <p className="text-[11px] text-[#7D1225]/60 font-light pt-2">
          {EVENT_DATA.dateString} • {EVENT_DATA.venue.name} • Palmas, TO
        </p>
      </div>

      {/* Bottom Continuous Wavy Ribbon Line (Canva style) */}
      <WavyRibbon variant="bottom" className="mt-4 sm:mt-6" />
    </footer>
  );
}

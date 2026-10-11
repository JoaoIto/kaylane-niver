import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, Copy, Check, ExternalLink } from "lucide-react";
import { EVENT_DATA } from "../data/eventData";

export function VenueSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(EVENT_DATA.venue.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="local" className="relative py-14 md:py-20 bg-[#FCFAF7] overflow-hidden text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl mx-auto px-4 sm:px-6"
      >
        {/* Title */}
        <span className="font-handwriting text-2xl sm:text-3xl text-[#5B0616] block mb-1">
          O Local Escolhido
        </span>
        <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#420410] mb-3">
          {EVENT_DATA.venue.name}
        </h2>

        {/* Address in discreet line */}
        <div className="flex items-center justify-center gap-1.5 text-xs sm:text-sm text-[#7D1225] font-light mb-8 max-w-lg mx-auto">
          <MapPin className="w-4 h-4 text-[#5B0616] shrink-0" strokeWidth={1.25} />
          <span>{EVENT_DATA.venue.fullAddress}</span>
        </div>

        {/* Single Primary Action Button in Satin Wine */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
          <motion.a
            href={EVENT_DATA.venue.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto flex-1 min-h-[48px] flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#5B0616] text-[#FCFAF7] font-sans font-medium text-sm tracking-wide shadow-xs hover:bg-[#72091F] transition-colors"
          >
            <Navigation className="w-4 h-4 text-[#EADFD7]" strokeWidth={1.25} />
            <span>Como Chegar (Abrir no Google Maps)</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#EADFD7]/80" strokeWidth={1.25} />
          </motion.a>

          {/* Discreet Copy Address Button */}
          <motion.button
            onClick={handleCopyAddress}
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto min-h-[48px] px-5 py-3 rounded-full bg-white text-[#5B0616] font-sans text-xs border border-[#EADFD7] hover:border-[#5B0616] transition-colors flex items-center justify-center gap-2"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-700" strokeWidth={1.25} />
                <span className="text-emerald-800 font-medium">Copiado</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#5B0616]" strokeWidth={1.25} />
                <span>Copiar Endereço</span>
              </>
            )}
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}

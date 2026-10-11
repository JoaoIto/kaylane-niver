import React from "react";
import { motion } from "framer-motion";
import { Beer, Clock, Sparkles } from "lucide-react";
import { EVENT_DATA } from "../data/eventData";

export function HappyHourSection() {
  return (
    <section id="happy-hour" className="relative py-12 md:py-18 bg-[#FCFAF7] overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#420410] via-[#5B0616] to-[#36030B] text-[#FCFAF7] p-7 sm:p-10 md:p-12 border border-[#EADFD7]/30 shadow-xl text-center"
        >
          {/* Subtle gold sparkles watermark */}
          <div className="absolute top-4 right-4 text-[#D4AF37]/20 select-none pointer-events-none">
            <Sparkles className="w-14 h-14" strokeWidth={1} />
          </div>

          {/* Script Subtitle */}
          <span className="font-handwriting text-2xl sm:text-3xl text-[#EADFD7] block mb-2">
            Para quem for brindar conosco...
          </span>

          {/* Headline */}
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#FCFAF7] mb-4">
            Chopp Dobradinha <br />
            <span className="text-[#D4AF37] font-normal italic">
              até às 20h00
            </span>
          </h2>

          {/* Pricing cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-lg mx-auto my-6 text-left">
            {/* Promo Price */}
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-xs border border-[#D4AF37]/40 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center shrink-0">
                <Beer className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.25} />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#EADFD7] font-medium block">
                  Até às 20h00 (Dobradinha)
                </span>
                <p className="font-editorial text-xl font-bold text-[#FCFAF7]">
                  {EVENT_DATA.happyHourPrice} <span className="text-xs font-sans font-light text-[#EADFD7]">cada chopp</span>
                </p>
              </div>
            </div>

            {/* Regular Price */}
            <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-xs border border-white/15 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-[#EADFD7]" strokeWidth={1.25} />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#EADFD7]/80 font-medium block">
                  Após às 20h00 (Preço normal)
                </span>
                <p className="font-editorial text-xl font-bold text-[#FCFAF7]">
                  {EVENT_DATA.regularPrice} <span className="text-xs font-sans font-light text-[#EADFD7]/80">por chopp</span>
                </p>
              </div>
            </div>
          </div>

          {/* Supporting Phrase */}
          <p className="text-xs sm:text-sm text-[#EADFD7] font-sans font-light max-w-md mx-auto leading-relaxed">
            Chegue cedinho a partir das 17h30 para aproveitarmos juntos a rodada dupla!
          </p>
        </motion.div>
      </div>
    </section>
  );
}

import React, { useState, useEffect } from "react";
import { Sparkles, Heart } from "lucide-react";

export function FloatingMobileBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when user scrolls past 300px
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden animate-slideUp">
      <div className="bg-[#4A0412]/95 backdrop-blur-md border border-[#D4AF37]/60 rounded-full p-2 pl-4 pr-2 shadow-2xl flex items-center justify-between gap-2 text-[#FAF6F2]">
        <div className="flex items-center gap-2.5 overflow-hidden">
          <div className="w-7 h-7 rounded-full bg-[#72091F] flex items-center justify-center border border-[#D4AF37]/50 shrink-0">
            <span className="font-editorial text-xs font-bold text-[#FAF2E3]">K</span>
          </div>
          <div className="text-left leading-tight truncate">
            <span className="block text-xs font-editorial font-bold text-[#FAF2E3]">
              Kaylane Almeida
            </span>
            <span className="text-[10px] text-[#E8D5B5] font-sans">
              14/11 • 17h30 • Zé Colméia
            </span>
          </div>
        </div>

        <a
          href="#rsvp"
          className="shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#8B0021] to-[#72091F] text-[#FAF6F2] text-xs font-bold uppercase tracking-wider shadow-md border border-[#D4AF37]/40 hover:scale-105 active:scale-95 transition-transform"
        >
          <Heart className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]/30" strokeWidth={1.5} />
          <span>Confirmar</span>
        </a>
      </div>
    </div>
  );
}

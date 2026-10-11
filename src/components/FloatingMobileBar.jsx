import React, { useState, useEffect } from "react";
import { Heart } from "lucide-react";

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
      <div className="bg-[#420410]/95 backdrop-blur-md border border-[#EADFD7]/30 rounded-full p-2 pl-4 pr-2 shadow-xl flex items-center justify-between gap-2 text-[#FCFAF7]">
        <div className="flex items-center gap-2.5 overflow-hidden">
          <div className="w-7 h-7 rounded-full bg-[#5B0616] flex items-center justify-center border border-[#EADFD7]/40 shrink-0">
            <span className="font-serif italic text-xs font-bold text-[#FCFAF7]">K</span>
          </div>
          <div className="text-left leading-tight truncate">
            <span className="block text-xs font-editorial font-bold text-[#FCFAF7]">
              Kaylane Almeida
            </span>
            <span className="text-[10px] text-[#EADFD7] font-sans">
              14/11/2026 • 17h30
            </span>
          </div>
        </div>

        <a
          href="#rsvp"
          className="shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#5B0616] text-[#FCFAF7] text-xs font-medium uppercase tracking-wider shadow-xs hover:bg-[#72091F] active:scale-95 transition-transform"
        >
          <Heart className="w-3.5 h-3.5 text-[#EADFD7]" strokeWidth={1.25} />
          <span>Confirmar</span>
        </a>
      </div>
    </div>
  );
}

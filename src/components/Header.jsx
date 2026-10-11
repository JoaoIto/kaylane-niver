import React, { useState, useEffect } from "react";
import { VolumeX, Volume2, Sparkles, Menu as MenuIcon, X } from "lucide-react";
import { ambientPlayer } from "../utils/audio";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleAudio = () => {
    ambientPlayer.toggle((state) => {
      setIsPlayingMusic(state);
    });
  };

  const navLinks = [
    { label: "Início", href: "#hero" },
    { label: "O Local", href: "#local" },
    { label: "Happy Hour", href: "#happy-hour" },
    { label: "Cardápio", href: "#cardapio" },
    { label: "Confirmar Presença", href: "#rsvp" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-[#E8D5B5]/40 py-2.5"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Monogram Brand */}
        <a
          href="#hero"
          className="group flex items-center gap-2 text-left transition-transform duration-300 hover:scale-105"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#72091F] to-[#420410] flex items-center justify-center text-[#FAF2E3] font-serif text-lg font-bold border border-[#D4AF37]/60 shadow-sm group-hover:rotate-6 transition-transform">
            K
          </div>
          <div>
            <span className="block font-editorial text-[#5C0617] text-lg font-bold tracking-wide leading-none">
              Kaylane Almeida
            </span>
            <span className="text-[11px] font-sans tracking-widest uppercase text-[#8B0021]/80 font-medium">
              14 de Novembro • Palmas
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-sans font-medium text-[#5C0617]/90">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative py-1 transition-colors hover:text-[#8B0021] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#8B0021] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Ambient Music Button */}
          <button
            onClick={toggleAudio}
            type="button"
            title={isPlayingMusic ? "Pausar trilha suave" : "Tocar trilha suave"}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-sans transition-all duration-300 border ${
              isPlayingMusic
                ? "bg-[#72091F] text-[#FAF2E3] border-[#D4AF37] shadow-sm animate-pulse"
                : "bg-white/80 text-[#5C0617] border-[#E8D5B5] hover:bg-white"
            }`}
          >
            {isPlayingMusic ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={1.5} />
                <span className="hidden sm:inline font-medium">Música</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-[#8B0021]" strokeWidth={1.5} />
                <span className="hidden sm:inline font-medium">Trilha</span>
              </>
            )}
          </button>

          {/* Quick RSVP Button */}
          <a
            href="#rsvp"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#72091F] to-[#5C0617] text-[#FAF6F2] text-xs font-semibold uppercase tracking-wider shadow-sm hover:shadow-md hover:from-[#8B0021] hover:to-[#72091F] border border-[#D4AF37]/50 transition-all duration-300 hover:scale-105"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={1.5} />
            Confirmar
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#5C0617] rounded-lg hover:bg-black/5"
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" strokeWidth={1.5} />
            ) : (
              <MenuIcon className="w-6 h-6" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#E8D5B5] px-6 py-4 shadow-xl animate-fadeIn">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 text-[#5C0617] font-medium text-base border-b border-[#E8D5B5]/30 last:border-0 hover:text-[#8B0021]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#rsvp"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center py-3 rounded-xl bg-gradient-to-r from-[#72091F] to-[#5C0617] text-[#FAF6F2] font-semibold text-sm shadow border border-[#D4AF37]/40"
            >
              Confirmar Presença (RSVP)
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

import React, { useState, useEffect } from "react";
import { VolumeX, Volume2, Sparkles, Menu as MenuIcon, X } from "lucide-react";
import { ambientPlayer } from "../utils/audio";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
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
    { label: "Chopp Dobradinha", href: "#happy-hour" },
    { label: "Cardápio", href: "#cardapio" },
    { label: "Confirmar Presença", href: "#rsvp" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FCFAF7]/95 backdrop-blur-md shadow-xs border-b border-[#EADFD7] py-2"
          : "bg-transparent py-3 sm:py-4"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Monogram Brand */}
        <a
          href="#hero"
          className="group flex items-center gap-2 text-left transition-transform duration-300"
        >
          <div className="w-8 h-8 rounded-full bg-[#5B0616] flex items-center justify-center text-[#FCFAF7] font-serif italic text-base font-bold shadow-xs">
            K
          </div>
          <div>
            <span className="block font-editorial text-[#420410] text-base sm:text-lg font-bold tracking-wide leading-none">
              Kaylane Almeida
            </span>
            <span className="text-[10px] font-sans tracking-widest uppercase text-[#7D1225] font-light">
              14 de Novembro de 2026 • Palmas
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-5 text-xs font-sans font-medium text-[#5B0616]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="py-1 transition-colors hover:text-[#8B1229] relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#5B0616] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2.5">
          {/* Ambient Music Button */}
          <button
            onClick={toggleAudio}
            type="button"
            title={isPlayingMusic ? "Pausar música ambiente" : "Tocar música ambiente"}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-sans transition-colors border ${
              isPlayingMusic
                ? "bg-[#5B0616] text-[#FCFAF7] border-[#5B0616]"
                : "bg-white text-[#5B0616] border-[#EADFD7] hover:border-[#5B0616]"
            }`}
          >
            {isPlayingMusic ? (
              <>
                <Volume2 className="w-3.5 h-3.5" strokeWidth={1.25} />
                <span className="hidden sm:inline">Música</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-[#5B0616]" strokeWidth={1.25} />
                <span className="hidden sm:inline">Trilha</span>
              </>
            )}
          </button>

          {/* Quick RSVP Button */}
          <a
            href="#rsvp"
            className="hidden sm:inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-[#5B0616] text-[#FCFAF7] text-xs font-medium uppercase tracking-wider hover:bg-[#72091F] transition-colors shadow-xs"
          >
            Confirmar
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#5B0616] rounded-lg hover:bg-black/5"
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" strokeWidth={1.25} />
            ) : (
              <MenuIcon className="w-5 h-5" strokeWidth={1.25} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FCFAF7] border-b border-[#EADFD7] px-6 py-4 shadow-lg animate-fadeIn text-left">
          <nav className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-[#5B0616] font-medium text-sm border-b border-[#EADFD7]/50 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#rsvp"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center py-2.5 rounded-full bg-[#5B0616] text-[#FCFAF7] font-medium text-xs uppercase tracking-wider shadow-xs"
            >
              Confirmar Presença (RSVP)
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

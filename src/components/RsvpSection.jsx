import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, User, Wine, Beer, Coffee } from "lucide-react";
import { EVENT_DATA } from "../data/eventData";
import { fireCelebrationConfetti } from "../utils/confetti";

export function RsvpSection() {
  const [guestName, setGuestName] = useState("");
  const [drinkPreference, setDrinkPreference] = useState("chopp");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorNotice, setErrorNotice] = useState("");

  useEffect(() => {
    const savedRsvp = localStorage.getItem("kaylane_rsvp_confirmed");
    if (savedRsvp) {
      try {
        const data = JSON.parse(savedRsvp);
        setGuestName(data.name || "");
        setIsSubmitted(true);
      } catch (e) {
        // ignore
      }
    }
  }, []);

  const handleConfirmRsvp = (e) => {
    e.preventDefault();

    if (!guestName.trim()) {
      setErrorNotice("Por favor, digite seu nome completo para confirmar sua presença.");
      return;
    }

    setErrorNotice("");

    // Celebration confetti
    fireCelebrationConfetti();

    // Map drink preference text without emojis
    const drinkMap = {
      chopp: "Chopp Dobradinha",
      drinks: "Drinks & Coquetéis",
      nao_alcoolico: "Sem Álcool / Sucos",
    };

    // Clean professional WhatsApp message with proper line breaks and zero emojis
    const messageLines = [
      "Olá! Confirmo minha presença no aniversário de Kaylane Almeida no Zé Colméia Gastrobar.",
      "",
      `*Convidado(a):* ${guestName.trim()}`,
      `*Preferência no brinde:* ${drinkMap[drinkPreference]}`,
      "",
      "Data: 14 de Novembro de 2026 às 17h30",
      "Local: Zé Colméia - Gastrobar (Open Mall, 208 Sul, Palmas - TO)",
    ];

    const fullMessage = messageLines.join("\n");
    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappUrl = `https://wa.me/${EVENT_DATA.whatsapp.phoneNumber}?text=${encodedMessage}`;

    // Save to localStorage
    localStorage.setItem(
      "kaylane_rsvp_confirmed",
      JSON.stringify({
        name: guestName.trim(),
        confirmedAt: new Date().toISOString(),
      })
    );
    setIsSubmitted(true);

    // Open WhatsApp in new tab
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 400);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    localStorage.removeItem("kaylane_rsvp_confirmed");
  };

  const drinkOptions = [
    { id: "chopp", label: "Chopp Dobradinha", icon: Beer },
    { id: "drinks", label: "Drinks & Coquetéis", icon: Wine },
    { id: "nao_alcoolico", label: "Sem Álcool / Sucos", icon: Coffee },
  ];

  return (
    <section id="rsvp" className="relative py-14 md:py-20 bg-[#FCFAF7] overflow-hidden text-center">
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <span className="font-handwriting text-2xl sm:text-3xl text-[#5B0616] block mb-1">
          Confirmação de Presença
        </span>
        <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#420410] mb-3">
          Sua Presença é Especial
        </h2>
        <p className="text-xs sm:text-sm text-[#7D1225] font-light max-w-md mx-auto mb-8">
          Por favor, confirme sua presença para organizarmos as mesas com todo o carinho.
        </p>

        {/* RSVP Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-9 border border-[#EADFD7] shadow-sm text-left">
          {isSubmitted ? (
            /* Success confirmation display */
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#5B0616] text-[#FCFAF7] flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-7 h-7 text-[#EADFD7]" strokeWidth={1.25} />
              </div>

              <h3 className="font-editorial text-2xl font-bold text-[#420410]">
                Presença Confirmada!
              </h3>

              <p className="text-xs sm:text-sm text-[#7D1225] font-light max-w-sm mx-auto">
                Agradecemos a confirmação, <strong>{guestName}</strong>! Caso seu WhatsApp não tenha aberto automaticamente, clique no botão abaixo.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
                <motion.button
                  onClick={handleConfirmRsvp}
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto min-h-[48px] px-6 py-3 rounded-full bg-[#5B0616] text-[#FCFAF7] font-sans font-medium text-xs sm:text-sm hover:bg-[#72091F] transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#EADFD7]" strokeWidth={1.25} />
                  <span>Reenviar no WhatsApp</span>
                </motion.button>

                <button
                  onClick={handleReset}
                  type="button"
                  className="w-full sm:w-auto min-h-[44px] px-4 py-2.5 rounded-full bg-white text-[#7D1225] font-sans text-xs border border-[#EADFD7] hover:border-[#5B0616] transition-colors"
                >
                  Editar confirmação
                </button>
              </div>
            </div>
          ) : (
            /* RSVP Form: Only Name & Drink Preference */
            <form onSubmit={handleConfirmRsvp} className="space-y-6">
              {errorNotice && (
                <div className="p-3 rounded-xl bg-[#5B0616]/8 border border-[#5B0616]/20 text-xs text-[#5B0616] font-medium">
                  {errorNotice}
                </div>
              )}

              {/* 1. Nome Completo (Minimalist bottom line or ultra fine border) */}
              <div>
                <label className="block text-xs font-semibold text-[#5B0616] uppercase tracking-wider mb-2">
                  <span className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#5B0616]" strokeWidth={1.25} />
                    Seu Nome Completo *
                  </span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Digite seu nome e sobrenome"
                  value={guestName}
                  onChange={(e) => {
                    setGuestName(e.target.value);
                    if (errorNotice) setErrorNotice("");
                  }}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#FCFAF7] border border-[#EADFD7] text-[#420410] placeholder-[#7D1225]/35 text-sm focus:outline-hidden focus:border-[#5B0616] focus:bg-white transition-colors"
                />
              </div>

              {/* 2. O que pretende beber? (Clean pill selectors) */}
              <div>
                <label className="block text-xs font-semibold text-[#5B0616] uppercase tracking-wider mb-2.5">
                  O que pretende beber no brinde?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {drinkOptions.map((opt) => {
                    const isSelected = drinkPreference === opt.id;
                    const IconComponent = opt.icon;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setDrinkPreference(opt.id)}
                        className={`min-h-[48px] p-3 rounded-xl border text-xs font-medium transition-all flex items-center justify-center sm:justify-start gap-2.5 ${
                          isSelected
                            ? "bg-[#5B0616] text-[#FCFAF7] border-[#5B0616] shadow-xs"
                            : "bg-[#FCFAF7] text-[#5B0616] border-[#EADFD7] hover:border-[#5B0616]"
                        }`}
                      >
                        <IconComponent className="w-4 h-4 shrink-0" strokeWidth={1.25} />
                        <span className="truncate">{opt.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full min-h-[50px] py-3.5 px-6 rounded-full bg-[#5B0616] text-[#FCFAF7] font-sans font-medium text-sm tracking-wide shadow-xs hover:bg-[#72091F] transition-colors flex items-center justify-center gap-2.5 group"
              >
                <Send className="w-4 h-4 text-[#EADFD7] group-hover:translate-x-0.5 transition-transform" strokeWidth={1.25} />
                <span>Confirmar Presença no WhatsApp</span>
              </motion.button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

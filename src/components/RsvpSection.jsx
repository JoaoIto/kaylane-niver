import React, { useState, useEffect } from "react";
import { Send, Sparkles, CheckCircle2, User, Users, MessageSquare, Beer, Wine, Coffee } from "lucide-react";
import { EVENT_DATA } from "../data/eventData";
import { fireCelebrationConfetti } from "../utils/confetti";

export function RsvpSection() {
  const [guestName, setGuestName] = useState("");
  const [companionsCount, setCompanionsCount] = useState("0");
  const [companionNames, setCompanionNames] = useState("");
  const [drinkPreference, setDrinkPreference] = useState("chopp");
  const [personalMessage, setPersonalMessage] = useState("");
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
      setErrorNotice("Por favor, informe seu nome completo para confirmarmos sua presença.");
      return;
    }

    setErrorNotice("");

    // Trigger celebration confetti
    fireCelebrationConfetti();

    // Map drink preference text without emojis
    const drinkMap = {
      chopp: "Chopp Dobradinha",
      drinks: "Drinks e Coquetéis",
      nao_alcoolico: "Sem Álcool / Sucos",
    };

    // Format companions text
    let companionsText = companionsCount === "0"
      ? "Sem acompanhantes (apenas eu)"
      : `${companionsCount} acompanhante(s)${companionNames.trim() ? ` (${companionNames.trim()})` : ""}`;

    // Clean professional WhatsApp message with proper line breaks and zero emojis
    const messageLines = [
      "Olá! Confirmo minha presença no aniversário de Kaylane Almeida no Zé Colméia Gastrobar.",
      "",
      `*Convidado(a):* ${guestName.trim()}`,
      `*Acompanhantes:* ${companionsText}`,
      `*Preferência no brinde:* ${drinkMap[drinkPreference]}`,
    ];

    if (personalMessage.trim()) {
      messageLines.push(`*Recado para a Kaylane:* "${personalMessage.trim()}"`);
    }

    messageLines.push("");
    messageLines.push("Data: 14 de Novembro de 2025 às 17h30");
    messageLines.push("Local: Zé Colméia - Gastrobar (Open Mall, 208 Sul, Palmas - TO)");

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

  return (
    <section id="rsvp" className="relative py-16 md:py-24 bg-[#FAF8F5] overflow-hidden">
      {/* Decorative aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#8B0021]/10 to-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Floating Organic Cherries Detail */}
      <div className="hidden sm:block absolute top-12 left-8 md:left-16 w-16 h-16 opacity-75 pointer-events-none animate-float-cherries select-none">
        <img
          src="/images/dark_cherries.png"
          alt="Cerejas"
          className="w-full h-full object-contain drop-shadow-md"
        />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#FAF2E3] px-4 py-1.5 rounded-full border border-[#D4AF37]/60 shadow-sm mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={1.5} />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#5C0617]">
              Confirmação de Presença
            </span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#4A0412] mb-3">
            Sua Presença é Especial
          </h2>
          <p className="font-serif-cormorant text-lg sm:text-xl text-[#72091F]/80 italic">
            "Por favor, confirme até o dia 10 de Novembro para que possamos organizar as mesas e reservar todo o carinho para você."
          </p>
        </div>

        {/* RSVP Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border-2 border-[#D4AF37] shadow-2xl relative text-left">
          {/* Organic Floating Cherry on corner */}
          <div className="absolute -top-7 -right-3 sm:-right-5 w-14 h-14 sm:w-16 sm:h-16 pointer-events-none select-none animate-float-cherries">
            <img
              src="/images/dark_cherries.png"
              alt="Cerejas"
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </div>

          {isSubmitted ? (
            /* Success confirmation display */
            <div className="text-center py-6 sm:py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#72091F] to-[#420410] text-[#FAF2E3] flex items-center justify-center mx-auto border-2 border-[#D4AF37] shadow-lg">
                <CheckCircle2 className="w-8 h-8 text-[#D4AF37]" strokeWidth={1.5} />
              </div>
              
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#4A0412]">
                Presença Registrada com Sucesso
              </h3>
              
              <p className="text-sm sm:text-base text-[#4A3539] max-w-md mx-auto">
                Agradecemos sua confirmação, <strong>{guestName}</strong>! Caso seu aplicativo do WhatsApp não tenha aberto automaticamente, clique no botão abaixo.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
                <button
                  onClick={handleConfirmRsvp}
                  type="button"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#5C0617] text-[#FAF6F2] font-semibold text-sm hover:bg-[#72091F] transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#D4AF37]" strokeWidth={1.5} />
                  Abrir WhatsApp Novamente
                </button>
                <button
                  onClick={handleReset}
                  type="button"
                  className="w-full sm:w-auto px-5 py-3 rounded-full bg-white text-[#72091F] font-medium text-xs border border-[#E8D5B5] hover:bg-[#FAF2E3] transition-colors"
                >
                  Editar dados da confirmação
                </button>
              </div>
            </div>
          ) : (
            /* RSVP Form */
            <form onSubmit={handleConfirmRsvp} className="space-y-6">
              {/* Error notice */}
              {errorNotice && (
                <div className="p-3.5 rounded-2xl bg-[#8B0021]/10 border border-[#8B0021]/30 text-xs sm:text-sm text-[#8B0021] font-medium">
                  {errorNotice}
                </div>
              )}

              {/* 1. Nome Completo */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-[#5C0617] uppercase tracking-wider mb-2">
                  <span className="flex items-center gap-1.5">
                    <User className="w-4 h-4 text-[#8B0021]" strokeWidth={1.5} />
                    Nome Completo *
                  </span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Seu nome e sobrenome"
                  value={guestName}
                  onChange={(e) => {
                    setGuestName(e.target.value);
                    if (errorNotice) setErrorNotice("");
                  }}
                  className="w-full px-4 py-3.5 rounded-2xl bg-white border border-[#E8D5B5] text-[#4A0412] placeholder-[#8B0021]/30 text-sm focus:outline-none focus:border-[#8B0021] focus:ring-2 focus:ring-[#8B0021]/20 shadow-sm transition-all"
                />
              </div>

              {/* 2. Quantidade de Acompanhantes (Seleção Rápida: 0, 1, 2, 3+) */}
              <div className="space-y-3">
                <label className="block text-xs sm:text-sm font-semibold text-[#5C0617] uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-[#8B0021]" strokeWidth={1.5} />
                    Quantidade de Acompanhantes
                  </span>
                </label>
                
                {/* Seleção rápida em botões pill */}
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { val: "0", label: "0 (Apenas eu)" },
                    { val: "1", label: "+1 pessoa" },
                    { val: "2", label: "+2 pessoas" },
                    { val: "3", label: "3+ pessoas" },
                  ].map((item) => (
                    <button
                      key={item.val}
                      type="button"
                      onClick={() => setCompanionsCount(item.val)}
                      className={`min-h-[44px] py-2 px-2 rounded-2xl text-xs font-semibold border transition-all text-center flex items-center justify-center ${
                        companionsCount === item.val
                          ? "bg-gradient-to-r from-[#72091F] to-[#5C0617] text-[#FAF6F2] border-[#D4AF37] shadow-sm"
                          : "bg-white text-[#5C0617] border-[#E8D5B5] hover:bg-[#FAF2E3]"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                {/* Companions names if > 0 */}
                {companionsCount !== "0" && (
                  <div className="pt-1">
                    <input
                      type="text"
                      placeholder="Nome dos acompanhantes (opcional)"
                      value={companionNames}
                      onChange={(e) => setCompanionNames(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-[#E8D5B5] text-[#4A0412] text-sm focus:outline-none focus:border-[#8B0021] shadow-sm transition-all"
                    />
                  </div>
                )}
              </div>

              {/* 3. O que pretende beber? (Ícones discretos do Lucide: Beer | Wine | Coffee) */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-[#5C0617] uppercase tracking-wider mb-2">
                  O que pretende beber para o brinde?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Chopp Dobradinha */}
                  <label
                    className={`flex items-center gap-3 p-3.5 rounded-2xl border cursor-pointer text-xs font-semibold transition-all min-h-[48px] ${
                      drinkPreference === "chopp"
                        ? "bg-[#FAF2E3] border-[#D4AF37] text-[#5C0617] shadow-sm"
                        : "bg-white border-[#E8D5B5] text-[#684C51] hover:bg-[#FAF6F2]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="drink"
                      value="chopp"
                      checked={drinkPreference === "chopp"}
                      onChange={() => setDrinkPreference("chopp")}
                      className="accent-[#8B0021]"
                    />
                    <Beer className="w-4 h-4 text-[#8B0021] shrink-0" strokeWidth={1.5} />
                    <span>Chopp Dobradinha</span>
                  </label>

                  {/* Drinks & Coquetéis */}
                  <label
                    className={`flex items-center gap-3 p-3.5 rounded-2xl border cursor-pointer text-xs font-semibold transition-all min-h-[48px] ${
                      drinkPreference === "drinks"
                        ? "bg-[#FAF2E3] border-[#D4AF37] text-[#5C0617] shadow-sm"
                        : "bg-white border-[#E8D5B5] text-[#684C51] hover:bg-[#FAF6F2]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="drink"
                      value="drinks"
                      checked={drinkPreference === "drinks"}
                      onChange={() => setDrinkPreference("drinks")}
                      className="accent-[#8B0021]"
                    />
                    <Wine className="w-4 h-4 text-[#8B0021] shrink-0" strokeWidth={1.5} />
                    <span>Drinks & Coquetéis</span>
                  </label>

                  {/* Sem Álcool / Sucos */}
                  <label
                    className={`flex items-center gap-3 p-3.5 rounded-2xl border cursor-pointer text-xs font-semibold transition-all min-h-[48px] ${
                      drinkPreference === "nao_alcoolico"
                        ? "bg-[#FAF2E3] border-[#D4AF37] text-[#5C0617] shadow-sm"
                        : "bg-white border-[#E8D5B5] text-[#684C51] hover:bg-[#FAF6F2]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="drink"
                      value="nao_alcoolico"
                      checked={drinkPreference === "nao_alcoolico"}
                      onChange={() => setDrinkPreference("nao_alcoolico")}
                      className="accent-[#8B0021]"
                    />
                    <Coffee className="w-4 h-4 text-[#8B0021] shrink-0" strokeWidth={1.5} />
                    <span>Sem Álcool / Sucos</span>
                  </label>
                </div>
              </div>

              {/* 4. Mensagem Carinhosa (Opcional) */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-[#5C0617] uppercase tracking-wider mb-2">
                  <span className="flex items-center gap-1.5">
                    <MessageSquare className="w-4 h-4 text-[#8B0021]" strokeWidth={1.5} />
                    Mensagem carinhosa para a Kaylane (Opcional)
                  </span>
                </label>
                <textarea
                  rows="3"
                  placeholder="Deixe um recado especial para a aniversariante..."
                  value={personalMessage}
                  onChange={(e) => setPersonalMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-[#E8D5B5] text-[#4A0412] placeholder-[#8B0021]/30 text-sm focus:outline-none focus:border-[#8B0021] focus:ring-2 focus:ring-[#8B0021]/20 shadow-sm transition-all"
                />
              </div>

              {/* Botão de Envio via WhatsApp */}
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#72091F] to-[#5C0617] text-[#FAF6F2] font-semibold text-base tracking-wide shadow-xl hover:shadow-2xl hover:from-[#8B0021] hover:to-[#72091F] border border-[#D4AF37]/60 transition-all duration-300 hover:scale-[1.01] flex items-center justify-center gap-3 group"
              >
                <Send className="w-5 h-5 text-[#D4AF37] group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                <span>Confirmar Presença via WhatsApp</span>
              </button>

              <p className="text-center text-[11px] text-[#72091F]/75">
                Ao clicar, você será direcionado para o WhatsApp com a mensagem formatada pronta para envio.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

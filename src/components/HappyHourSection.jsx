import React from "react";
import { Beer, Clock, Sparkles, CheckCircle2, Wine } from "lucide-react";

export function HappyHourSection() {
  return (
    <section id="happy-hour" className="relative py-16 md:py-24 overflow-hidden bg-[#FAF8F5]">
      {/* Background glow effects */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#8B0021]/12 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Main Banner Card */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D4AF37] bg-gradient-to-br from-[#4A0412] via-[#5C0617] to-[#38030D] text-[#FAF6F2] p-6 sm:p-10 md:p-12">
          {/* Subtle decorative gold sparkles in corners */}
          <div className="absolute top-4 right-4 text-[#D4AF37]/25 select-none pointer-events-none">
            <Sparkles className="w-16 h-16" strokeWidth={1.25} />
          </div>
          <div className="absolute -bottom-8 -left-8 w-44 h-44 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 text-left space-y-5">
              {/* Gold Ribbon Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF2E3] text-[#4A0412] font-semibold text-xs uppercase tracking-widest border border-[#D4AF37] shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-[#8B0021]" strokeWidth={1.5} />
                <span>Destaque Exclusivo da Noite</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-2">
                <span className="font-handwriting text-2xl sm:text-3xl text-[#E8D5B5] block">
                  Para quem for brindar conosco...
                </span>
                <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#FAF2E3]">
                  Chopp Dobradinha <br />
                  <span className="text-[#D4AF37] underline decoration-[#D4AF37]/40 underline-offset-8">
                    até às 20h00
                  </span>
                </h2>
              </div>

              {/* Explanatory & Welcoming Text */}
              <p className="text-sm sm:text-base text-[#FAF2E3]/90 font-sans leading-relaxed">
                Para quem for brindar, o Zé Colméia conta com dobradinha de Chopp até as 20h00. Como nosso encontro começa às 17h30, vale super a pena chegar cedo para pegar uma boa mesa e aproveitar a rodada dupla!
              </p>

              {/* Highlights pills with Lucide icons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-[#D4AF37]/35">
                  <Clock className="w-5 h-5 text-[#D4AF37] shrink-0" strokeWidth={1.5} />
                  <div className="text-xs">
                    <span className="font-bold text-[#FAF2E3] block">Janela de Horário</span>
                    <span className="text-[#E8D5B5]">17h30 às 20h00</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-[#D4AF37]/35">
                  <Beer className="w-5 h-5 text-[#D4AF37] shrink-0" strokeWidth={1.5} />
                  <div className="text-xs">
                    <span className="font-bold text-[#FAF2E3] block">Chopp Dobrado</span>
                    <span className="text-[#E8D5B5]">Pede um, ganha outro</span>
                  </div>
                </div>
              </div>

              {/* Friendly advice */}
              <div className="flex items-center gap-2 text-xs text-[#E8D5B5]/90 pt-1">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" strokeWidth={1.5} />
                <span>O local também conta com drinks artesanais, vinhos selecionados e opções sem álcool.</span>
              </div>
            </div>

            {/* Right Toast Showcase Card (5 cols) */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-sm rounded-3xl overflow-hidden border-2 border-[#D4AF37] shadow-2xl group">
                <img
                  src="/images/happy_hour_toast.jpg"
                  alt="Brinde de Celebração"
                  className="w-full h-72 sm:h-80 object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B030A]/90 via-transparent to-transparent" />

                {/* Toast Badge Overlay without emojis */}
                <div className="absolute bottom-4 left-4 right-4 text-center bg-[#FAF8F5]/95 backdrop-blur-md text-[#5C0617] py-2.5 px-4 rounded-xl border border-[#D4AF37] shadow-lg">
                  <div className="flex items-center justify-center gap-1.5 mb-0.5">
                    <Wine className="w-4 h-4 text-[#8B0021]" strokeWidth={1.5} />
                    <p className="font-editorial text-sm sm:text-base font-bold">
                      Um brinde à Kaylane Almeida!
                    </p>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-[#8B0021] font-semibold">
                    17h30 às 20h00 • Chegue cedo para aproveitar
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState, useMemo } from "react";
import { Sparkles, UtensilsCrossed, Info, FileText, ExternalLink, X } from "lucide-react";
import { MENU_CATEGORIES, MENU_ITEMS } from "../data/menuData";
import { EVENT_DATA } from "../data/eventData";

export function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [selectedItemModal, setSelectedItemModal] = useState(null);

  // Filter items based on active category
  const filteredItems = useMemo(() => {
    if (selectedCategory === "todos") return MENU_ITEMS;
    return MENU_ITEMS.filter((item) => item.categoryId === selectedCategory);
  }, [selectedCategory]);

  const formatPrice = (val) => {
    return val.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <section id="cardapio" className="relative py-16 md:py-24 bg-[#FAF8F5]">
      {/* Decorative background aura */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-[#8B0021]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#FAF2E3] px-4 py-1.5 rounded-full border border-[#D4AF37]/60 shadow-sm mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={1.5} />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#5C0617]">
              Gastronomia do Local
            </span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#4A0412] mb-3">
            Cardápio Selecionado
          </h2>
          <p className="font-serif-cormorant text-lg sm:text-xl text-[#72091F]/80 italic">
            "Opções em destaque do Zé Colméia para você escolher seus favoritos e saborear durante a comemoração."
          </p>
        </div>

        {/* Category Selector (100% Mobile Responsive, Horizontal Scroll, Touch-Optimized, Sem Barra de Busca) */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-10">
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar py-2 px-1 -webkit-overflow-scrolling:touch">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  type="button"
                  className={`min-h-[44px] px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-sans font-medium whitespace-nowrap transition-all duration-300 border flex items-center justify-center shrink-0 ${
                    isActive
                      ? "bg-gradient-to-r from-[#72091F] to-[#5C0617] text-[#FAF6F2] border-[#D4AF37] shadow-md scale-[1.02]"
                      : "bg-white text-[#5C0617] border-[#E8D5B5] hover:bg-[#FAF2E3]/80 hover:border-[#D4AF37]/50"
                  }`}
                >
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 text-left">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItemModal(item)}
              className="group cursor-pointer glass-card rounded-3xl p-5 sm:p-7 border border-[#E8D5B5] shadow-sm hover:shadow-xl hover:border-[#D4AF37] transition-all duration-300 relative flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Category Badge & Portion */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-sans font-semibold uppercase tracking-wider text-[#8B0021] bg-[#FAF2E3] px-2.5 py-0.5 rounded-full border border-[#D4AF37]/40">
                    {item.categoryName}
                  </span>
                  <span className="text-[11px] text-[#72091F]/70 font-medium">
                    {item.serves}
                  </span>
                </div>

                {/* Dish Name and Price */}
                <div className="flex items-start justify-between gap-3 mt-1.5">
                  <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#4A0412] group-hover:text-[#72091F] transition-colors leading-snug">
                    {item.name}
                  </h3>
                  <div className="text-right shrink-0">
                    <span className="font-editorial text-lg sm:text-xl font-bold text-[#8B0021] block leading-none">
                      {formatPrice(item.price)}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm text-[#5C4549] leading-relaxed line-clamp-3 font-sans">
                  {item.description}
                </p>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-4 pt-3.5 border-t border-[#E8D5B5]/50 flex items-center justify-between text-xs text-[#8B0021]/80 font-medium">
                <span className="flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-[#8B0021]" strokeWidth={1.5} />
                  Ver composição completa
                </span>
                <span className="text-[#5C0617] group-hover:translate-x-1 transition-transform">
                  Detalhes →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View Full PDF Menu Action */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          <a
            href={EVENT_DATA.menuPdf.localUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-[#5C0617] font-semibold text-xs sm:text-sm border border-[#D4AF37] hover:bg-[#FAF2E3] transition-all shadow-sm hover:shadow-md group"
          >
            <FileText className="w-4 h-4 text-[#8B0021]" strokeWidth={1.5} />
            <span>Cardápio Completo em PDF</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#8B0021]/70 group-hover:translate-x-0.5 transition-transform" strokeWidth={1.5} />
          </a>

          <a
            href={EVENT_DATA.menuPdf.onlineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-[#5C0617] font-semibold text-xs sm:text-sm border border-[#E8D5B5] hover:bg-[#FAF2E3] transition-all shadow-sm"
          >
            <UtensilsCrossed className="w-4 h-4 text-[#8B0021]" strokeWidth={1.5} />
            <span>Cardápio Online do Zé Colméia</span>
          </a>
        </div>

        {/* Friendly Menu Notice (No emojis) */}
        <div className="mt-8 text-center max-w-xl mx-auto p-4 rounded-2xl bg-[#FAF2E3]/90 border border-[#D4AF37]/50 text-xs text-[#5C0617]/85 leading-relaxed">
          <div className="flex items-center justify-center gap-1.5 font-bold uppercase tracking-wider text-[#8B0021] mb-1">
            <Info className="w-3.5 h-3.5 text-[#8B0021]" strokeWidth={1.5} />
            <span>Nota Informativa</span>
          </div>
          <p>
            O cardápio acima reúne opções em destaque do Zé Colméia - Gastrobar para que todos possam se programar com facilidade. Pedidos e acertos de contas são realizados individualmente de forma livre no local.
          </p>
        </div>
      </div>

      {/* Item Details Modal */}
      {selectedItemModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-lg bg-[#FAF8F5] border-2 border-[#D4AF37] rounded-3xl p-6 sm:p-8 shadow-2xl text-left overflow-hidden">
            {/* Close button */}
            <button
              onClick={() => setSelectedItemModal(null)}
              className="absolute top-4 right-4 p-2 text-[#5C0617]/70 hover:text-[#5C0617] rounded-full hover:bg-black/5"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>

            {/* Category badge */}
            <span className="text-xs uppercase tracking-widest font-semibold text-[#8B0021] bg-[#FAF2E3] px-3 py-1 rounded-full border border-[#D4AF37]/50 inline-block mb-3">
              {selectedItemModal.categoryName}
            </span>

            {/* Title & Price */}
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#4A0412] mb-1">
              {selectedItemModal.name}
            </h3>
            <div className="flex items-baseline gap-3 mb-4">
              <span className="font-editorial text-2xl sm:text-3xl font-bold text-[#8B0021]">
                {formatPrice(selectedItemModal.price)}
              </span>
              <span className="text-xs text-[#684C51] font-medium">
                Porção: {selectedItemModal.serves}
              </span>
            </div>

            {/* Detailed Description */}
            <div className="bg-white rounded-2xl p-4 border border-[#E8D5B5] mb-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#5C0617] block mb-1">
                Composição do Prato
              </span>
              <p className="text-sm text-[#4A3539] leading-relaxed">
                {selectedItemModal.description}
              </p>
            </div>

            {/* Pairing Tip */}
            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FAF2E3] border border-[#D4AF37]/50 mb-6 text-xs text-[#5C0617]">
              <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" strokeWidth={1.5} />
              <div>
                <strong className="block mb-0.5">Sugestão da Noite:</strong>
                Combina perfeitamente com um chopp geladinho do happy hour ou drinks especiais da casa.
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={() => setSelectedItemModal(null)}
              type="button"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#72091F] to-[#5C0617] text-[#FAF6F2] font-semibold text-sm hover:from-[#8B0021] hover:to-[#72091F] transition-all shadow-md"
            >
              Fechar Detalhes
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

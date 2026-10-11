import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";
import { MENU_CATEGORIES, MENU_ITEMS } from "../data/menuData";
import { EVENT_DATA } from "../data/eventData";

export function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState("todos");

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
    <section id="cardapio" className="relative py-14 md:py-20 bg-[#FCFAF7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="font-handwriting text-2xl sm:text-3xl text-[#5B0616] block mb-1">
            Gastronomia
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#420410] mb-4">
            Cardápio do Empório
          </h2>

          {/* Welcoming Note (Regra 6 da aniversariante) */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#EADFD7] shadow-xs text-xs sm:text-sm text-[#5B0616] leading-relaxed max-w-xl mx-auto italic">
            "Vai ter bolo e doces para comemorarmos! O cardápio abaixo é para vocês ficarem à vontade caso queiram pedir algo a mais durante a noite."
          </div>
        </div>

        {/* Minimalist Category Pills (Flex-wrap com respiro - Nunca corta em nenhum dispositivo) */}
        <div className="mb-8 max-w-2xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 px-2">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <motion.button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`min-h-[44px] px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-sans transition-all duration-200 border cursor-pointer ${
                    isActive
                      ? "bg-[#5B0616] text-[#FCFAF7] border-[#5B0616] font-medium shadow-xs"
                      : "bg-white text-[#5B0616] border-[#EADFD7] hover:border-[#5B0616] font-normal"
                  }`}
                >
                  {cat.name}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Compact Dish Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-5 border border-[#EADFD7] hover:border-[#5B0616] transition-all duration-200 flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-1.5">
                    <h3 className="font-editorial text-lg sm:text-xl font-bold text-[#420410] leading-snug">
                      {item.name}
                    </h3>
                    <span className="font-editorial text-base sm:text-lg font-bold text-[#5B0616] shrink-0">
                      {formatPrice(item.price)}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#7D1225]/85 leading-relaxed font-sans font-light">
                    {item.description}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-[#EADFD7]/60 flex items-center justify-between text-[11px] text-[#7D1225]/70">
                  <span className="uppercase tracking-wider font-medium">
                    {item.categoryName}
                  </span>
                  <span>{item.serves}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View Full PDF Menu Action */}
        <div className="mt-10 text-center">
          <motion.a
            href={EVENT_DATA.menuPdf.localUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-[#5B0616] font-sans text-xs sm:text-sm border border-[#EADFD7] hover:border-[#5B0616] shadow-xs transition-colors"
          >
            <FileText className="w-4 h-4 text-[#5B0616]" strokeWidth={1.25} />
            <span>Ver Cardápio Completo do Zé Colméia (PDF)</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#5B0616]/70" strokeWidth={1.25} />
          </motion.a>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import { Calendar, Download, Check, Copy, ExternalLink, X, Clock, MapPin } from "lucide-react";
import { EVENT_DATA } from "../data/eventData";
import { getGoogleCalendarUrl, downloadIcsFile } from "../utils/calendar";

export function CalendarModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyDetails = () => {
    const text = `${EVENT_DATA.calendar.title}\nData: ${EVENT_DATA.dateString} (${EVENT_DATA.dayOfWeek})\nHorário: A partir das ${EVENT_DATA.startTime}\nLocal: ${EVENT_DATA.venue.name} (${EVENT_DATA.venue.fullAddress})\nChopp Dobradinha até às ${EVENT_DATA.happyHourUntil}!\nLink: ${window.location.href}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md bg-[#FAF8F5] border border-[#D4AF37]/50 rounded-3xl p-6 sm:p-8 shadow-2xl text-left overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#8B0021]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#5C0617]/70 hover:text-[#5C0617] rounded-full hover:bg-black/5 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" strokeWidth={1.5} />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#72091F] to-[#420410] flex items-center justify-center text-[#FAF2E3] border border-[#D4AF37]/60 shadow-md">
            <Calendar className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.5} />
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#8B0021]">
              Salvar na Agenda
            </span>
            <h3 className="font-editorial text-2xl font-bold text-[#5C0617]">
              Reserve esta data especial
            </h3>
          </div>
        </div>

        {/* Event Quick Info */}
        <div className="bg-white rounded-2xl p-4 border border-[#E8D5B5]/60 mb-6 space-y-2 text-sm text-[#4A3539]">
          <div className="flex items-center gap-2 font-medium text-[#5C0617]">
            <Calendar className="w-4 h-4 text-[#8B0021]" strokeWidth={1.5} />
            <span>14 de Novembro de 2025 • Sexta-feira</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#8B0021]" strokeWidth={1.5} />
            <span>A partir das 17h30 (Chopp dobradinha até às 20h00)</span>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-[#8B0021] shrink-0 mt-0.5" strokeWidth={1.5} />
            <span>Zé Colméia - Gastrobar (Open Mall, 208 Sul)</span>
          </div>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {/* Google Calendar Link */}
          <a
            href={getGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full px-5 py-3.5 rounded-2xl bg-[#5C0617] text-[#FAF6F2] font-semibold text-sm hover:bg-[#72091F] transition-all duration-300 shadow-md border border-[#D4AF37]/50 group"
          >
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.5} />
              <span>Adicionar ao Google Calendar</span>
            </div>
            <ExternalLink className="w-4 h-4 text-[#FAF2E3]/70 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
          </a>

          {/* Download ICS (Apple Calendar / Outlook) */}
          <button
            onClick={downloadIcsFile}
            type="button"
            className="flex items-center justify-between w-full px-5 py-3.5 rounded-2xl bg-white text-[#5C0617] font-semibold text-sm hover:bg-[#F4EBE3] transition-all duration-300 shadow-sm border border-[#E8D5B5] group"
          >
            <div className="flex items-center gap-3">
              <Download className="w-5 h-5 text-[#8B0021]" strokeWidth={1.5} />
              <span>Baixar arquivo .ICS (Apple / Outlook)</span>
            </div>
            <span className="text-xs text-[#8B0021]/80 font-normal">iOS & Android</span>
          </button>

          {/* Copy details */}
          <button
            onClick={handleCopyDetails}
            type="button"
            className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-transparent text-[#72091F] text-xs font-semibold hover:bg-black/5 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" strokeWidth={1.5} />
                <span className="text-emerald-700">Detalhes copiados com sucesso!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" strokeWidth={1.5} />
                <span>Copiar detalhes em texto</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

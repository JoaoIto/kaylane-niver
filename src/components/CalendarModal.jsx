import React, { useState } from "react";
import { Calendar, Download, Check, Copy, ExternalLink, X, Clock, MapPin } from "lucide-react";
import { EVENT_DATA } from "../data/eventData";
import { getGoogleCalendarUrl, downloadIcsFile } from "../utils/calendar";

export function CalendarModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyDetails = () => {
    const text = `${EVENT_DATA.calendar.title}\nData: ${EVENT_DATA.dateString} (${EVENT_DATA.dayOfWeek})\nHorário: A partir das ${EVENT_DATA.startTime}\nLocal: ${EVENT_DATA.venue.name} (${EVENT_DATA.venue.fullAddress})\nLink: ${window.location.href}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-md bg-[#FCFAF7] border border-[#EADFD7] rounded-3xl p-6 sm:p-8 shadow-2xl text-left overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#5B0616]/70 hover:text-[#5B0616] rounded-full hover:bg-black/5 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" strokeWidth={1.25} />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-11 h-11 rounded-2xl bg-[#5B0616] flex items-center justify-center text-[#FCFAF7] shadow-xs">
            <Calendar className="w-5 h-5 text-[#EADFD7]" strokeWidth={1.25} />
          </div>
          <div>
            <span className="text-[11px] uppercase tracking-widest font-semibold text-[#7D1225]">
              Salvar na Agenda
            </span>
            <h3 className="font-editorial text-2xl font-bold text-[#420410]">
              Reserve esta data
            </h3>
          </div>
        </div>

        {/* Event Quick Info */}
        <div className="bg-white rounded-2xl p-4 border border-[#EADFD7] mb-6 space-y-2 text-xs sm:text-sm text-[#420410]">
          <div className="flex items-center gap-2 font-medium text-[#5B0616]">
            <Calendar className="w-4 h-4 text-[#5B0616]" strokeWidth={1.25} />
            <span>{EVENT_DATA.dateString} • {EVENT_DATA.dayOfWeek}</span>
          </div>
          <div className="flex items-center gap-2 text-[#7D1225]">
            <Clock className="w-4 h-4 text-[#5B0616]" strokeWidth={1.25} />
            <span>A partir das {EVENT_DATA.startTime}</span>
          </div>
          <div className="flex items-start gap-2 text-[#7D1225]">
            <MapPin className="w-4 h-4 text-[#5B0616] shrink-0 mt-0.5" strokeWidth={1.25} />
            <span>{EVENT_DATA.venue.name} ({EVENT_DATA.venue.locationDetail})</span>
          </div>
        </div>

        {/* Options */}
        <div className="space-y-2.5">
          {/* Google Calendar Link */}
          <a
            href={getGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full px-5 py-3 rounded-2xl bg-[#5B0616] text-[#FCFAF7] font-medium text-xs sm:text-sm hover:bg-[#72091F] transition-colors shadow-xs group"
          >
            <div className="flex items-center gap-2.5">
              <Calendar className="w-4 h-4 text-[#EADFD7]" strokeWidth={1.25} />
              <span>Adicionar ao Google Calendar</span>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-[#EADFD7]/80 group-hover:translate-x-0.5 transition-transform" strokeWidth={1.25} />
          </a>

          {/* Download ICS (Apple Calendar / Outlook) */}
          <button
            onClick={downloadIcsFile}
            type="button"
            className="flex items-center justify-between w-full px-5 py-3 rounded-2xl bg-white text-[#5B0616] font-medium text-xs sm:text-sm hover:bg-[#FAF7F2] transition-colors shadow-xs border border-[#EADFD7] group"
          >
            <div className="flex items-center gap-2.5">
              <Download className="w-4 h-4 text-[#5B0616]" strokeWidth={1.25} />
              <span>Baixar arquivo .ICS (Apple / Outlook)</span>
            </div>
            <span className="text-[10px] text-[#7D1225]/80 font-normal">iOS & Android</span>
          </button>

          {/* Copy details */}
          <button
            onClick={handleCopyDetails}
            type="button"
            className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-xl text-[#7D1225] text-xs font-normal hover:bg-black/5 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-700" strokeWidth={1.25} />
                <span className="text-emerald-800 font-medium">Detalhes copiados com sucesso!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" strokeWidth={1.25} />
                <span>Copiar detalhes em texto</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

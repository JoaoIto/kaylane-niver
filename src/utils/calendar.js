import { EVENT_DATA } from "../data/eventData";

/**
 * Generates direct Google Calendar event creation URL
 */
export function getGoogleCalendarUrl() {
  const { calendar, dateISO, venue } = EVENT_DATA;
  const baseUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE";
  
  const text = encodeURIComponent(calendar.title);
  const details = encodeURIComponent(calendar.details);
  const location = encodeURIComponent(`${venue.name}, ${venue.fullAddress}`);
  const dates = `${calendar.startIsoUTC}/${calendar.endIsoUTC}`;

  return `${baseUrl}&text=${text}&dates=${dates}&details=${details}&location=${location}`;
}

/**
 * Generates and triggers download of an .ics iCalendar file for Apple Calendar, Outlook, etc.
 */
export function downloadIcsFile() {
  const { calendar, venue } = EVENT_DATA;
  
  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Kaylane Almeida//Aniversario 2026//PT",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `SUMMARY:${calendar.title}`,
    `DESCRIPTION:${calendar.details.replace(/\n/g, "\\n")}`,
    `LOCATION:${venue.name}, ${venue.fullAddress}`,
    `DTSTART:${calendar.startIsoUTC}`,
    `DTEND:${calendar.endIsoUTC}`,
    "STATUS:CONFIRMED",
    "SEQUENCE:0",
    "BEGIN:VALARM",
    "TRIGGER:-PT2H",
    "DESCRIPTION:Lembrete: Aniversário da Kaylane hoje às 17h30!",
    "ACTION:DISPLAY",
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute("download", "Aniversario_Kaylane_Almeida.ics");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

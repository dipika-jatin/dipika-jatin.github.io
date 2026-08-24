import { wedding } from '../data/wedding';

/**
 * "Save the date" calendar entries. We use an all-day event on 21 Nov 2026
 * — guests can subdivide their own schedule later. All-day events also avoid
 * the timezone confusion of a specific start time across multiple calendar apps.
 */

const title = `${wedding.bride} & ${wedding.groom} — Wedding`;
const description =
  `Join us as ${wedding.bride} and ${wedding.groom} get married. ` +
  `Full schedule and venue details at ${wedding.siteUrl}`;
const location = `${wedding.city}, ${wedding.country}`;

/** Google Calendar event creation deep link. Opens a pre-filled "new event" page. */
export const googleCalendarUrl =
  `https://calendar.google.com/calendar/render?action=TEMPLATE` +
  `&text=${encodeURIComponent(title)}` +
  `&dates=${wedding.dateCalStart}/${wedding.dateCalEnd}` +
  `&details=${encodeURIComponent(description)}` +
  `&location=${encodeURIComponent(location)}`;

/**
 * RFC-5545 ICS string for Apple Calendar / Outlook / any standards-compliant
 * calendar app. Served to the browser as a data: URI on click — no backend.
 *
 * Escape commas and semicolons per RFC, fold long lines to <=75 octets.
 */
function escapeIcs(value: string): string {
  return value
    .replace(/\\/g, '\\\\')
    .replace(/\n/g, '\\n')
    .replace(/,/g, '\\,')
    .replace(/;/g, '\\;');
}

const dtstamp =
  new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '').slice(0, 15) + 'Z';
const uidHost = (() => {
  try {
    return new URL(wedding.siteUrl).hostname;
  } catch {
    return 'wedding.local';
  }
})();

export const icsContent = [
  'BEGIN:VCALENDAR',
  'VERSION:2.0',
  'PRODID:-//Dipika & Jatin Wedding//EN',
  'CALSCALE:GREGORIAN',
  'METHOD:PUBLISH',
  'BEGIN:VEVENT',
  `UID:${wedding.dateCalStart}-dipika-jatin@${uidHost}`,
  `DTSTAMP:${dtstamp}`,
  `DTSTART;VALUE=DATE:${wedding.dateCalStart}`,
  `DTEND;VALUE=DATE:${wedding.dateCalEnd}`,
  `SUMMARY:${escapeIcs(title)}`,
  `DESCRIPTION:${escapeIcs(description)}`,
  `LOCATION:${escapeIcs(location)}`,
  'STATUS:CONFIRMED',
  'TRANSP:OPAQUE',
  'END:VEVENT',
  'END:VCALENDAR',
].join('\r\n');

/** WhatsApp share deep link — works on web, iOS and Android. */
export const whatsappShareUrl = `https://wa.me/?text=${encodeURIComponent(
  `${wedding.shareMessage} ${wedding.siteUrl}`
)}`;

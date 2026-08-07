/**
 * Core wedding metadata — edit this file to update names, date, city, etc.
 * Everything in the site (countdown, OG meta, calendar invites, share copy)
 * reads from here.
 */
export const wedding = {
  bride: 'Dipika',
  groom: 'Jatin',
  monogram: 'D & J',

  /**
   * Celebrations begin — Guest Check-in & Welcome Breakfast on the 20th,
   * pinned to Asia/Kolkata (IST = UTC+05:30). This is a two-day event
   * (Haldi & Sangeet on the 20th, Mehendi/Varmala/Wedding on the 21st), so
   * the countdown targets the start of the *first* day, not just the
   * Wedding Ceremony. The +05:30 offset is what makes the countdown
   * identical for guests in any timezone — the JS Date object resolves to
   * one absolute UTC instant regardless of where the browser is.
   */
  dateIso: '2026-11-20T11:00:00+05:30',

  /** Display strings — keep these in sync with dateIso when you edit it. */
  dateLabel: '20 & 21 NOVEMBER 2026',
  dateShort: '20\u201321.11.26',

  /**
   * Used for all-day calendar entries (YYYYMMDD). Spans both celebration
   * days — 20th (Haldi, Sangeet) through 21st (Mehendi, Varmala, Wedding) —
   * so guests saving the date get the full itinerary window.
   */
  dateCalStart: '20261120',
  dateCalEnd: '20261122', // exclusive — ICS / Google Cal convention

  city: 'Kolkata',
  country: 'India',

  contactEmail: 'jatinpandey77@gmail.com',

  /**
   * Live site URL — feeds the WhatsApp share message, Google Calendar /
   * ICS descriptions, OG meta, canonical link, and JSON-LD. Must match
   * `site` in astro.config.mjs. Currently hosted on GitHub Pages; swap
   * back to a custom domain here (and in astro.config.mjs) if one is
   * purchased later.
   */
  siteUrl: 'https://dipika-jatin.github.io',

  shareMessage:
    "We're getting married! Dipika & Jatin · 21 November 2026 · Kolkata. You're invited —",
} as const;

export type Wedding = typeof wedding;

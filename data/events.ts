export type WeddingEvent = {
  time: string;
  name: string;
  venueName: string;
  description: string;
};

export type EventDay = {
  day: string;
  monthYear: string;
  events: WeddingEvent[];
};

export const eventDays: EventDay[] = [
  {
    day: '20',
    monthYear: 'NOVEMBER · 2026',
    events: [
      {
        time: '11:00 AM onwards',
        name: 'Guest Check-in',
        venueName: 'Kenilworth Hotel, Kolkata',
        description:
          'Settle in and get ready for the celebrations ahead.',
      },
      {
        time: '1:00 PM',
        name: 'Haldi Ceremony',
        venueName: 'Kenilworth Hotel, Kolkata',
        description:
          'A vibrant blessing ritual with turmeric, flowers and the warmth of family.',
      },
      {
        time: '7:00 PM onwards',
        name: 'Sangeet Night',
        venueName: 'The Dockyard Co, Kolkata',
        description:
          'An electric evening of music, dance and joy as two families become one.',
      },
    ],
  },
  {
    day: '21',
    monthYear: 'NOVEMBER · 2026',
    events: [
      {
        time: '10:00 AM onwards',
        name: 'Mehendi Ceremony',
        venueName: 'Kenilworth Hotel, Kolkata',
        description:
          'An intimate morning of intricate henna artistry, laughter and timeless tradition.',
      },
      {
        time: '7:00 PM',
        name: 'Varmala',
        venueName: 'The Dockyard Co, Kolkata',
        description:
          'The sacred exchange of garlands as Dipika and Jatin choose each other before their loved ones.',
      },
      {
        time: '9:00 PM onwards',
        name: 'Wedding Ceremony',
        venueName: 'The Dockyard Co, Kolkata',
        description:
          'Vedic vows solemnised under the stars, followed by an unforgettable night of dining and dancing.',
      },
    ],
  },
];

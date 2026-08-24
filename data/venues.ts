export type VenueIcon = 'hotel' | 'venue';

export type Venue = {
  label: string;
  name: string;
  address: string[];
  mapUrl: string;
  icon: VenueIcon;
};

export const venues: Venue[] = [
  {
    label: 'Haldi · Mehendi',
    name: 'Kenilworth Hotel',
    address: ['1 & 2, Little Russell Street', 'Kolkata, West Bengal 700 071'],
    mapUrl: 'https://maps.google.com/?q=Kenilworth+Hotel+Kolkata',
    icon: 'hotel',
  },
  {
    label: 'Sangeet · Varmala · Wedding',
    name: 'The Dockyard Co',
    address: ['3, Strand Road, Fairlie Place', 'Kolkata, West Bengal 700 001'],
    mapUrl: 'https://maps.google.com/?q=The+Dockyard+Co+Kolkata',
    icon: 'venue',
  },
];

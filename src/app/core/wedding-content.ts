import { Guest, WeddingContent } from './invite.models';

export const WEDDING_CONTENT: WeddingContent = {
  couple: 'Anna & Andrey',
  date: '2026-08-07',
  dateDisplay: '07.08.2026',
  venueName: 'Almanac Palais Vienna',
  venueAddress: 'Parkring 14-16, 1010 Wien',
  heroImage: 'assets/almanac/cover.jpg',
  rooms: [
    {
      name: 'Foyer',
      image: 'assets/almanac/gallery.jpg',
      role: 'Ankunft',
      description: 'Garderobe und erster Treffpunkt ab 17:00.',
    },
    {
      name: 'Gallery',
      image: 'assets/almanac/gallery.jpg',
      role: 'Sektempfang',
      description: 'Stehempfang vor der Trauung.',
    },
    {
      name: 'Library',
      image: 'assets/almanac/library.jpg',
      role: 'Trauung',
      description: 'Heller Spiegelsaal fuer die Zeremonie.',
    },
    {
      name: 'Nepliget Park',
      image: 'assets/almanac/nepliget.jpg',
      role: 'Dinner',
      description: 'Dinner an zwei Tafeln im grossen Prunkraum.',
    },
    {
      name: 'Almanac Club',
      image: 'assets/almanac/club.jpg',
      role: 'Afterparty',
      description: 'Tanzen und Drinks ab 22:00.',
    },
  ],
  program: [
    {
      time: '17:00',
      title: 'Ankunft',
      room: 'Foyer',
      details: 'Garderobe, Geschenketisch und entspanntes Ankommen.',
    },
    {
      time: '17:00 - 18:00',
      title: 'Sektempfang',
      room: 'Gallery',
      details: 'Sekt, Canapes und Zeit zum Begruessen.',
    },
    {
      time: '18:00 - 18:30',
      title: 'Trauung',
      room: 'Library',
      details: 'Zeremonie im Spiegelsaal.',
    },
    {
      time: '18:30 - 22:00',
      title: 'Dinner',
      room: 'Nepliget Park',
      details: 'Drei Gaenge mit Fleisch- und vegetarischer Hauptgangoption.',
    },
    {
      time: '22:00 - 02:00',
      title: 'Afterparty',
      room: 'Almanac Club',
      details: 'Bar, Musik und Tanz im Club.',
    },
  ],
  menu: [
    {
      label: 'Canapes',
      title: 'Zum Empfang',
      details: 'Tatar vom Weiderind mit Brioche und Senf Kaviar. Ziegenkaese Praline mit Rosmarin, Zitrone und Pistazie.',
    },
    {
      label: 'Vorspeise',
      title: 'Burrata',
      details: 'Tomate, Wassermelone, Basilikum und Chili.',
    },
    {
      label: 'Hauptgang',
      title: 'Rinderfilet',
      details: 'Portwein Jus, Spinat, konfierte Tomate und Erdaepfel Mousseline.',
    },
    {
      label: 'Vegetarisch',
      title: 'Brokkoli',
      details: 'Kapern Sherry Vinaigrette, geroesteter Brokkoli, Creme und geraeucherte Mandeln.',
    },
    {
      label: 'Dessert',
      title: 'Weisses Schokoladen Mousse',
      details: 'Biskuit, Champagner Sud und Himbeere.',
    },
  ],
  updates: [
    'Sitzplan folgt, sobald alle Zusagen final sind.',
    'Dresscode ist noch offen und wird spaeter ergaenzt.',
    'Bitte hinterlegt eure E-Mail, damit wir Aenderungen direkt schicken koennen.',
  ],
};

export const FALLBACK_GUESTS: Guest[] = [
  {
    uuid: 'demo-anna-andrey',
    firstName: 'Anna',
    lastName: 'Bieliakova',
    partySize: 2,
    note: 'Demo Einladung fuer lokale Entwicklung.',
  },
  {
    uuid: 'demo-guest',
    firstName: 'Dear',
    lastName: 'Guest',
    partySize: 1,
  },
];

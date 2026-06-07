import { Guest, WeddingContent } from './invite.models';

export const WEDDING_CONTENT: WeddingContent = {
  couple: 'Anna & Andrey',
  date: '2026-08-07',
  dateDisplay: '07.08.2026',
  venueName: 'Almanac Palais Vienna',
  venueAddress: 'Parkring 14-16, 1010 Вена',
  heroImage: 'assets/landing.jpg',
  mainImage: 'assets/main.png',
  program: [
    {
      time: '17:00 - 18:00',
      title: 'Приветственный фуршет',
      room: 'Gallery',
      details: 'Игристое, канапе и время, чтобы со всеми поздороваться',
      image: 'assets/program/canape.jpeg',
    },
    {
      time: '18:00 - 18:30',
      title: 'Церемония',
      room: 'Library',
      details: 'Наша свадебная церемония в зеркальном зале',
      image: 'assets/program/library.jpeg',
    },
    {
      time: '18:30 - 22:00',
      title: 'Ужин',
      room: 'Nepliget Park',
      details: 'Три блюда, мясной и вегетарианский варианты основного блюда',
      image: 'assets/program/nepliget-park.jpeg',
    },
    {
      time: '22:00 - 02:00',
      title: 'Вечеринка',
      room: 'Almanac Club',
      details: 'Бар, музыка и танцы в клубе',
      image: 'assets/program/club.jpeg',
    },
  ],
};

export const FALLBACK_GUESTS: Guest[] = [
  {
    uuid: 'demo-anna-andrey',
    firstName: 'Anna',
    sex: 'f',
    note: 'Демо-приглашение для локальной разработки.',
  },
  {
    uuid: 'demo-guest',
    firstName: 'гость',
    sex: 'm',
  },
];

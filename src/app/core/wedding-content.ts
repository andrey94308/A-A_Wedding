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
      title: 'Место встречи',
      room: 'Gallery',
      details:
        'Мы будем рады приветствовать вас в Almanac Palais Vienna.\n\nДо начала церемонии у нас будет время встретиться со всеми, кто нам дорог, познакомить друзей и родных друг с другом и вместе начать этот особенный вечер за игристым и авторскими канапе.\n\nНа протяжении всего вечера рядом с нами будет ведущий, который поможет сделать праздник комфортным, лёгким и запоминающимся для каждого гостя.',
      image: 'assets/program/entrance.PNG',
    },
    {
      time: '18:00 - 18:30',
      title: 'Самое важное',
      room: 'Library',
      details:
        'Ровно в 18:00 начнётся самый волнительный момент нашего дня.\n\nВ одном из залов, в окружении семьи и друзей, состоится регистрация. Для нас большая радость разделить этот момент вместе с вами.',
      image: 'assets/program/ceremony.PNG',
    },
    {
      time: '18:30 - 22:00',
      title: 'Свадебный ужин',
      room: 'Nepliget Park',
      details:
        'Когда самые волнительные моменты останутся позади, мы соберёмся за праздничным столом.\n\nВ течение вечера вас ждёт ужин сопровождаемый винами, просекко и другими напитками.\n\nМы будем рады учесть ваши предпочтения в питании и возможные аллергии, пожалуйста, сообщите нам об этом заранее.',
      image: 'assets/program/dining.PNG',
    },
    {
      time: '22:00 - 02:00',
      title: 'Что насчет продолжения?',
      room: 'Almanac Club',
      details:
        'Мы спустимся в Almanac Club.\n\nКоктейли, музыка и танцы до поздней ночи. В этот вечер клуб будет открыт только для нас!',
      image: 'assets/program/club.PNG',
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

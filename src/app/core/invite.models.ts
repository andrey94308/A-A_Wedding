export interface Guest {
  uuid: string;
  firstName: string;
  lastName: string;
  email?: string;
  partySize?: number;
  tableName?: string;
  note?: string;
}

export interface ProgramItem {
  time: string;
  title: string;
  room: string;
  details: string;
}

export interface VenueRoom {
  name: string;
  image: string;
  role: string;
  description: string;
}

export interface MenuCourse {
  label: string;
  title: string;
  details: string;
}

export interface WeddingContent {
  couple: string;
  date: string;
  dateDisplay: string;
  venueName: string;
  venueAddress: string;
  heroImage: string;
  rooms: VenueRoom[];
  program: ProgramItem[];
  menu: MenuCourse[];
  updates: string[];
}

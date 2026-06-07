export interface Guest {
  uuid: string;
  firstName: string;
  lastName: string;
  sex?: 'f' | 'm';
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
  image: string;
}

export interface WeddingContent {
  couple: string;
  date: string;
  dateDisplay: string;
  venueName: string;
  venueAddress: string;
  heroImage: string;
  program: ProgramItem[];
  updates: string[];
}

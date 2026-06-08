export interface Guest {
  uuid: string;
  firstName: string;
  sex?: 'f' | 'm';
  official?: boolean;
  email?: string;
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
  mainImage: string;
  program: ProgramItem[];
}

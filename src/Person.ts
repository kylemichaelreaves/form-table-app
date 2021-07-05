export interface Place {
  state: string;
  county: string;
  town: string;
}

export interface Date {
  year: number;
  month: number | string;
  day: number;
}

export interface Name {
  first: string;
  middle?: string;
  last: string;
}

export interface Person {
  id: number;
  name: Name;
  birthdate: Date;
  birthplace: Place;
  people: Person[];
}

export interface People {
  people: Person[]
}
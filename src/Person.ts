export interface Place {
  state: string;
  county: string;
  town: string;
}

export interface Date {
  day: number;
  month: number | string;
  year: number;
}

export interface Name {
  first: string;
  middle?: string;
  last: string;
}

export interface Person {
  id: number;
  firstName: string;
  middleName?: string;
  lastName: string;
  birthYear: number;
  birthMonth: number | string;
  birthDay: number;
  birthState: string;
  birthCounty: string;
  birthTown: string;
}

export interface People {
  people: Person[]
}
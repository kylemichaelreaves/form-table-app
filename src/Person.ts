export interface Place {
  state: string;
  county: string;
  town: string;
}

export interface DateInterface {
  day: number;
  month: number | string;
  year: number;
}

interface Event {
  date: DateInterface;
  place: Place
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
  birthYear: string;
  birthMonth: string;
  birthDay: string;
  birthState: string;
  birthCounty: string;
  birthTown: string;
}

export interface PersonInterface {
  id: number;
  name: Name;
  born: Event;
  died?: Event;
}

export interface People {
  people: Person[]
}

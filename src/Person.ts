export interface Person {
    id: number;
    firstName: string;
    middleName?: string;
    lastName: string;
    birthYear: string;
    birthMonth: number | string;
    birthDay: number;
    birthTown: string;
    birthCounty: string;
    birthState: string;
  }
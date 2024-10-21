export type ContactType = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: number;
  date?: number;
  gender?: "Male" | "Female";
};

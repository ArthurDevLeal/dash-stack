export type TeamType = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  phoneNumber?: number;
  date?: number;
  gender?: "Male" | "Female";
};

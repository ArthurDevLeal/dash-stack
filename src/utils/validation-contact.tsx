export const validateFirstName = (name: string) => /^[A-Za-z]+$/.test(name);
export const validateLastName = (name: string) => /^[A-Za-z]+$/.test(name);
export const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const validatePhoneNumber = (phone: string) => /^\+?\d{10,15}$/.test(phone);
export const validateDateOfBirth = (date: string) => /^\d{4}-\d{2}-\d{2}$/.test(date); // YYYY-MM-DD

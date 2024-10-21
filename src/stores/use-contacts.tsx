import { ContactType } from "@/types/contact";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface TodoStore {
  list: ContactType[];
  add: (firstName: string, lastName: string, email: string) => void;
  clear: () => void;
}

export const useContact = create<TodoStore>()(
  persist(
    (set) => ({
      list: [],
      add: (firstName: string, lastName: string, email: string) =>
        set((state) => ({
          list: [...state.list, { id: state.list.length + 1, firstName, lastName, email }],
        })),
      clear: () => set((state) => ({ list: [] })),
    }),

    { name: "contact" }
  )
);

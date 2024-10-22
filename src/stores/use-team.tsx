import { TeamType } from "@/types/team";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface TeamStore {
  list: TeamType[];
  add: (firstName: string, lastName: string, email: string, role: string) => void;
}

export const useTeam = create<TeamStore>()(
  persist(
    (set) => ({
      list: [],
      add: (firstName: string, lastName: string, email: string, role: string) =>
        set((state) => ({
          list: [...state.list, { id: state.list.length + 1, firstName, lastName, email, role }],
        })),
    }),

    { name: "contact" }
  )
);

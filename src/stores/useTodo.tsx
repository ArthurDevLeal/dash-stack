import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface TodoType {
  id: number;
  name: string;
  favorited: boolean;
}

interface TodoStore {
  list: TodoType[];
  add: (name: string) => void;
  remove: (id: number) => void;
  favorite: (id: number) => void;
}

export const useTodo = create<TodoStore>()(
  persist(
    (set) => ({
      list: [],

      add: (name: string) =>
        set((state) => ({
          list: [...state.list, { id: state.list.length + 1, name, favorited: false }],
        })),

      remove: (id: number) =>
        set((state) => ({
          list: state.list.filter((item) => item.id !== id),
        })),

      favorite: (id: number) =>
        set((state) => ({
          list: state.list.map((item) => (item.id === id ? { ...item, favorited: !item.favorited } : item)),
        })),
    }),

    { name: "todo" }
  )
);

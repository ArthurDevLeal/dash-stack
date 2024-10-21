"use client";
import { useTodo } from "@/stores/use-todo";
import { Tittle } from "../components/ui/tittle";
import Item from "./components/item/item";
import { ToDoAddButton } from "./components/to-do-add";

export default function Products() {
  const { favorite, list, remove } = useTodo();

  return (
    <main className="flex flex-col gap-[30px]">
      <div className="w-full flex justify-between">
        <Tittle name="To-Do List" />
        <ToDoAddButton />
      </div>
      <div className="flex flex-col gap-6">
        {list &&
          list.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              id={item.id}
              favorited={item.favorited}
              favorite={() => favorite(item.id)}
              remove={() => remove(item.id)}
            />
          ))}
      </div>
    </main>
  );
}

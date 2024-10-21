"use client";
import { useContact } from "@/stores/use-contacts";
import Person from "./person";

export default function PersonList() {
  const { list } = useContact();
  return (
    <div className="w-full grid grid-cols-3 gap-[30px] mt-[30px]">
      {list.map((item) => {
        return <Person name={item.firstName + " " + item.lastName} email={item.email} />;
      })}
    </div>
  );
}

"use client"
import { useTeam } from "@/stores/use-team";
import Person from "./person";

export default function PersonList() {
  const { list } = useTeam();
  return (
    <div className="w-full grid grid-cols-4 gap-[30px] mt-[30px]">
      {list.map((item) => {
        return <Person name={item.firstName + item.lastName} email={item.email} role={item.role} />;
      })}
    </div>
  );
}

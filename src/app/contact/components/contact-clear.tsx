"use client";
import { useContact } from "@/stores/use-contacts";

export function ContactClear() {
  const { clear } = useContact();
  return (
    <button
      onClick={clear}
      className="text-white bg-red-500 py-[10px] px-[30px] rounded-md transition-colors hover:bg-red-600"
    >
      Clear User List
    </button>
  );
}

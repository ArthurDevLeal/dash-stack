import { twMerge } from "tailwind-merge";

export default function SideBarItemName({ name, className }: { name: string; className: string }) {
  return <p className={twMerge("", className)}>{name}</p>;
}

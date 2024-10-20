import { ReactNode } from "react";

export function CardRoot({ children }: { children: ReactNode }) {
  return <div className="flex flex-col justify-between w-full h-full bg-white rounded-[14px] p-4">{children}</div>;
}

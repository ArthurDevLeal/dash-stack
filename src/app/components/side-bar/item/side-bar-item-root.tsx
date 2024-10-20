import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export default function SideBarItemRoot({ children, className }: { children: ReactNode; className: string }) {
  return (
    <div
      className={twMerge(
        "w-[192px] h-[50px] flex pl-[20px] items-center gap-4 rounded-md transition-all relative",
        className
      )}
    >
      {children}
    </div>
  );
}

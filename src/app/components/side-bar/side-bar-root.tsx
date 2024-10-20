import { ReactNode } from "react";

export default function SideBarRoot({ children }: { children: ReactNode }) {
  return (
    <div className="fixed w-[240px] z-50 bg-white h-full flex flex-col items-center border-r overflow-y-auto scrollbar-hidden">
      {children}
    </div>
  );
}

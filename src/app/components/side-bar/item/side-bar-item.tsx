import { LucideIcon } from "lucide-react";
import { SideBarIndex } from "../side-bar-index";
import Link from "next/link";
interface SideBarItemRootProps {
  name: string;
  icon: LucideIcon;
  isActive?: boolean;
  href: string;
}
export default function SideBarItem({ name, icon, isActive = false, href }: SideBarItemRootProps) {
  return (
    <Link href={href}>
      <div
        className={`w-[192px] h-[50px] flex pl-[20px] items-center gap-4 rounded-md transition-all relative ${
          isActive ? "bg-babyblue active-indicator " : "bg-white hover:bg-bgdashboard "
        }`}
      >
        <SideBarIndex.Item.Icon Icon={icon} className={isActive ? "text-white" : "text-diferentblack"} />
        <p className={isActive ? "text-white" : "text-diferentblack"}>{name}</p>
      </div>
    </Link>
  );
}

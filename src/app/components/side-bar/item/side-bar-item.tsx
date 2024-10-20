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
      <SideBarIndex.Item.Root
        className={isActive ? "bg-babyblue active-indicator " : "bg-white hover:bg-bgdashboard "}
      >
        <SideBarIndex.Item.Icon Icon={icon} className={isActive ? "text-white" : "text-diferentblack"} />
        <SideBarIndex.Item.Name name={name} className={isActive ? "text-white" : "text-diferentblack"} />
      </SideBarIndex.Item.Root>
    </Link>
  );
}

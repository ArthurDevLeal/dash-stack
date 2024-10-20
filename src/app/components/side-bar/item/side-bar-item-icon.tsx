import { LucideIcon } from "lucide-react";

export default function SideBarItemIcon({ Icon, className }: { Icon: LucideIcon; className: string }) {
  return <Icon className={className} />;
}

import React from "react";
import {
  CalendarRange,
  ChartColumn,
  CircleDollarSign,
  Clock,
  Columns,
  Database,
  Gift,
  Heart,
  ListOrdered,
  ListTodoIcon,
  LogOut,
  MessageCircle,
  Settings,
  Table,
  User,
  UsersIcon,
} from "lucide-react";
import SideBarItem from "./item/side-bar-item";
import { SideBarIndex } from "./side-bar-index";

export default function SideBar({ whoIsActive }: { whoIsActive: string }) {
  return (
    <SideBarIndex.Root>
      <SideBarIndex.Logo />
      <SideBarIndex.SectionName name="Main" />
      <SideBarItem name="Dashboard" icon={Clock} isActive={whoIsActive === "dashboard"} href="/" />
      <SideBarItem name="Products" icon={Columns} isActive={whoIsActive === "products"} href="/products" />
      <SideBarItem name="Favorites" icon={Heart} isActive={whoIsActive === "favorites"} href="/favorites" />
      <SideBarItem name="Inbox" icon={MessageCircle} isActive={whoIsActive === "inbox"} href="/inbox" />
      <SideBarItem
        name="Order Lists"
        icon={ListOrdered}
        isActive={whoIsActive === "order lists"}
        href="/orders"
      />
      <SideBarItem
        name="Product Stock"
        icon={Database}
        isActive={whoIsActive === "product stock"}
        href="/product-stock"
      />
      <SideBarIndex.Division />

      <SideBarIndex.SectionName name="Pages" />
      <SideBarItem name="Pricing" icon={Gift} isActive={whoIsActive === "pricing"} href="/pricing" />
      <SideBarItem
        name="Calendar"
        icon={CalendarRange}
        isActive={whoIsActive === "calendar"}
        href="/calendar"
      />
      <SideBarItem name="To-Do" icon={ListTodoIcon} isActive={whoIsActive === "to-do"} href="/to-do" />
      <SideBarItem name="Contact" icon={UsersIcon} isActive={whoIsActive === "contact"} href="/contact" />
      <SideBarItem
        name="Invoice"
        icon={CircleDollarSign}
        isActive={whoIsActive === "invoice"}
        href="/invoice"
      />
      <SideBarItem
        name="Ui Elements Stock"
        icon={ChartColumn}
        isActive={whoIsActive === "ui elements stock"}
        href="/ui-elements-stock"
      />
      <SideBarItem name="Team" icon={User} isActive={whoIsActive === "team"} href="/team" />
      <SideBarItem name="Table" icon={Table} isActive={whoIsActive === "table"} href="/table" />

      <SideBarIndex.Division />
      <SideBarIndex.SectionName name="Settings" />
      <SideBarItem name="Settings" icon={Settings} isActive={whoIsActive === "settings"} href="/settings" />
      <SideBarItem name="Logout" icon={LogOut} isActive={whoIsActive === "logout"} href="/logout" />
    </SideBarIndex.Root>
  );
}

"use client";
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
import { usePathname } from "next/navigation";

export default function SideBar() {
  const path = usePathname();
  return (
    <SideBarIndex.Root>
      <SideBarIndex.Logo />
      <p className="opacity-60 text-diferentblack text-[12px] font-bold uppercase self-start ml-[40px]">
        Main
      </p>
      <SideBarItem name="Dashboard" icon={Clock} isActive={path === "/"} href="/" />
      <SideBarItem name="Products" icon={Columns} isActive={path === "/products"} href="/products" />
      <SideBarItem name="Favorites" icon={Heart} isActive={path === "/favorites"} href="/favorites" />
      <SideBarItem name="Inbox" icon={MessageCircle} isActive={path === "/inbox"} href="" />
      <SideBarItem name="Order Lists" icon={ListOrdered} isActive={path === "/order lists"} href="/orders" />
      <SideBarItem
        name="Product Stock"
        icon={Database}
        isActive={path === "/product stock"}
        href="/product-stock"
      />
      <SideBarIndex.Division />

      <p className="opacity-60 text-diferentblack text-[12px] font-bold uppercase self-start ml-[40px]">
        Pages
      </p>
      <SideBarItem name="Pricing" icon={Gift} isActive={path === "/pricing"} href="/pricing" />
      <SideBarItem name="Calendar" icon={CalendarRange} isActive={path === "/calendar"} href="/calendar" />
      <SideBarItem name="To-Do" icon={ListTodoIcon} isActive={path === "/to-do"} href="/to-do" />
      <SideBarItem name="Contact" icon={UsersIcon} isActive={path === "/contact"} href="/contact" />
      <SideBarItem name="Invoice" icon={CircleDollarSign} isActive={path === "/invoice"} href="/invoice" />
      <SideBarItem
        name="Ui Elements Stock"
        icon={ChartColumn}
        isActive={path === "/ui elements stock"}
        href="/ui-elements-stock"
      />
      <SideBarItem name="Team" icon={User} isActive={path === "/team"} href="" />
      <SideBarItem name="Table" icon={Table} isActive={path === "/table"} href="" />

      <SideBarIndex.Division />

      <p className="opacity-60 text-diferentblack text-[12px] font-bold uppercase self-start ml-[40px]">
        Settings
      </p>
      <SideBarItem name="Settings" icon={Settings} isActive={path === "/settings"} href="" />
      <SideBarItem name="Logout" icon={LogOut} isActive={path === "/logout"} href="" />
    </SideBarIndex.Root>
  );
}

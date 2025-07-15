"use client";
import NavLink from "@/features/navbar/components/NavLink";
import { cn } from "@/lib/utils";
import {
  IconBell,
  IconChartAnalytics,
  IconHome3,
  IconPeople,
  IconPerson,
  IconShuffle,
} from "@intentui/icons";
const Sidebar = () => {
  return (
    <div
      className={cn(
        "max-h-(--sidebar-height)  sticky top-(--navbar-height) px-2  transition-all py-3"
      )}
    >
      <NavLink href={"/home"} icon={IconHome3}>
        Home
      </NavLink>
      <NavLink href={"/home"} icon={IconShuffle}>
        Random
      </NavLink>
      <NavLink href={"/topik"} icon={IconPeople}>
        Topik
      </NavLink>
      <NavLink href={"/notifikasi"} icon={IconBell}>
        Notifikasi
      </NavLink>
      <NavLink href={"/trending"} icon={IconChartAnalytics}>
        Trending Topik
      </NavLink>
      <NavLink href={"/a"} icon={IconPerson}>
        Akun Saya
      </NavLink>
    </div>
  );
};

export { Sidebar };

"use client";
import NavLink from "@/features/navbar/components/NavLink";
import SideNav from "@/features/navigation/components/SideNav";
import { cn } from "@/lib/utils";
import {
  IconBell,
  IconChartAnalytics,
  IconCompass,
  IconHome3,
  IconInbox,
  IconLogin,
  IconMessage,
  IconPeople,
  IconPerson,
  IconSettings,
  IconShuffle,
} from "@intentui/icons";
const Sidebar = () => {
  return (
    <div
      className={cn(
        "max-h-(--sidebar-height) hidden lg:flex overflow-y-auto border-sidebar-border  items-start justify-end border-r sticky top-0  transition-all py-3"
      )}
    >
      <div className="h-full flex-1  pl-2 md:pl-28 lg:pl-32">
        <SideNav />
      </div>
    </div>
  );
};

export { Sidebar };

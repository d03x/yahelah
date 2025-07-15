"use client";
import NavLink from "@/features/navbar/components/NavLink";
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
        "max-h-(--sidebar-height) overflow-y-auto flex items-start justify-end border-r sticky top-0  transition-all py-3"
      )}
    >
      <div className="flex-1 flex flex-col  h-full pl-2 md:pl-28 lg:pl-32">
        <div className="mb-4 px-4">
          <span className="text-2xl font-bold">YAELLAH</span>
        </div>

        <div className="flex flex-col pr-8">
          <NavLink href={"/home"} icon={IconHome3}>
            Home
          </NavLink>
          <NavLink href={"/home"} icon={IconPeople}>
            Komunitas
          </NavLink>
             <NavLink href={"/home"} icon={IconCompass}>
            Explore
          </NavLink>
          <NavLink href={"/topik"} icon={IconInbox}>
            Kotak Masuk
          </NavLink>
          <NavLink href={"/notifikasi"} icon={IconBell}>
            Notifikasi
          </NavLink>
          <NavLink href={"/trending"} icon={IconSettings}>
            Pengaturan
          </NavLink>
          <NavLink href={"/a"} icon={IconSettings}>
            Theme
          </NavLink>
        </div>

        <div className="pr-6 mt-5">
          <button className="bg-primary flex items-center justify-center gap-2 cursor-pointer w-full text-white  text-sm py-3 rounded-full">
            <IconLogin/>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export { Sidebar };

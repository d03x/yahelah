import NavLink from "@/features/navbar/components/NavLink";
import { IconBell, IconCompass, IconHome3, IconInbox, IconLogin, IconPeople, IconSettings } from "@intentui/icons";

export default function SideNav() {
  return (
    <div className="w-full  flex flex-col">
      <div className="mb-4 px-4">
        <span className="text-2xl font-bold">YAELLAH</span>
      </div>

      <div className="flex flex-col">
        <NavLink className="rounded-l-2xl" href={"/home"} icon={IconHome3}>
          Home
        </NavLink>
        <NavLink className="rounded-l-2xl" href={"/home"} icon={IconPeople}>
          Komunitas
        </NavLink>
        <NavLink className="rounded-l-2xl" href={"/home"} icon={IconCompass}>
          Explore
        </NavLink>
        <NavLink className="rounded-l-2xl" href={"/topik"} icon={IconInbox}>
          Kotak Masuk
        </NavLink>
        <NavLink className="rounded-l-2xl" href={"/notifikasi"} icon={IconBell}>
          Notifikasi
        </NavLink>
        <NavLink
          className="rounded-l-2xl"
          href={"/trending"}
          icon={IconSettings}
        >
          Pengaturan
        </NavLink>
        <NavLink className="rounded-l-2xl" href={"/a"} icon={IconSettings}>
          Theme
        </NavLink>
      </div>

      <div className="pr-6 mt-5">
        <button className="bg-primary flex items-center justify-center gap-2 cursor-pointer w-full text-white  text-sm py-3 rounded-full">
          <IconLogin />
          Login
        </button>
      </div>
    </div>
  );
}

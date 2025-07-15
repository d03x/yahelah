"use client";
import { Avatar, Button } from "@/components";
import { cn } from "@/lib/utils";
import {
  IconDateTime,
  IconHamburger,
  IconPencilBox,
  IconPencilBoxFill,
  IconPerson,
  IconRefresh,
  IconSearch,
  IconUpload,
} from "@intentui/icons";
import { NavRight } from "./NavRight";
import Link from "next/link";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <nav className={cn("h-[var(--navbar-height)] sticky top-0 bg-white border-b")}>
      <div className="container mx-auto h-full flex items-center justify-start">
        <div className="select-none cursor-none pointer-events-none">
          <Link href={"/"} className="text-lg font-semibold text-primary">
            {" "}
            YAALEAH
          </Link>
        </div>
        <div className="ml-9 flex items-center">
          <NavLink href="?fresh" icon={IconRefresh}>
            Fresh
          </NavLink>
          <NavLink href="?fresh" icon={IconPerson}>
            Untuk Kamu
          </NavLink>
          <NavLink href="?fresh" icon={IconUpload}>
            Lagi Viral
          </NavLink>
        </div>
        <div className="ml-auto">
          <div className="flex gap-3 items-center">
            <NavRight />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

"use client";
import { cn } from "@/lib/utils";

import { NavRight } from "./NavRight";
import Link from "next/link";

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

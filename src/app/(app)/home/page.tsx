import { Navbar } from "@/features/navbar";
import { Metadata } from "next";
import * as Nav from "@components/navbar";
import {
  IconControl,
  IconFilter,
  IconFilter2,
  IconListBullets,
} from "@intentui/icons";
import NavLink from "@/features/navbar/components/NavLink";
export default function Page() {
  return (
    <>
      <Nav.Root>
        <Nav.Inner>
          <NavLink className="h-full  items-center justify-center text-sm" href="Populer">Po234puler</NavLink>
          <NavLink className="h-full  items-center justify-center text-sm" href="Populer">Untuk kamu</NavLink>
          <NavLink className="h-full  items-center justify-center text-sm" href="Populer">Viral</NavLink>
          <NavLink className="h-full  items-center justify-center text-sm" href="Populer">#yahelah</NavLink>
        </Nav.Inner>
        <Nav.Outer>
          <IconListBullets className="h-5 w-5" />
        </Nav.Outer>
      </Nav.Root>
      <NavLink href="Populer">Populer</NavLink>
    </>
  );
}
export const metadata: Metadata = {
  title: "Home",
};

import { Metadata } from "next";
import * as Nav from "@components/navbar";
import { IconHamburger, IconListBullets } from "@intentui/icons";
import NavLink from "@/features/navbar/components/NavLink";
import CreatePost from "@/features/create-post/components/CreatePost";
export default function Page() {
  return (
    <>
      <Nav.Root>
        <Nav.Inner>
           <div className="px-3">
             Home
           </div>
        </Nav.Inner>
        <Nav.Outer>
          <IconListBullets className="h-5 w-5" />
        </Nav.Outer>
      </Nav.Root>
      <div className="">
        <CreatePost />
      </div>
    </>
  );
}
export const metadata: Metadata = {
  title: "Home",
};

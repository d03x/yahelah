"use client";
import {
  IconBrandThreads,
  IconHamburger,
  IconLayoutAlignBottom,
  IconListBullets,
  IconLogout,
  IconPaper,
  IconPerson,
} from "@intentui/icons";
import { Posts } from "@/features/posts";
import { Navbar } from "@/components";
import { Menu } from "@/components/menu";
export default function Client() {
  return (
    <>
      <Navbar>
        <Navbar.Back />
        <Navbar.Center>
          <IconBrandThreads className="w-9 h-9" />
        </Navbar.Center>
        <Navbar.Right>
          <Menu>
            <Menu.Trigger>
              <svg
                className="text-content-tint"
                xmlns="http://www.w3.org/2000/svg"
                width={30}
                height={30}
                viewBox="-5 -7 24 24"
              >
                <path
                  fill="currentColor"
                  d="M1 0h5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2m7 8h5a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2M1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2"
                ></path>
              </svg>
            </Menu.Trigger>
            <Menu.Body>
              <Menu.Item icon={IconLayoutAlignBottom}>Apparance</Menu.Item>
              <Menu.Item icon={IconPerson}>Account Setting</Menu.Item>
              <Menu.Item icon={IconPaper}>Feeds</Menu.Item>
              <Menu.Separator/>
              <Menu.Item icon={IconLogout}>Logout</Menu.Item>
            </Menu.Body>
          </Menu>
        </Navbar.Right>
      </Navbar>
      <div className="mt-2">
        {/* <CreatePost /> */}
        <Posts />
      </div>
    </>
  );
}

import {
  IconCirclePlus,
  IconHeart,
  IconHome,
  IconPeople,
  IconSearch,
} from "@intentui/icons";
import NavLink from "./NavLink";

const MobileNav = () => {
  return (
    <div className="bg-navbar px-2 md:hidden flex items-center border-t border-primary-column-outline w-full fixed bottom-0 h-14 z-50">
      <NavLink
        className="flex-1 py-2 rounded-full flex items-center justify-center"
        icon={IconHome}
        href={"home"}
      >
        HOme
      </NavLink>
      <NavLink
        className="flex-1 py-2 rounded-full flex items-center justify-center"
        icon={IconSearch}
        href={"home"}
      >
        HOme
      </NavLink>
      <NavLink
        className="flex-1 py-2 rounded-full flex items-center justify-center"
        icon={IconCirclePlus}
        href={"home"}
      >
        HOme
      </NavLink>
      <NavLink
        className="flex-1 py-2 rounded-full flex items-center justify-center"
        icon={IconHeart}
        href={"home"}
      >
        HOme
      </NavLink>
      <NavLink
        className="flex-1 py-2 rounded-full flex items-center justify-center"
        icon={IconPeople}
        href={"home"}
      >
        HOme
      </NavLink>
    </div>
  );
};
export { MobileNav };

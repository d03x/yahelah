import { IconArrowLeft } from "@intentui/icons";
import { ReactNode } from "react";

const Navbar = ({ children }: { children: ReactNode }) => {
  return (
    <nav className="navbar border-b border-primary-column-outline bg-navbar/95 backdrop-blur-xs h-14 flex items-center sticky top-0">
      {children}
    </nav>
  );
};

const Center = (props: { children: ReactNode }) => {
  return (
    <div className="mx-auto flex-1 items-center flex justify-center">
      {props.children}
    </div>
  );
};
const Right = (props: { children: ReactNode }) => {
  return (
    <div className="ml-auto px-3 items-center flex justify-center">
      {props.children}
    </div>
  );
};

const Back = () => {
  return (
    <div className="h-full px-4 flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={26}
        height={26}
        viewBox="0 0 512 512"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={48}
          d="M244 400L100 256l144-144M120 256h292"
        ></path>
      </svg>
    </div>
  );
};
Navbar.Center = Center;
Navbar.Back = Back;
Navbar.Right = Right;
export { Navbar };

"use client";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
const Navbar = ({ children }: { children: ReactNode }) => {
  return (
    <nav className="navbar border-b  py-2 px-2 border-primary-column-outline bg-navbar/95 backdrop-blur-xs h-14 flex items-center sticky top-0">
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
    <div className="ml-auto relative px-3 items-center flex justify-center">
      {props.children}
    </div>
  );
};

const Back = () => {
  return (
    <button className="h-full cursor-pointer aspect-square active:bg-pressed-background px-1 active:scale-95 hover:bg-hovered-background rounded-full flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
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
      
    </button>
  );
};
Navbar.Center = Center;
Navbar.Back = Back;
Navbar.Right = Right;
export { Navbar };

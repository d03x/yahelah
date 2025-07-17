import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ComponentChildren = {
  hideOnScroll?: boolean;
  children: ReactNode;
};

export const Root = (props: ComponentChildren) => {
  return (
    <div
      className={cn(
        "h-(--navbar-height)  bg-navbar sticky top-0  border-b border-sidebar-border flex items-center"
      )}
    >
      {props.children}
    </div>
  );
};

export const Inner = (props: ComponentChildren) => {
  return (
    <div className={cn("h-full flex-1 flex items-center")}>
      {props.children}
    </div>
  );
};
export const Outer = (props: ComponentChildren) => {
  return (
    <div className={cn("ml-auto h-full flex items-center px-3")}>
      {props.children}
    </div>
  );
};

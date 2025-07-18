"use client";
import { AnimatePresence } from "motion/react";
import React, {
  ComponentType,
  ReactNode,
  RefObject,
  SVGProps,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { motion } from "motion/react";
import { createContext } from "react";
import { cn } from "@/lib/utils";
import { createPortal } from "react-dom";
export const MenuContext = createContext<{
  toggle: () => void;
  isMenuOpen: boolean;
  showAbove: boolean;
  position: {
    top: number;
    left: number;
  };
  menuBodyRef?: RefObject<HTMLDivElement | null>;
  triggerRef?: RefObject<HTMLButtonElement | null>;
}>({
  toggle: () => {},
  isMenuOpen: false,
  showAbove: false,
  position: {
    top: 0,
    left: 0,
  },
});

const Menu = (props: { children: ReactNode }) => {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuBodyRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{
    top: number;
    left: number;
  }>({
    top: 0,
    left: 0,
  });
  const [showAbove, setShowAbove] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggle = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(menuBodyRef.current);
  };

  useLayoutEffect(() => {
    if (!isMenuOpen || !triggerRef.current || !menuBodyRef.current) return;
    const setMenuPosition = () => {
      if (triggerRef.current && menuBodyRef.current) {
        const triggerButton = triggerRef.current;
        const buttonRect = triggerButton.getBoundingClientRect();
        console.log(buttonRect.right);

        const menuBody = menuBodyRef.current;

        const menuWidth = menuBody.offsetWidth;
        const menuHeight = menuBody.offsetHeight;

        const spaceAbove = buttonRect.top;

        const showAbove = spaceAbove > menuHeight;
        const placeAbove = spaceAbove > menuHeight + 16;
        setShowAbove(placeAbove);
        const top = showAbove
          ? buttonRect.top + window.scrollY - menuHeight - 2
          : buttonRect.bottom + window.scrollY + 1;
        const left = buttonRect.right + window.scrollX - menuWidth - 5;
        setPosition({
          top,
          left,
        });
      }
    };
    let rafId: number;

    const onscrollOrResize = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(setMenuPosition);
    };

    window.addEventListener("resize", onscrollOrResize);
    window.addEventListener("scroll", onscrollOrResize);
    rafId = requestAnimationFrame(setMenuPosition);
    return () => {
      window.removeEventListener("resize", onscrollOrResize);
      window.removeEventListener("scroll", onscrollOrResize);
      cancelAnimationFrame(rafId);
    };
  }, [triggerRef, isMenuOpen]);
  useEffect(() => {
    function setOutside(e: MouseEvent) {
      if (
        menuBodyRef.current &&
        !menuBodyRef.current.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    }
    window.addEventListener("click", setOutside);

    if (isMenuOpen) {
      window.document.body.style.overflowY = "hidden";
    }
    return () => {
      if (isMenuOpen) {
        window.document.body.style.overflowY = "auto";
      }
      window.removeEventListener("click", setOutside);
    };
  }, [isMenuOpen]);
  return (
    <MenuContext.Provider
      value={{
        showAbove,
        position,
        toggle,
        isMenuOpen,
        triggerRef,
        menuBodyRef,
      }}
    >
      {props.children}
    </MenuContext.Provider>
  );
};

const Trigger = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const { toggle, triggerRef } = React.useContext(MenuContext);
  return (
    <button
      className={cn(className, "cursor-pointer")}
      ref={triggerRef}
      onClick={toggle}
    >
      {children}
    </button>
  );
};

const Body = ({ children }: { children: ReactNode }) => {
  const { position, triggerRef, showAbove, isMenuOpen, menuBodyRef } =
    React.useContext(MenuContext);

  return createPortal(
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, transformOrigin: showAbove ? "bottom right"  : "top right" }}
          exit={{ opacity: 0, scale: 0.95, transformOrigin: showAbove ? "top right"  : "bottom right" }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.15,
              ease: [0.42, 0, 0.58, 1],
            },
          }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="absolute z-10 py-2 shadow-panel-content bg-elevated-tertiary-background/90 backdrop-blur-xs border border-primary-column-outline max-w-md rounded-lg"
          ref={menuBodyRef}
          style={{
            transformOrigin: showAbove ?  "bottom right" : "top right",
            top: `${position.top}px`,
            left: `${position.left}px`,
          }}
        >
          <div className="flex flex-col">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};
const MenuSeparator = () => {
  return <div className="w-full h-[1px] bg-primary-column-outline"></div>;
};
const MenuItem = ({
  children,
  icon: Icon,
}: {
  children: ReactNode;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
}) => {
  return (
    <button className="w-full text-xs group font-semibold gap-x-6 active:bg-pressed-background hover:bg-hovered-background flex items-center justify-start space-x-2 cursor-pointer px-4 py-2">
      <span className="group-active:scale-95 transition-all duration-75">
        {children}
      </span>
      {Icon && (
        <Icon className="ml-auto w-5 h-5 aspect-square group-active:scale-95 transition-all duration-75" />
      )}
    </button>
  );
};
Menu.Item = MenuItem;
Menu.Separator = MenuSeparator;
Menu.Trigger = Trigger;
Menu.Body = Body;
export { Menu };

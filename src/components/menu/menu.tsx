"use client";
import { AnimatePresence } from "motion/react";
import React, {
  ReactNode,
  RefObject,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { motion } from "motion/react";
import { createContext } from "react";
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

        const menuBody = menuBodyRef.current;

        const menuWidth = menuBody.offsetWidth;
        const menuHeight = menuBody.offsetHeight;

        const spaceAbove = buttonRect.top;

        const showAbove = spaceAbove > menuHeight;
        const placeAbove = spaceAbove > menuHeight + 16;
        setShowAbove(placeAbove);
        const top = showAbove
          ? buttonRect.top + window.scrollY - menuHeight - 8
          : buttonRect.bottom + window.scrollY + 8;
        const left = buttonRect.right + window.scrollX - menuWidth - 5;
        setPosition({
          top,
          left,
        });
      }
    };

    window.addEventListener("resize", setMenuPosition);
    window.addEventListener("scroll", setMenuPosition);
    const id = requestAnimationFrame(setMenuPosition);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", setMenuPosition);
      window.removeEventListener("scroll", setMenuPosition);
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
    return () => {
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

const Trigger = ({ children }: { children: ReactNode }) => {
  const { toggle, triggerRef } = React.useContext(MenuContext);
  return (
    <button
      className="flex-1 flex items-center justify-center cursor-pointer hover:bg-hovered-background active:bg-pressed-background"
      ref={triggerRef}
      onClick={toggle}
    >
      {children}
    </button>
  );
};
const Body = ({ children }: { children: ReactNode }) => {
  const { position, showAbove, isMenuOpen, menuBodyRef } =
    React.useContext(MenuContext);

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: showAbove ? -8 : 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: showAbove ? -8 : 8 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="absolute py-2 shadow-panel-content bg-elevated-tertiary-background border border-primary-column-outline max-w-xs rounded-lg overflow-hidden"
          ref={menuBodyRef}
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
          }}
        >
          <div className="flex flex-col">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const MenuItem = ({ children }: { children: ReactNode }) => {
  return (
    <button className="w-full text-sm active:bg-pressed-background hover:bg-hovered-background flex items-center justify-start space-x-2 cursor-pointer px-3 py-2">
      {children}s
    </button>
  );
};
Menu.Item = MenuItem;
Menu.Trigger = Trigger;
Menu.Body = Body;
export { Menu };

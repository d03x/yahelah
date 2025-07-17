"use client";
import { cn } from "@/lib/utils";
import { faker } from "@faker-js/faker";
import { IconVerifiedFill } from "@intentui/icons";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import {
  FunctionComponent,
  ReactNode,
  SVGProps,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
type WithChildren = {
  children: ReactNode;
};
const Post = (props: WithChildren) => {
  return <Root>{props.children}</Root>;
};
type HeaderProps = {
  author: {
    name: string;
    nickname?: string;
    isVerifiedBadge?: boolean;
  };
};

const Header = (props: HeaderProps) => {
  return (
    <header className="flex items-center pb-2 pt-3 px-3">
      <div className="flex items-start">
        <div className="h-9 object-cover w-9 ring-2 ring-secondary bg-gray-50 overflow-hidden aspect-square rounded-full">
          <Image
            className="rounded-full aspect-square object-cover"
            width={36}
            height={36}
            src={faker.image.avatarGitHub()}
            alt="avatar"
          />
        </div>
        <div className="ml-2  flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-content-tint-strong font-semibold text-name  flex items-center justify-start">
              {props.author.name}
              {props.author.isVerifiedBadge && (
                <IconVerifiedFill className="ml-1 text-verified h-4 w-4" />
              )}{" "}
            </span>
            <button className="text-xs font-semibold text-content-blue">
              Follow
            </button>
          </div>
          <div className="text-nickname  flex items-center justify-start gap-1 text-content-fg-tertiary">
            <span>@{props.author.nickname}</span>
            &bull; <span>18h</span>
          </div>
        </div>
      </div>
    </header>
  );
};
const Body = (props: WithChildren) => {
  return <div className="px-3 mb-2">{props.children}</div>;
};

const Action = ({
  count,
  onClick,
  icon: Icon,
}: {
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  count?: number;
  onClick?: () => void;
}) => {
  return (
    <>
      <button
        onClick={onClick}
        className="cursor-pointer bg-elevated-tertiary-background group py-3 h-full flex items-center justify-center flex-1"
      >
        <Icon className="w-5 h-5 group-hover:text-content-red aspect-square" />
        {count && (
          <span className="lg:text-sm group-hover:text-content-red text-xs ml-1 text-muted-foreground font-semibold">
            {count}
          </span>
        )}
      </button>
    </>
  );
};

const Footer = (props: { children: ReactNode }) => {
  return (
    <div className="flex border-t border-content-panel-border ">
      <div className="flex-1">
        <div className="flex items-center">{props.children}</div>
      </div>
    </div>
  );
};

const Root = (props: WithChildren) => {
  return (
    <div
      className={cn(
        "overflow-hidden  lg:shadow-[var(--content-panel-shadow)] border-content-panel-border border-b lg:border-1  lg:rounded-lg bg-content-panel"
      )}
    >
      {props.children}
    </div>
  );
};

const ActionMenu = (props: WithChildren) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  function menuToggleOpen() {
    setMenuOpen(!menuOpen);
  }

  const [menuPosition, setMenuPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function updatePosition() {
      if (ref.current || ref.current) {
        const clientRef = ref.current?.getBoundingClientRect();

        const menuHeight = menuRef.current?.offsetHeight as number;
        const menuWidth = menuRef.current?.offsetWidth as number;

        const spaceAbove = clientRef.top;

        const showAbove = spaceAbove > menuHeight;

        const top = showAbove
          ? clientRef.top + window.scrollY - menuHeight - 8
          : clientRef.bottom + window.scrollY + 8;
        const left = clientRef.right + window.scrollX - menuWidth - 5; // pojok kanan tombol
        setMenuPosition({
          top,
          left,
        });
      }
    }

    if (menuOpen) {
      updatePosition();
    }
    function updateHideAndShow(ev: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(ev.target as Node) &&
        ref.current &&
        !ref.current.contains(ev.target as Node)
      ) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      window.document.body.classList.add("overflow-hidden");
    }
    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition);
    window.addEventListener("click", updateHideAndShow);
    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("click", updateHideAndShow);
      if (menuOpen) {
        window.document.body.classList.remove("overflow-hidden");
      }
    };
  }, [ref, menuRef, menuOpen]);

  return (
    <>
      <button onClick={menuToggleOpen} ref={ref} className="flex-1 flex w-full">
        {" "}
        {props.children}
      </button>
      <AnimatePresence>
        {menuPosition && menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            ref={menuRef}
            className="absolute max-w-[200px] rounded-lg p-3 z-20 right-0 bg-content-panel border border-content-panel-border"
            style={{
              top: `${menuPosition?.top}px`,
              left: `${menuPosition?.left}px`,
            }}
          >
            <div>
              <a href="">Laporkan User</a>
            </div>
            <div>
              <a href="">Laporkan User</a>
            </div>
            <div>
              <a href="">Laporkan User</a>
            </div>
            <div>
              <a href="">Laporkan User</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

Post.Header = Header;
Post.Footer = Footer;
Post.Body = Body;
Post.Action = Action;
Post.ActionMenu = ActionMenu;
export { Post };

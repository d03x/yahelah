import "client-only";
import { IconGlobe, IconSettings, IconVideoCam } from "@intentui/icons";
import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { usePathname, useRouter } from "next/navigation";
const Header = ({ children }: { children?: ReactNode }) => {
  return (
    <header className="flex border-modal-border items-center justify-between px-2 lg:px-4 py-2 border-b">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 bg-gray-500 rounded-sm"></div>
        <div className="flex flex-col">
          <span className="font-semibold">Dadan Hidayat</span>
          <div className="text-xs flex items-center gap-1">
            <IconGlobe />
            <span>Public</span>
          </div>
        </div>
      </div>
      <IconSettings className="w-6 h-6" />
    </header>
  );
};

const Footer = ({ children }: { children?: ReactNode }) => {
  const navigation = useRouter();
  function back() {
    if (confirm("Apakah yakin?")) {
      navigation.back();
    }
  }

  return (
    <footer className="mt-auto flex py-3 px-3 border-modal-border border-t">
      <button
        onClick={back}
        className="bg-muted font-semibold px-8 py-2 rounded-full text-sm cursor-pointer"
      >
        BACK
      </button>
      <button className="bg-primary font-semibold  text-white  ml-auto px-8 py-2 rounded-full text-sm cursor-pointer">
        Posting Sekarang
      </button>
    </footer>
  );
};
const Body = ({ children }: { children: ReactNode }) => {
  return (
    <div className="overflow-auto max-h-[300px] min-h-[200px]">{children}</div>
  );
};
const Root = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  useEffect(() => {
    const isModalRoute = pathname?.startsWith("/new/");
    if (isModalRoute) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [pathname]);

  return createPortal(
    <div role="modal" className="w-full bg-elevated-tertiary-background/5 backdrop-blur-xs  h-full fixed inset-0">
      <div className="lg:p-5 max-w-xl mx-auto w-full h-full z-50 fixed inset-0">
        <div className="bg-modal/90 backdrop-blur-xs flex-col text-popover-foreground flex border border-modal-border w-full lg:rounded-lg overflow-hidden">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};

export { Body, Header, Footer, Root };

import "client-only";
import { IconSettings } from "@intentui/icons";
import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
const Header = ({ children }: { children?: ReactNode }) => {
  return (
    <header className="flex items-center justify-between px-4 py-3 border-b">
      <div className="flex items-start gap-2">
        <div className="h-8 w-8 bg-gray-500 rounded-full"></div>
        <div className="flex flex-col">
          <span className="font-semibold text-muted-foreground">
            Dadan Hidayat
          </span>
          <span className="text-xs">Public</span>
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
    <footer className="mt-auto flex py-3 px-3 border-t">
      <button
        onClick={back}
        className="bg-muted text-muted-foreground font-semibold px-8 py-2 rounded-full text-sm cursor-pointer"
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
    <div
      contentEditable
      className="p-2 overflow-auto max-h-[300px] min-h-[200px]"
    >
      {children}
    </div>
  );
};
const Root = ({ children }: { children: ReactNode }) => {
  return createPortal(
    <div className="w-full  bg-secondary/65 h-full fixed inset-0">
      <div className="p-5 max-w-xl mx-auto w-full h-full z-50 fixed inset-0">
        <div className="bg-white flex-col flex border border-border w-full rounded-lg overflow-hidden">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};

export { Body, Header, Footer, Root };

import { ReactNode } from "react";
export function Content({ children }: { children: ReactNode }) {
  return <div className="content">{children}</div>;
}
export function Aside({ children }: { children: ReactNode }) {
  return <div className="hidden lg:block">{children}</div>;
}
export function Root({
  children,
  withAside = true,
}: {
  children: ReactNode;
  withAside?: boolean;
}) {
  if (withAside) {
    return (
      <div className="lg:grid relative lg:grid-cols-[1fr_var(--aside-width)]">
        {children}
      </div>
    );
  }
  return <div className="grid grid-cols-1">{children}</div>;
}

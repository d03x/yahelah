import { MobileNav } from "@/features/navbar";
import { Sidebar } from "@/features/sidebar";
import ErrorBoundaryProvider from "@/provider/ErrorBoundaryProvider";
import { ReactNode } from "react";
const AppLayout = ({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) => {
  return (
    <div>
      <div className="2xl:container mx-auto">
        <div className="sm:grid min-h-screen sm:grid-cols-(--layout-grid)">
          <ErrorBoundaryProvider>
            <Sidebar />
          </ErrorBoundaryProvider>
          <ErrorBoundaryProvider>
            <main>{children}</main>
            {modal}
            <MobileNav />
          </ErrorBoundaryProvider>
        </div>
      </div>
    </div>
  );
};
export default AppLayout;

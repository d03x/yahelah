import { Navbar } from "@/features/navbar";
import { Sidebar } from "@/features/sidebar";
import ErrorBoundaryProvider from "@/provider/ErrorBoundaryProvider";
import { ReactNode } from "react";
const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className="2xl:container mx-auto">
        <div className="grid min-h-screen grid-cols-(--layout-grid)">
          <ErrorBoundaryProvider>
            <Sidebar />
          </ErrorBoundaryProvider>
          <ErrorBoundaryProvider>
            <main>{children}</main>
          </ErrorBoundaryProvider>
        </div>
      </div>
    </div>
  );
};
export default AppLayout;

import Providers from "./Provider";
import { TooltipProvider } from "../ui/tooltip";
import SidebarMenu from "./SidebarMenu";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function MainLayout() {

  return (
    <Providers>
      <TooltipProvider>
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
          <SidebarMenu />
          
          <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <main className="grid items-start gap-4 p-4">
              <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
              </Suspense>
            </main>
          </div>
        </div>
      </TooltipProvider>
    </Providers>
  );
}

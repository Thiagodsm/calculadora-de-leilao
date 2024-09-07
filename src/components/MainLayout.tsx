import { Outlet } from "react-router-dom";
import Providers from "./Provider";
import Navbar from "./Navbar";
import SidebarMenu from "./Sidebar";
import { Suspense } from "react";

export default function MainLayout(){
  return (
    <Providers>
      <div>
        <Navbar />
        <div className="flex">
          <div className="hidden md:block">
            <SidebarMenu />
          </div>                   
          <main className="w-full p-4">
            <Suspense>
              <Outlet />
            </Suspense>
          </main>
        </div>
      </div>
    </Providers>
  );
}

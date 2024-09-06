import { Outlet } from "react-router-dom";
import Providers from "./Provider";
import Navbar from "./Navbar";
import SidebarMenu from "./Sidebar";

export default function MainLayout(){
  return (
    <Providers>
      <div>
        <Navbar />
        <div className="flex">
          <SidebarMenu />
          <main className="flex-grow p-4">
            <Outlet />
          </main>
        </div>
      </div>
    </Providers>
  );
}

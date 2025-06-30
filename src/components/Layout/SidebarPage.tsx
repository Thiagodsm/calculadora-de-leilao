import { AppSidebar } from "./AppSidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "../ui/theme-provider";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function SidebarPage() {
  const { theme, setTheme } = useTheme();

  const onDarkModeToggle = (e: boolean) => {
    setTheme(e ? "dark" : "light");
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col flex-1">
        <header className="flex h-16 shrink-0 items-center justify-between gap-4 border-b px-4">
          <SidebarTrigger />
          
          <Link to="/" className="flex items-center gap-2">
            <img 
              src={theme === "dark" ? '/open-source.svg': '/open-source-filled.svg'}
              alt="Logo"
              className="h-10 w-auto max-w-[120px] object-contain"
            />
            <span className="font-mono font-bold text-lg sm:inline md:text-xl">T.SM</span>
          </Link>
          <DarkModeSwitch
            className="w-7 h-7"
            checked={theme === "dark"}
            onChange={onDarkModeToggle}
            size={20}
          />
        </header>

        <div>
          <div className="flex flex-1 flex-col gap-4 p-4 overflow-auto">
            <Outlet />
          </div>
          <Footer />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
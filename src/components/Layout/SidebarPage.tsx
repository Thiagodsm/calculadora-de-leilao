import { AppSidebar } from "./AppSidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "../ui/theme-provider";
import { Outlet } from "react-router-dom";

export default function SidebarPage() {
  const { theme, setTheme } = useTheme();

  const onDarkModeToggle = (e: boolean) => {
    setTheme(e ? "dark" : "light");
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between gap-4 border-b px-4">
          <SidebarTrigger />
          <DarkModeSwitch
            className="w-7 h-7"
            checked={theme === "dark"}
            onChange={onDarkModeToggle}
            size={20}
          />
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
import { ThemeProvider } from "./ui/theme-provider";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <div className="flex-1 p-4">
                <Outlet />
            </div>
        </div>
    </ThemeProvider>
  )
}

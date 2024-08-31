import { useStore } from "zustand"
import { useSidebarToogle } from "../hooks/use-sidebar-toggle"
import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
import SidebarToggle from "./SidebarToggle";
import { Link } from "react-router-dom";
import { PanelsTopLeft } from "lucide-react";
import {Menu} from "./Menu";

export default function Sidebar() {
    const sidebar = useStore(useSidebarToogle, (state) => state);

    if(!sidebar) return null;

  return (
    <aside
        className={cn(
            "fixed top-0 left-0 z-20 h-screen -translate-x-full lg:translate-x-0 translate-[width] ease-in-out duration-300",
            sidebar?.isOpen === false ? "w-[90px]" : "w-72")}
    >
        <SidebarToggle isOpen={sidebar?.isOpen} setIsOpen={sidebar?.setIsOpen} />
        <div className="relative h-full flex-col px-3 py-4 overflow-y-auto shadow-md dark:shadow-zinc-800">
            <Button
                className={cn(
                    "transition-transform ease-in-out duration-300 mb-1",
                    sidebar?.isOpen === false ? "translate-x-1": "translate-x-0"
                )}
                variant="link"
                asChild
            >          
                <Link to="/home" className="flex items-center gap-2">
                    <PanelsTopLeft className="w-6 h-6 mr-1" />
                    <h1
                        className={cn("font-bold text-lg whitespace-nowrap translation-[trnasforma, opacity, display] ease-in-out duration-300",
                            sidebar?.isOpen === false
                            ? "-translate-x-96 opacity-0 hidden"
                            : "translate-x-0 opacity-100"
                        )}
                    >
                        Calculajá
                    </h1>
                </Link>
            </Button>
            <Menu isOpen={sidebar?.isOpen} />
        </div>

    </aside>
  )
}

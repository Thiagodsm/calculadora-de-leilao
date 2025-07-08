import Providers from "./Provider";
import { TooltipProvider } from "../ui/tooltip";
import SidebarPage from "./SidebarPage";
import { Toaster } from "sonner";

export default function MainLayout() {

  return (
    <Providers>
      <TooltipProvider>
          <div className="flex min-h-screen w-full flex-col">
            <SidebarPage />
            <Toaster richColors position="top-right" />
          </div>
      </TooltipProvider>
    </Providers>
  );
}
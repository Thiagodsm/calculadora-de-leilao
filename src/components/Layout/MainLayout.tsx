import Providers from "./Provider";
import { TooltipProvider } from "../ui/tooltip";
import SidebarPage from "./SidebarPage";

export default function MainLayout() {

  return (
    <Providers>
      <TooltipProvider>
          <div className="flex min-h-screen w-full flex-col">
            <SidebarPage />
          </div>
      </TooltipProvider>
    </Providers>
  );
}
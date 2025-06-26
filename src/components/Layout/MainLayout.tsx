import Providers from "./Provider";
import { TooltipProvider } from "../ui/tooltip";
import Footer from "./Footer";
import SidebarPage from "./SidebarPage";

export default function MainLayout() {

  return (
    <Providers>
      <TooltipProvider>
          <div className="flex min-h-screen w-full flex-col">
            <div className="flex flex-1 flex-col">
              <SidebarPage />
            </div>
            <Footer />
          </div>
      </TooltipProvider>
    </Providers>
  );
}
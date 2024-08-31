import { MenuIcon, PanelsTopLeft } from "lucide-react";

import { Button } from "../components/ui/button";
import { Menu } from "./Menu";
import {
  Sheet,
  SheetHeader,
  SheetContent,
  SheetTrigger,
  SheetTitle
} from "../components/ui/sheet";
import { Link } from "react-router-dom";

export default function SheetMenu() {
  return (
    <Sheet>
        <SheetTrigger className="lg:hidden" asChild>
            <Button className="h-8" variant="outline" size="icon">
                <MenuIcon size={20} />
            </Button>
        </SheetTrigger>
        <SheetContent>
            <SheetHeader>
                <Button
                    className="sm:w-72 justify-center items-center pb-2 pt-1"
                    variant="link"
                    asChild
                >
                    <Link to="/home" className="flex items-center gap-2">
                        <PanelsTopLeft className="w-6 h-6 mr-1" />
                        <SheetTitle className="font-bold text-lg">Calculaja</SheetTitle>
                    </Link>
                </Button>
            </SheetHeader>
            <Menu isOpen />
        </SheetContent>
    </Sheet>
  )
}

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../components/ui/button";
//import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "../components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "../components/ui/dropdown-menu";
import { ModeToggle } from "./ui/mode-toggle";
import { Menu } from "lucide-react";
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
import { Menu as MenuIcon } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log({isMenuOpen});

  return (
    <nav className="p-4 flex items-center justify-between">
      <div className="text-xl font-bold">Calculajá</div>

      {/*<div className="hidden md:flex space-x-4">*/}
      <div className="mr-4 hidden gap-2 md:flex">
        <NavLink to="/" className="hover:underline">
          <Button variant="ghost">Home</Button>
        </NavLink>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">Cálculos Financeiros</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <NavLink to="/calculo-datas">Cálculo de Datas</NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <NavLink to="/calcula-poupanca">Cálculo de Poupança</NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <NavLink to="/calcula-porcentagem">Cálculo de Porcentagem</NavLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">Cálculos Trabalhistas</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <NavLink to="/calcula-ferias">Cálculo de Férias</NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <NavLink to="/calcula-fgts">Cálculo de FGTS</NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <NavLink to="/calcula-recisao">Cálculo de Rescisão</NavLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">Cálculos Diversos</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <NavLink to="/calcula-juros">Cálculo de Juros</NavLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <ModeToggle />

      <div className="md:hidden">
        <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="w-6 h-6" />
        </Button>
      </div>
      
      {isMenuOpen && (
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" value="@peduarte" className="col-span-3" />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      )}
    </nav>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipTrigger } from "../components/ui/tooltip";
import { Home, Gavel, PartyPopper, CalendarClock, PanelLeft, Search } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet"; 
import { Input } from "./ui/input";
import { Button } from "../components/ui/button"; 
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"

export default function SidebarMenu() {
  const menus = [
    { label: "Compra a vista", name: "Compra a vista", icon: <Gavel size={20} />, href: "/calcula-compra-imovel-a-vista" },
    { label: "Férias", name: "Férias", icon: <PartyPopper size={20} />, href: "/calcula-ferias" },
    { label: "FGTS", name: "FGTS", icon: <CalendarClock size={20} />, href: "/calcula-fgts" },
  ];

  return (
    <>
      {/* Sidebar for large screens */}
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
        <Link
            to="/"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Home className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          {menus.map((menu) => (
            <Tooltip key={menu.name}>
              <TooltipTrigger asChild>
                <Link
                  to={menu.href}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                >
                  {menu.icon}
                  <span className="sr-only">{menu.label}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">{menu.label}</TooltipContent>
            </Tooltip>
          ))}
        </nav>
      </aside>

      {/* Sheet for small screens */}
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="sm:hidden">
              <PanelLeft className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="sm:max-w-xs">
            <nav className="grid gap-6 text-lg font-medium">
              {menus.map((menu) => (
                <Link
                  key={menu.name}
                  to={menu.href}
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  {menu.icon}
                  {menu.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <div className="relative ml-auto flex-1 md:grow-0">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="overflow-hidden rounded-full"
            >
              <img
                src="https://images.pexels.com/photos/989936/pexels-photo-989936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                width={36}
                height={36}
                alt="Avatar"
                className="overflow-hidden rounded-full"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>


      </header>
      </div>
    </>
  );
}

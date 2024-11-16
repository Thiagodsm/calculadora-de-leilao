import { Link } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Home, Gavel, Briefcase, PanelLeft, Search, Earth, Utensils, MoonStar, ChartLine, CalendarPlus, Coins } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"; 
import { Input } from "../ui/input";
import { Button } from "../ui/button"; 
import { DarkModeSwitch} from 'react-toggle-dark-mode';
import { useTheme } from "../ui/theme-provider";

type Menu = {
  label: string
  name: string
  icon: React.ReactNode,
  href: string
}

export default function SidebarMenu() {
  const menus: Menu[] = [
    {
        label: "Cálculos de Leilão Extrajudicial",
        name: "Calculadora para leilão extrajudicial",
        icon: <Gavel size={15} className="mr-2" />,
        href: "/calculos-leilao-extrajudicial",
    },
    {
      label: "Cálculos Trabalhistas",
      name: "Calculadora para processos trabalhistas",
      icon: <Briefcase size={15} className="mr-2" />,
      href: "/",
    },
    {
        label: "Cálculos Financeiros",
        name: "Calculadora financeira",
        icon: <ChartLine size={15} className="mr-2" />,
        href: "/",
    },
    {
      label: "Cálculos com Datas",
      name: "Calculadora para datas",
      icon: <CalendarPlus size={15} className="mr-2" />,
      href: "/calculos-datas",
    },
    {
      label: "Cálculos de Calorias",
      name: "Calculadora para quantidade de calorias",
      icon: <Utensils size={15} className="mr-2" />,
      href: "/",
    },
    {
      label: "Relógio mundial",
      name: "Horario no mundo",
      icon: <Earth size={15} className="mr-2" />,
      href: "/",
    },
    {
      label: "Fases da lua",
      name: "Lua hoje",
      icon: <MoonStar size={15} className="mr-2" />,
      href: "/",
    },
    {
      label: "Conversão de moedas",
      name: "Converso de moedas",
      icon: <Coins size={15} className="mr-2" />,
      href: "/conversao-moedas",
    },
];

  const {theme, setTheme} = useTheme();

  const onDarkModeToggle = (e: boolean) => {
      setTheme(e ? 'dark' : 'light');
  }

  return (
    <>
      {/* Sidebar for large screens */}
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
          <Tooltip key="home">
            <TooltipTrigger>
            <Link
              to="/"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
            >
              <Home className="h-4 w-4 transition-all group-hover:scale-110" />
              <span className="sr-only">Calculajá</span>
            </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Início</TooltipContent>
          </Tooltip>
        
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
            placeholder="Pesquisar..."
            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
          />
        </div>
        <DarkModeSwitch
                  className='mr-2 w-7 h-7 sm:block'
                  checked={theme === 'dark'}
                  onChange={onDarkModeToggle}
                  size={20} />
      </header>
      </div>
    </>
  );
}

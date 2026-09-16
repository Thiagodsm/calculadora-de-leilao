import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "../ui/sidebar";
import { Gavel, House, Info, BookOpen } from "lucide-react";
import { useTheme } from "../ui/theme-provider";
import { cn } from "../../lib/utils";

type Menu = {
  label: string;
  name: string;
  icon: React.ReactNode;
  href: string;
};

const menus: Menu[] = [
  {
    label: "Início",
    name: "Home",
    icon: <House className="size-4" />,
    href: "/",
  },
  {
    label: "Simulador",
    name: "Simulador",
    icon: <Gavel className="size-4" />,
    href: "/simulador",
  },
  {
    label: "Blog",
    name: "Blog",
    icon: <BookOpen className="size-4" />,
    href: "/blog",
  },
  {
    label: "Sobre",
    name: "About",
    icon: <Info className="size-4" />,
    href: "/sobre",
  },
];

export function AppSidebar({ ...props }) {
  const location = useLocation();
  const { theme } = useTheme();

  return (
    <Sidebar {...props}>
      <SidebarHeader className="border-b pb-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="/" className="flex items-center gap-2">
                <img
                  src={theme === "dark" ? "/open-source.svg" : "/open-source-filled.svg"}
                  alt="Logo T.SM"
                  className="h-8 w-auto object-contain shrink-0"
                />
                <div className="flex flex-col gap-0 leading-none">
                  <span className="font-mono font-bold text-base">T.SM</span>
                  <span className="text-[11px] text-muted-foreground">Calculadora de Leilão</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navegação</SidebarGroupLabel>
          <SidebarMenu>
            {menus.map((item) => {
              const isActive =
                item.href === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(item.href);

              return (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton
                    asChild
                    className={cn(
                      isActive &&
                        "bg-primary/10 text-primary font-medium hover:bg-primary/15 hover:text-primary"
                    )}
                  >
                    <Link to={item.href} className="flex items-center gap-2">
                      {item.icon}
                      {item.label}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t pt-3">
        <p className="text-[10px] text-muted-foreground px-2 leading-relaxed">
          v1.0 · Ferramenta gratuita de simulação
        </p>
      </SidebarFooter>
    </Sidebar>
  );
}

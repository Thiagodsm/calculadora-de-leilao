import { Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "../ui/sidebar";
import { Handshake } from "lucide-react";
import { Gavel, House, Contact} from "lucide-react";

type Menu = {
  label: string
  name: string
  icon: React.ReactNode,
  href: string
}

const menus: Menu[] =[
    {
      label: "Início",
      name: "Home",
      icon: <House size={15} className="mr-2" />,
      href: "/",
    },
    {
      label: "Simulador",
      name: "Simulador",
      icon: <Gavel size={15} className="mr-2" />,
      href: "/simulator",
    },
    {
      label: "Sobre",
      name: "About",
      icon: <Contact size={15} className="mr-2" />,
      href: "/about",
    },
]

export function AppSidebar({ ...props }) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="/">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex size-8 items-center justify-center">
                  <Handshake className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">Calaculadora de leilão</span>
                  <span className="text-xs">versão 1.0</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {menus.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton asChild>
                  <Link to={item.href} className="flex items-center gap-2">
                    {item.icon}
                    {item.label}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  )
}

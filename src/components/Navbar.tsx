// src/components/Navbar.tsx
import { Link } from "lucide-react";
import { Button } from "../components/ui/button"
import { NavigationMenu, NavigationMenuItem } from "../components/ui/navigation-menu"

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold">Minha Calculadora de Datas</div>
        <NavigationMenu>
          <NavigationMenuItem>
            <Button asChild>
                <Link href="#calculadora">Calculadora</Link>
            </Button>
          </NavigationMenuItem>
          <NavigationMenuItem>
          <Button asChild>
                <Link href="#informacoes">Informações</Link>
            </Button>
          </NavigationMenuItem>
          <NavigationMenuItem>
          <Button asChild>
                <Link href="#contato">Contato</Link>
            </Button>
          </NavigationMenuItem>
        </NavigationMenu>
      </nav>
    </header>
  );
};

export default Navbar;

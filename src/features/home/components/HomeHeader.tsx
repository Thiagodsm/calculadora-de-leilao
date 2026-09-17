import { Link } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "../../../components/ui/theme-provider";
import { cn } from "../../../lib/utils";

const navLinks = [
  { label: "Modalidades", href: "#modalidades" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Casos de Sucesso", href: "#casos-sucesso" },
  { label: "Blog", href: "/blog", isRouter: true },
  { label: "Planos", href: "#", disabled: true },
];

export default function HomeHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="flex h-16 items-center justify-between gap-4 px-4">
        {/* Logo — igual ao SidebarPage */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src={theme === "dark" ? "/open-source.svg" : "/open-source-filled.svg"}
            alt="Logo"
            className="h-10 w-auto max-w-[120px] object-contain"
          />
          <span className="font-mono font-bold text-lg sm:inline md:text-xl">T.SM</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          {navLinks.map((link) =>
            link.disabled ? (
              <span
                key={link.label}
                aria-disabled="true"
                className="pointer-events-none text-sm text-muted-foreground opacity-50 cursor-not-allowed"
              >
                {link.label}
              </span>
            ) : link.isRouter ? (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        {/* Direita: CTAs + dark mode toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <Button variant="ghost" disabled>Entrar</Button>
            <Button disabled>Criar Conta Grátis</Button>
          </div>

          <DarkModeSwitch
            className="w-7 h-7"
            checked={theme === "dark"}
            onChange={(checked) => setTheme(checked ? "dark" : "light")}
            size={20}
          />

          {/* Mobile hamburger */}
          <button
            className="flex items-center md:hidden text-muted-foreground hover:text-foreground p-1"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-200",
          menuOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <nav className="flex flex-col gap-2 px-4 pb-4 bg-background border-t">
          {navLinks.map((link) =>
            link.disabled ? (
              <span
                key={link.label}
                aria-disabled="true"
                className="pointer-events-none py-2 text-sm text-muted-foreground opacity-50"
              >
                {link.label}
              </span>
            ) : link.isRouter ? (
              <Link
                key={link.label}
                to={link.href}
                className="py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            )
          )}
          <div className="flex flex-col gap-2 pt-2 border-t">
            <Button variant="ghost" disabled className="w-full justify-start">Entrar</Button>
            <Button disabled className="w-full">Criar Conta Grátis</Button>
          </div>
        </nav>
      </div>
    </header>
  );
}

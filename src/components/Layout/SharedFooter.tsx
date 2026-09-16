import { Link } from "react-router-dom";
import { Linkedin, Github, Instagram } from "lucide-react";
import { Separator } from "../ui/separator";

export default function SharedFooter() {
  return (
    <footer className="border-t bg-muted/40 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-6">
          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Início</Link>
            <Link to="/simulador" className="text-muted-foreground hover:text-foreground transition-colors">Simulador</Link>
            <Link to="/sobre" className="text-muted-foreground hover:text-foreground transition-colors">Sobre</Link>
            <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link>
          </nav>

          {/* Social + copyright */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/thiago-silva-moreira/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Thiagodsm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/thiagodsmoreira/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-muted-foreground text-sm whitespace-nowrap">
              © {new Date().getFullYear()} T.SM. Todos os direitos reservados.
            </p>
          </div>
        </div>

        <Separator className="mb-6" />

        <p className="text-xs text-muted-foreground leading-relaxed">
          A calculadora é uma ferramenta de simulação e suporte à decisão. Não substitui a análise jurídica do edital
          e a due diligence do investidor. Consulte sempre o edital oficial da Caixa para regras e condições específicas.
        </p>
      </div>
    </footer>
  );
}

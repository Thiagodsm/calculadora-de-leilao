import { Separator } from "../../../components/ui/separator";

export default function HomeFooter() {
  return (
    <footer className="border-t bg-muted/40 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="https://www.linkedin.com/in/thiago-silva-moreira/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
            <a href="https://github.com/Thiagodsm" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
            <a href="https://www.instagram.com/thiagodsmoreira/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">Instagram</a>
          </div>
          <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} T.SM. Todos os direitos reservados.</p>
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

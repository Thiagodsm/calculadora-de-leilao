import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-4">
      <h1 className="text-4xl font-bold mb-4">404 - Página não encontrada</h1>
      <p className="text-muted-foreground mb-6">
        A página que você tentou acessar não existe ou foi movida.
      </p>
      <Link
        to="/"
        className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition"
      >
        Voltar para a página inicial
      </Link>
    </div>
  );
}

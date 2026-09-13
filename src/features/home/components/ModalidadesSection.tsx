import ModalidadeCard from "./ModalidadeCard";
import type { ModalidadeCard as ModalidadeCardType } from "../types";

type Props = {
  modalidades: ModalidadeCardType[];
};

export default function ModalidadesSection({ modalidades }: Props) {
  return (
    <section id="modalidades" className="py-20 px-4 md:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Modalidades de Leilão da Caixa</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Entenda as diferenças entre cada modalidade antes de dar seu lance. As últimas três modalidades
            não cobram taxa do leiloeiro do comprador.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {modalidades.map((m) => (
            <ModalidadeCard key={m.ordem} modalidade={m} />
          ))}
        </div>
      </div>
    </section>
  );
}

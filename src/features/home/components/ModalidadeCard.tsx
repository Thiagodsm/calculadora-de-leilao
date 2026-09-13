import { Card, CardContent, CardHeader } from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";
import type { ModalidadeCard as ModalidadeCardType } from "../types";

const ordinals = ["", "1º", "2º", "3º", "4º", "5º"];

type Props = {
  modalidade: ModalidadeCardType;
};

export default function ModalidadeCard({ modalidade }: Props) {
  const isSemTaxa = modalidade.taxaLeiloeiro.startsWith("0%");

  return (
    <Card className="flex flex-col h-full hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <Badge variant="secondary" className="shrink-0">
            {ordinals[modalidade.ordem]}
          </Badge>
          {modalidade.destaque && (
            <Badge className="bg-primary/10 text-primary border-primary/20 shrink-0" variant="outline">
              {modalidade.destaque}
            </Badge>
          )}
        </div>
        <h3 className="font-semibold text-sm leading-tight mt-2">{modalidade.nome}</h3>
      </CardHeader>

      <CardContent className="flex flex-col gap-3 text-xs flex-1">
        <Field label="Lance mínimo" value={modalidade.lanceMinimoBase} />
        <Field label="Taxa do leiloeiro" value={modalidade.taxaLeiloeiro} highlight={isSemTaxa} />
        <Field label="IPTU / Condomínio" value={modalidade.responsavelIptuCond} />
        <Field label="Critério de vencedor" value={modalidade.criterioVencedor} />
      </CardContent>
    </Card>
  );
}

function Field({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div>
      <p className="text-muted-foreground font-medium uppercase tracking-wide text-[10px] mb-0.5">{label}</p>
      <p className={highlight ? "text-primary font-semibold" : ""}>{value}</p>
    </div>
  );
}

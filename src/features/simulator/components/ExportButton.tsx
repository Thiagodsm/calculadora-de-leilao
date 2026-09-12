import { downloadExcel } from "react-export-table-to-excel";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";
import { Button } from "../../../components/ui/button";
import { ReceiptText, FileSpreadsheet, Printer } from "lucide-react";
import { ExportPayload } from "../types/analytics";
import { formatCurrency } from "../utils/formatters";

interface ExportButtonProps {
  payload: ExportPayload | null;
}

export const ExportButton = ({ payload }: ExportButtonProps) =>
{
  const handleExportExcel = () => {
    if (!payload) return;
    const { result, exportedAt } = payload;

    const header = ["Item", "Valor"];
    const body: string[][] = [
      ["Valor de Arrematação", formatCurrency(result.valorArrematacao)],
      ["Valor de Venda", formatCurrency(result.valorVenda)],
      ["Comissão do Leiloeiro", formatCurrency(result.valorComissaoLeiloeiro)],
      ["ITBI", formatCurrency(result.valorITBI)],
      ["Registro do Imóvel", formatCurrency(result.registroImovel)],
      ["Desocupação", formatCurrency(result.valorDesocupacao)],
      ["Reformas", formatCurrency(result.valorReformas)],
      ["Outros Gastos", formatCurrency(result.valorOutrosGastos)],
      ["IPTU Total", formatCurrency(result.totalIptu)],
      ["Condomínio Total", formatCurrency(result.totalCondominio)],
      ["Parcelas Pagas", formatCurrency(result.totalPagoParcelas)],
      ["Total Investido", formatCurrency(result.totalInvestido)],
      ["Comissão Corretor", formatCurrency(result.valorComissaoCorretor)],
      ["Imposto de Renda", formatCurrency(result.valorIR)],
      ["Saldo Devedor", formatCurrency(result.saldoDevedor)],
      ["Lucro Líquido", formatCurrency(result.lucroLiquido)],
      ["ROI", `${result.roi.toFixed(2)}%`],
      ...(result.roe !== null ? [["ROE", `${result.roe.toFixed(2)}%`]] : []),
    ];

    downloadExcel({
      fileName: `simulacao-leilao-${exportedAt}`,
      sheet: "Simulação",
      tablePayload: { header, body },
    });
  };

  const handleExportExcelParcelas = () => {
    if (!payload || payload.parcelas.length === 0) return;
    const { parcelas, exportedAt } = payload;

    const header = ["#", "Parcela", "Juros", "Amortização", "Saldo Devedor"];
    const body = parcelas.map((p) => [
      p.numero.toString(),
      formatCurrency(p.valor),
      formatCurrency(p.juros ?? 0),
      formatCurrency(p.amortizacao ?? 0),
      formatCurrency(p.saldoDevedor ?? 0),
    ]);

    downloadExcel({
      fileName: `parcelas-${exportedAt}`,
      sheet: "Parcelas",
      tablePayload: { header, body },
    });
  };

  const handleExportPdf = () => {
    window.print();
  };

  const hasParcelas = (payload?.parcelas?.length ?? 0) > 0;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" disabled={!payload} className="gap-2">
          <ReceiptText className="h-4 w-4" />
          Exportar
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={handleExportExcel} className="gap-2 cursor-pointer">
          <FileSpreadsheet className="h-4 w-4" />
          Exportar Excel (Custos)
        </DropdownMenuItem>
        {hasParcelas && (
          <DropdownMenuItem onClick={handleExportExcelParcelas} className="gap-2 cursor-pointer">
            <FileSpreadsheet className="h-4 w-4" />
            Exportar Excel (Parcelas)
          </DropdownMenuItem>
        )}
        <DropdownMenuItem onClick={handleExportPdf} className="gap-2 cursor-pointer">
          <Printer className="h-4 w-4" />
          Exportar PDF
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

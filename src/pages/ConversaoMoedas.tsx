import { useRef } from "react";
import { DownloadTableExcel } from "react-export-table-to-excel";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

const dados = [
  {
    id: 1,
    nome: "João Silva",
    telefone: "(11) 1234-5678",
    email: "joao.silva@example.com",
  },
  {
    id: 2,
    nome: "Maria Oliveira",
    telefone: "(11) 9876-5432",
    email: "maria.oliveira@example.com",
  },
];

export default function ConversaoMoedas() {
  const tableRef = useRef(null);

  return (
    <div>
      <DownloadTableExcel
        filename="contatos"
        sheet="contatos"
        currentTableRef={tableRef.current}
      >
        <button>Exportar para Excel</button>
      </DownloadTableExcel>

      {/* Usando HTML puro para o ref funcionar com a biblioteca de exportação */}
      <table ref={tableRef} className="hidden">
        <caption>Lista de contatos</caption>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Telefone</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((dado) => (
            <tr key={dado.id}>
              <td>{dado.id}</td>
              <td>{dado.nome}</td>
              <td>{dado.telefone}</td>
              <td>{dado.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mantendo os componentes do Shadcn para estilização na página */}
      <Table>
        <TableCaption>Lista de contatos</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Telefone</TableHead>
            <TableHead>E-mail</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dados.map((dado) => (
            <TableRow key={dado.id}>
              <TableCell>{dado.id}</TableCell>
              <TableCell>{dado.nome}</TableCell>
              <TableCell>{dado.telefone}</TableCell>
              <TableCell>{dado.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

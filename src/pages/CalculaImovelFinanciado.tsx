import CompraAVistaForm from "../components/CompraAVistaForm";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export default function CalculaImovelFinanciado() {
  return (
    <Card className="container">
      <CardHeader>
        <CardTitle>Calcula compra de imovel financiado </CardTitle>
        <div className="flex justify-between">
          <div></div>
          <div className="flex-nowrap">
            <CompraAVistaForm />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        TODO
      </CardContent>
    </Card>
  )
}

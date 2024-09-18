import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card } from '../components/ui/card';
import { Form, FormField, FormLabel, FormMessage, FormItem, FormControl } from '../components/ui/form';

interface FormValues {
  valorArrematacao: number;
  valorVenda: number;
  comissaoLeiloeiro: number;
  itbi: number;
  registroImovel: number;
  desocupacao: number;
  reforma: number;
  outrosGastos: number;
  mesesVenda: number;
  iptuMensal: number;
  condominioMensal: number;
  comissaoImobiliaria: number;
  ir: number;
}

export default function CalculaCompraImovel() {
  const { control, /*handleSubmit,*/ formState: { errors } } = useForm<FormValues>();
  const [results, setResults] = useState({
    comissaoLeiloeiro: 0,
    itbiTotal: 0,
    custoTotal: 0,
    comissaoImobiliaria: 0,
    valorIr: 0,
    lucroLiquido: 0,
    lucroPercentual: 0,
    lucroMensal: 0
  });

  // Função para calcular os resultados
  /*const calcular =*/ (data: FormValues) => {
    const {
      valorArrematacao,
      valorVenda,
      comissaoLeiloeiro,
      itbi,
      registroImovel,
      desocupacao,
      reforma,
      outrosGastos,
      mesesVenda,
      iptuMensal,
      condominioMensal,
      comissaoImobiliaria,
      ir
    } = data;

    // Cálculos principais
    const comissaoLeiloeiroTotal = (comissaoLeiloeiro / 100) * valorArrematacao;
    const itbiTotal = (itbi / 100) * valorArrematacao;
    const iptuTotal = iptuMensal * mesesVenda;
    const condominioTotal = condominioMensal * mesesVenda;

    // Custo total da compra
    const custoTotalCompra =
      valorArrematacao +
      comissaoLeiloeiroTotal +
      itbiTotal +
      registroImovel +
      desocupacao +
      reforma +
      outrosGastos +
      iptuTotal +
      condominioTotal;

    // Comissão da imobiliária e IR sobre o valor de venda
    const comissaoImobiliariaTotal = (comissaoImobiliaria / 100) * valorVenda;
    const valorIr = (ir / 100) * (valorVenda - custoTotalCompra);

    // Lucro líquido
    const valorVendaLiquido = valorVenda - comissaoImobiliariaTotal - valorIr;
    const lucroLiquido = valorVendaLiquido - custoTotalCompra;

    // Lucro percentual e mensal
    const lucroPercentual = (lucroLiquido / custoTotalCompra) * 100;
    const lucroMensal = lucroLiquido / mesesVenda;

    // Atualizar os resultados
    setResults({
      comissaoLeiloeiro: comissaoLeiloeiroTotal,
      itbiTotal,
      custoTotal: custoTotalCompra,
      comissaoImobiliaria: comissaoImobiliariaTotal,
      valorIr,
      lucroLiquido,
      lucroPercentual,
      lucroMensal
    });
  };

  const form = useForm();
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-xl font-bold mb-6">Cálculo de Compra de Imóveis em Leilão</h1>

      <div className="grid grid-cols-2 gap-10">

        {/* Coluna de Inputs */}
        <div>
          <Card className="p-4">
            <h2 className="text-lg font-bold mb-4">Dados da Compra do Imóvel</h2>
            <Form {...form}>
              <form>
                {/* Campo Valor de Arrematação */}
              <FormField
                control={control}
                name="valorArrematacao"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Valor de Arrematação</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" />
                    </FormControl>
                    <FormMessage>{errors.valorArrematacao?.message}</FormMessage>
                  </FormItem>
                )}
              />

              {/* Campo Valor de Venda */}
              <FormField
                control={control}
                name="valorVenda"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Valor de Venda</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" />
                    </FormControl>
                    <FormMessage>{errors.valorVenda?.message}</FormMessage>
                  </FormItem>
                )}
              />

              {/* Campo Comissão do Leiloeiro */}
              <FormField
                control={control}
                name="comissaoLeiloeiro"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Comissão do Leiloeiro (%)</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" />
                    </FormControl>
                    <FormMessage>{errors.comissaoLeiloeiro?.message}</FormMessage>
                  </FormItem>
                )}
              />

              {/* Campo ITBI */}
              <FormField
                control={control}
                name="itbi"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ITBI (%)</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" />
                    </FormControl>
                    <FormMessage>{errors.itbi?.message}</FormMessage>
                  </FormItem>
                )}
              />

              {/* Campo Registro do Imóvel */}
              <FormField
                control={control}
                name="registroImovel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Valor do Registro do Imóvel</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" defaultValue={3471.96} />
                    </FormControl>
                    <FormMessage>{errors.registroImovel?.message}</FormMessage>
                  </FormItem>
                )}
              />

              {/* Campo Desocupação */}
              <FormField
                control={control}
                name="desocupacao"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Desocupação</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" />
                    </FormControl>
                    <FormMessage>{errors.desocupacao?.message}</FormMessage>
                  </FormItem>
                )}
              />

              {/* Campo Reforma */}
              <FormField
                control={control}
                name="reforma"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Reforma</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" />
                    </FormControl>
                    <FormMessage>{errors.reforma?.message}</FormMessage>
                  </FormItem>
                )}
              />

              {/* Campo Outros Gastos */}
              <FormField
                control={control}
                name="outrosGastos"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Outros Gastos</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" />
                    </FormControl>
                    <FormMessage>{errors.outrosGastos?.message}</FormMessage>
                  </FormItem>
                )}
              />

              {/* Campo Meses de Venda */}
              <FormField
                control={control}
                name="mesesVenda"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Prazo de Venda (meses)</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" />
                    </FormControl>
                    <FormMessage>{errors.mesesVenda?.message}</FormMessage>
                  </FormItem>
                )}
              />

              {/* Campo IPTU Mensal */}
              <FormField
                control={control}
                name="iptuMensal"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>IPTU Mensal</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" />
                    </FormControl>
                    <FormMessage>{errors.iptuMensal?.message}</FormMessage>
                  </FormItem>
                )}
              />

              {/* Campo Condomínio Mensal */}
              <FormField
                control={control}
                name="condominioMensal"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Condomínio Mensal</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" />
                    </FormControl>
                    <FormMessage>{errors.condominioMensal?.message}</FormMessage>
                  </FormItem>
                )}
              />

              {/* Campo Comissão da Imobiliária */}
              <FormField
                control={control}
                name="comissaoImobiliaria"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Comissão da Imobiliária (%)</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" defaultValue={6} />
                    </FormControl>
                    <FormMessage>{errors.comissaoImobiliaria?.message}</FormMessage>
                  </FormItem>
                )}
              />

              {/* Campo IR */}
              <FormField
                control={control}
                name="ir"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>IR (%)</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" defaultValue={15} />
                    </FormControl>
                    <FormMessage>{errors.ir?.message}</FormMessage>
                  </FormItem>
                )}
              />

              <Button type="submit" className="mt-6">Calcular</Button>
              </form>
              
            </Form>
          </Card>
        </div>

        {/* Coluna de Resultados */}
        <div>
          <Card className="p-4">
            <h2 className="text-lg font-bold mb-4">Resultados</h2>
            <div>
              <p>Comissão do Leiloeiro: R$ {results.comissaoLeiloeiro.toFixed(2)}</p>
              <p>ITBI Total: R$ {results.itbiTotal.toFixed(2)}</p>
              <p>Custo Total da Compra: R$ {results.custoTotal.toFixed(2)}</p>
              <p>Comissão da Imobiliária: R$ {results.comissaoImobiliaria.toFixed(2)}</p>
              <p>IR: R$ {results.valorIr.toFixed(2)}</p>
              <p>Lucro Líquido: R$ {results.lucroLiquido.toFixed(2)}</p>
              <p>Lucro Percentual: {results.lucroPercentual.toFixed(2)}%</p>
              <p>Lucro Mensal: R$ {results.lucroMensal.toFixed(2)}</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema } from '../schemas/formSchema';
import { z } from 'zod';

import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { FormField, FormLabel, FormMessage, FormItem, FormControl, Form } from '../components/ui/form';

type CreateCalculaImoveisFormData = z.infer<typeof formSchema>;

export default function CalculosLeilaoExtrajudicial() {
  const form = useForm<CreateCalculaImoveisFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      valorArrematacao: 0,   
      valorVenda: 0,         
      comissaoLeiloeiro: 5,
      itbi: 3,
      registroImovel: 3471.96,
      comissaoImobiliaria: 6,
      ir: 15,
      desocupacao: 0,
      reforma: 3500,
      outrosGastos: 0,
      mesesVenda: 12,
      iptuMensal: 0,
      condominioMensal: 250,
    },
    mode: 'onChange',
  });

  const {/*control,*/ handleSubmit, /*watch,*/ formState: {errors}} = form;

  console.log({errors});

  const [results, setResults] = useState<{
    comissaoLeiloeiro: number;
    itbiTotal: number;
    custoTotal: number;
    comissaoImobiliaria: number;
    valorIr: number;
    valorVendaLiquido: number;
    lucroLiquido: number;
    lucroPercentual: number;
    lucroMensal: number;
  } | null>(null);

  //const watchAllFields = watch();

  // Função para calcular os resultados no submit
  const onSubmit: SubmitHandler<CreateCalculaImoveisFormData> = (data) => {
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
      ir,
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
    const valorIr = (ir / 100) * (valorVenda - comissaoImobiliariaTotal);

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
      valorVendaLiquido,
      lucroLiquido,
      lucroPercentual,
      lucroMensal,
    });

    console.log(data);
  };

  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-6">Cálculo de Compra de Imóveis em Leilão</h1>
      
      <div className="w-full space-y-2">
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-x-1">
                {/* Seção: Dados da Compra do Imóvel */}
                <h2 className="text-lg font-semibold mb-4">Dados da Compra do Imóvel</h2>
                <div className="space-y-4">
                  {/* Valor de Arrematação */}
                  <FormField
                    control={form.control}
                    name="valorArrematacao"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Valor de Arrematação</FormLabel>
                        <FormControl>
                          <Input {...field} type="number" placeholder="Valor de Arrematação" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Valor de Venda */}
                  <FormField
                    control={form.control}
                    name="valorVenda"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Valor de Venda</FormLabel>
                        <FormControl >
                          <Input {...field} type="number" placeholder="Valor de Venda" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Comissão do Leiloeiro */}
                  <FormField
                    control={form.control}
                    name="comissaoLeiloeiro"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Comissão do Leiloeiro (%)</FormLabel>
                        <FormControl>
                          <Input {...field} type="number" placeholder="Comissão do Leiloeiro" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* ITBI */}
                  <FormField
                    control={form.control}
                    name="itbi"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ITBI (%)</FormLabel>
                        <FormControl>
                          <Input {...field} type="number" placeholder="ITBI" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Valor do Registro do Imóvel */}
                  <FormField
                    control={form.control}
                    name="registroImovel"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Valor do Registro do Imóvel</FormLabel>
                        <FormControl>
                          <Input {...field} type="number" placeholder="Valor do Registro" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Valor Gasto com Advogado (Desocupação) */}
                  <FormField
                    control={form.control}
                    name="desocupacao"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Valor Gasto com Advogado (Desocupação)</FormLabel>
                        <FormControl>
                          <Input {...field} type="number" placeholder="Desocupação" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Reformas */}
                  <FormField
                    control={form.control}
                    name="reforma"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Reformas</FormLabel>
                        <FormControl>
                          <Input {...field} type="number" placeholder="Reformas" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Outros Gastos */}
                  <FormField
                    control={form.control}
                    name="outrosGastos"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Outros Gastos</FormLabel>
                        <FormControl>
                          <Input {...field} type="number" placeholder="Outros Gastos" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

              {/* Seção: Gastos Após Arrematação */}
              <h2 className="text-lg font-semibold mt-6 mb-4">Gastos Após Arrematação</h2>
              <div className="space-y-4">
                {/* Prazo de Venda */}
                <FormField
                  control={form.control}
                  name="mesesVenda"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Prazo de Venda (meses)</FormLabel>
                      <FormControl>
                        <Input {...field} type="number" placeholder="Prazo de Venda" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* IPTU Mensal */}
                <FormField
                  control={form.control}
                  name="iptuMensal"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>IPTU Mensal</FormLabel>
                      <FormControl>
                        <Input {...field} type="number" placeholder="IPTU Mensal" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Condomínio Mensal */}
                <FormField
                  control={form.control}
                  name="condominioMensal"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Condomínio Mensal</FormLabel>
                      <FormControl>
                        <Input {...field} type="number" placeholder="Condomínio Mensal" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Seção: Custos de Venda */}
              <h2 className="text-lg font-semibold mt-6 mb-4">Custos de Venda</h2>
              <div className="space-y-4">
                {/* Comissão da Imobiliária */}
                <FormField
                  control={form.control}
                  name="comissaoImobiliaria"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Comissão da Imobiliária (%)</FormLabel>
                      <FormControl>
                        <Input {...field} type="number" placeholder="Comissão da Imobiliária" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* IR */}
                <FormField
                  control={form.control}
                  name="ir"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>IR (%)</FormLabel>
                      <FormControl>
                        <Input {...field} type="number" placeholder="IR" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Botão de Submit */}
              <Button type="submit" className="w-full">Calcular</Button>
            </div>
          </form>
        </Form>
      </div>

      <div className="w-full mt-5 mb-10">
        {/* Coluna de Resultados */}
        <h2 className="text-lg font-semibold mb-4">Resultados</h2>
        {results ? (
          <div className="space-y-4">
            <p><strong>Comissão do Leiloeiro:</strong> R$ {results.comissaoLeiloeiro.toFixed(2)}</p>
            <p><strong>ITBI Total:</strong> R$ {results.itbiTotal.toFixed(2)}</p>
            <p><strong>Custo Total da Compra:</strong> R$ {results.custoTotal.toFixed(2)}</p>
            <p><strong>Comissão da Imobiliária:</strong> R$ {results.comissaoImobiliaria.toFixed(2)}</p>
            <p><strong>IR:</strong> R$ {results.valorIr.toFixed(2)}</p>
            <h2 className="text-lg font-semibold mt-6">Lucro da Venda</h2>
            <p><strong>Lucro Líquido:</strong> R$ {results.lucroLiquido.toFixed(2)}</p>
            <p><strong>Lucro Percentual:</strong> {results.lucroPercentual.toFixed(2)}%</p>
            <p><strong>Lucro Mensal:</strong> R$ {results.lucroMensal.toFixed(2)}</p>
          </div>
        ) : (
          <p>Preencha os dados e clique em Calcular para ver os resultados.</p>
        )}
      </div>
    </div>
  );
}


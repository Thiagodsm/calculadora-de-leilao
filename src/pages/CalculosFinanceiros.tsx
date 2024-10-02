import { 
  MoreVertical, 
  ChevronRight, 
  ChevronLeft, 
  Copy, 
  TrendingDown, 
  Wallet 
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem 
} from "../components/ui/pagination";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form"
import { Separator } from "../components/ui/separator";
import { Input } from "../components/ui/input"
import { Progress } from "../components/ui/progress";
import { Button } from "../components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "../schemas/formSchema";

type CreateCalculaImoveisFormData = z.infer<typeof formSchema>;

export default function CalculosFinanceiros() {
  const form = useForm<CreateCalculaImoveisFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      valorArrematacao: 0,   
      valorVenda: 0,         
      comissaoLeiloeiro: 0,
      itbi: 3,
      registroImovel: 3471.96,
      comissaoImobiliaria: 6,
      ir: 15,
      desocupacao: 0,
      reforma: 0,
      outrosGastos: 0,
      mesesVenda: 0,
      iptuMensal: 0,
      condominioMensal: 0,
    },
    //mode: 'onChange',
  });

  const {/*control,*/ /*handleSubmit,*/ /*watch,*/ formState: {errors}} = form;

  if(errors){
    console.log({errors});
  } 

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }



  return (
    <>
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
          <Card
            className="sm:col-span-2" x-chunk="dashboard-05-chunk-0"
          >
            <CardHeader className="pb-3">
              <CardTitle>Cálculos de Leilão de Extrajudicial</CardTitle>
              <CardDescription className="text-balance leading-relaxed">
                O leilão extrajudicial é um processo que permite vender imóveis que foram dados como garantia em empréstimos que não foram pagos. O leilão é mais rápido e barato do que um processo judicial e pode oferecer imóveis a preços mais baixos do que o valor de mercado.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button>Faça sua simulação</Button>
            </CardFooter>
          </Card>
          <Card x-chunk="dashboard-05-chunk-1">
            <CardHeader className="pb-2">
              <CardDescription>Custos totais</CardDescription>
              <CardTitle className="text-4xl">R$ 0,00</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                0% custos totais para comprar o imóvel
              </div>
            </CardContent>
            <CardFooter>
              <Progress value={0} aria-label="25% increase" />
            </CardFooter>
          </Card>
          <Card x-chunk="dashboard-05-chunk-2">
            <CardHeader className="pb-2">
              <CardDescription>Lucro líquido</CardDescription>
              <CardTitle className="text-4xl">R$ 0,00</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                0% lucros com a venda venda do imóvel
              </div>
            </CardContent>
            <CardFooter>
              <Progress value={0} aria-label="12% increase" />
            </CardFooter>
          </Card>
        </div>
        <Tabs defaultValue="financiado">
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="avista">À Vista</TabsTrigger>
              <TabsTrigger value="financiado">Financiado</TabsTrigger>              
            </TabsList>
          </div>
          <TabsContent value="financiado">
            <Card x-chunk="dashboard-05-chunk-3">
              <CardHeader className="px-7">
                <CardTitle>Fomulário de compra fianciada</CardTitle>
                <CardDescription>
                  Campos necessários para fazer os cálculos de custos e lucro na venda do imóvel.
                </CardDescription>
              </CardHeader>
              <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="valorArrematacao"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Valor de Arrematação</FormLabel>
                            <FormControl>
                              <Input {...field} type="number" placeholder="Valor de Arrematação" />
                            </FormControl>
                            <FormDescription>
                              Valor de arrematação do imóvel
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
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
                      <h6 className="font-semibold mb-4">Custos para arrematar</h6>
                      <FormField
                        control={form.control}
                        name="itbi"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>ITBI (%)</FormLabel>
                            <FormControl>
                              <Input {...field} type="number" placeholder="ITBI" />
                            </FormControl>
                            <FormDescription>
                              Imposto sobre a Transmissão de Bens Imóveis - incide sobre a transferência de bens imóveis.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
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
                      <FormField
                        control={form.control}
                        name="desocupacao"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Desocupação</FormLabel>
                            <FormControl>
                              <Input {...field} type="number" placeholder="Desocupação" />
                            </FormControl>
                            <FormDescription>
                              Valores gastos com advogado ou atual morador para desocupar o imóvel
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
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

                      <h6 className="font-semibold mb-4">Custos até a venda</h6>
                      <FormField
                        control={form.control}
                        name="mesesVenda"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Prazo de venda (meses)</FormLabel>
                            <FormControl>
                              <Input {...field} type="number" placeholder="Prazo de Venda" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

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

                      <h6 className="font-semibold mb-4">Custos de venda</h6>
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

                      <Button type="submit">Calcular</Button>
                    </form>
                  </Form>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="avista">
            <Card x-chunk="dashboard-05-chunk-3">
              <CardHeader className="px-7">
                <CardTitle>Fomulário de compra a vista</CardTitle>
                <CardDescription>
                  Campos necessários para fazer os cálculos de custos e lucro na venda do imóvel.
                </CardDescription>
              </CardHeader>
              <CardContent>
                
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <div>
        <Card
          className="overflow-hidden" x-chunk="dashboard-05-chunk-4"
        >
          <CardHeader className="flex flex-row items-start bg-muted/50">
            <div className="grid gap-0.5">
              <CardTitle className="group flex items-center gap-2 text-lg">
                Custos totais
                <Button
                  size="icon"
                  variant="outline"
                  className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                >
                  <Copy className="h-3 w-3" />
                  <span className="sr-only">Copy Order ID</span>
                </Button>
              </CardTitle>
              <CardDescription>Custos totais com a compra do imóvel</CardDescription>
            </div>
            <div className="ml-auto flex items-center gap-1">
              <Button size="sm" variant="outline" className="h-8 gap-1">
                <TrendingDown className="h-3.5 w-3.5" />
                <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                  Custos
                </span>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" variant="outline" className="h-8 w-8" disabled={true}>
                    <MoreVertical className="h-3.5 w-3.5" />
                    <span className="sr-only">More</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Export</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Trash</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent className="p-6 text-sm">
            <div className="grid gap-3">
              <div className="font-semibold">Demonstrativo dos custos</div>
              <ul className="grid gap-3">
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                    Valor de arrematação 
                  </span>
                  <span>R$ 0</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                    Valor de venda 
                  </span>
                  <span>R$ 0</span>
                </li>
              </ul>
              <Separator className="my-2" />
              <div className="font-semibold">Custos para arrematar</div>
              <ul className="grid gap-3">
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Comissão do leiloeiro</span>
                  <span>0 %</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Valor da comissão</span>
                  <span>R$ 0</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">ITBI</span>
                  <span>0 %</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Valor do ITBI</span>
                  <span>R$ 0</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Registro do imóvel</span>
                  <span>R$ 0</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Valor desocupação (custos com advogado)</span>
                  <span>R$ 0</span>
                </li>
                <li className="flex items-center justify-between font-semibold">
                  <span className="text-muted-foreground">Total</span>
                  <span>R$ 0</span>
                </li>
              </ul>
              <Separator className="my-2" />
              <div className="font-semibold">Custos até a venda venda</div>
              <ul className="grid gap-3">
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Prazo de venda</span>
                  <span>0 mese(s)</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">IPTU mensal</span>
                  <span>R$ 0</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Condominio mensal</span>
                  <span>R$ 0</span>
                </li>
                <li className="flex items-center justify-between font-semibold">
                  <span className="text-muted-foreground">Total</span>
                  <span>R$ 0</span>
                </li>
              </ul>
            </div>
            <Separator className="my-4" />
            <div className="grid gap-3">
              <div className="font-semibold">Custos de venda</div>
              <ul className="grid gap-3">
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                    Comissão do corretor
                  </span>
                  <span>0 %</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                    Valor da comissão
                  </span>
                  <span>R$ 0</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">IR sobre o ganho de capital</span>
                  <span>15%</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Valor do IR sobre o ganho de capital</span>
                  <span>R$ 0</span>
                </li>
                <li className="flex items-center justify-between font-semibold">
                  <span className="text-muted-foreground">Total</span>
                  <span>R$ 0</span>
                </li>
              </ul>
            </div>
            <Separator className="my-4" />
            <div className="grid gap-3">
              <div className="font-semibold">Custos totais</div>
              <dl className="grid gap-3">
                <div className="flex items-center justify-between">
                  <dt className="flex items-center gap-1 text-muted-foreground">
                    <Wallet className="h-4 w-4" />
                    Investimento
                  </dt>
                  <dd>R$ 0</dd>
                </div>
              </dl>
            </div>
          </CardContent>
          <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
            <div className="text-xs text-muted-foreground">
              Atualizado em <time dateTime="2023-11-23">01 de Outubro de 2024</time>
            </div>
            <Pagination className="ml-auto mr-0 w-auto">
              <PaginationContent>
                <PaginationItem>
                  <Button size="icon" variant="outline" className="h-6 w-6">
                    <ChevronLeft className="h-3.5 w-3.5" />
                    <span className="sr-only">Previous Order</span>
                  </Button>
                </PaginationItem>
                <PaginationItem>
                  <Button size="icon" variant="outline" className="h-6 w-6">
                    <ChevronRight className="h-3.5 w-3.5" />
                    <span className="sr-only">Next Order</span>
                  </Button>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}

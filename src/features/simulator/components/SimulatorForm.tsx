import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../../../components/ui/form";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../../../components/ui/accordion";
import MoneyInput from "../../../components/MoneyInput";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../../../components/ui/radio-group";
import { forwardRef, useImperativeHandle, useState } from "react";
import { formSchema } from "../schemas/formSchemas";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SimulatorResult, TipoFinanciamento } from "../types";
import { calculateProfits } from "../domain/calculateProfit";

type SchemaFormData = z.infer<typeof formSchema>;

export type SimuladorFormRef = {
    resetForm: () => void;
    setValorArrematacao: (value: number) => void;
    getValues: () => SchemaFormData;
    submitForm: () => void;
};

interface SimulatorFormProps
{
    onSubmit: (result: SimulatorResult) => void;
    isFinanced: boolean;
}

export const SimuladorForm = forwardRef<SimuladorFormRef, SimulatorFormProps>(
    ({ onSubmit, isFinanced }, ref) =>
    {
        const[financingType, setFinancingType] = useState<TipoFinanciamento>("SAC");

        const form = useForm<SchemaFormData>({
            resolver: zodResolver(formSchema),
            defaultValues: {
                valorArrematacao: 187000,
                valorVenda: 292000,
                porcEntradaFinanciamento: 5,
                taxaJurosAnual: 10.47,
                prazoFinanciamento: 420,
                comissaoLeiloeiro: 0,
                itbi: 3,
                registroImovel: 3924.84,
                comissaoImobiliaria: 6,
                ir: 15,
                gastosDesocupacao: 0,
                valorReformas: 4415.48,
                valorOutrosGastos: 7576.41,
                prazoVenda: 6,
                iptuMensal: 115,
                condominioMensal: 486,
            },
            mode: 'onChange'
        });

        const handleOnSubmit = (data: SchemaFormData) =>
        {
            const results = calculateProfits({
                isFinanced,
                tipoFinanciamento: financingType,
                ...data,
            });
            onSubmit(results);
        };

        useImperativeHandle(
            ref,
            () =>({
                resetForm: () => {
                    form.reset();
                    setFinancingType("SAC");
                },
                setValorArrematacao: (value: number) => {
                    form.setValue('valorArrematacao', value);
                },
                getValues: () => form.getValues(),
                submitForm: () => {
                    form.handleSubmit(handleOnSubmit)();
                },
            })
        );

        return (
            <Form {...form}>
            <form onSubmit={form.handleSubmit(handleOnSubmit)} className="space-y-2">
                <Accordion type="multiple" defaultValue={["imovel", ...(isFinanced ? ["financiamento"] : [])]}>

                    <AccordionItem value="imovel">
                        <AccordionTrigger className="text-sm font-semibold">Imóvel</AccordionTrigger>
                        <AccordionContent className="space-y-4 pt-2">
                            <FormField
                            control={form.control}
                            name="valorArrematacao"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Valor de Arrematação</FormLabel>
                                <FormControl>
                                    <MoneyInput value={field.value} onChange={field.onChange} />
                                </FormControl>
                                <FormDescription>Valor de arrematação do imóvel</FormDescription>
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
                                    <FormControl>
                                        <MoneyInput value={field.value} onChange={field.onChange} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </AccordionContent>
                    </AccordionItem>

                    {isFinanced && (
                        <AccordionItem value="financiamento">
                            <AccordionTrigger className="text-sm font-semibold">Financiamento</AccordionTrigger>
                            <AccordionContent className="space-y-4 pt-2">
                                <FormField
                                    control={form.control}
                                    name="porcEntradaFinanciamento"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Porcentagem de Entrada (%)</FormLabel>
                                        <FormControl>
                                            <MoneyInput value={field.value} onChange={field.onChange} />
                                        </FormControl>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="taxaJurosAnual"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Taxa de Juros Anual (%)</FormLabel>
                                        <FormControl>
                                            <MoneyInput value={field.value} onChange={field.onChange} />
                                        </FormControl>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="prazoFinanciamento"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Prazo de Financiamento (meses)</FormLabel>
                                            <FormControl>
                                                <Input {...field} type="number" placeholder="Prazo de Financiamento (meses)" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div>
                                    <Label>Forma de Financiamento</Label>
                                    <RadioGroup
                                        className="mt-2"
                                        value={financingType}
                                        onValueChange={(value) => setFinancingType(value as TipoFinanciamento)}
                                    >
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="PRICE" id="price">Price</RadioGroupItem>
                                            <Label htmlFor="price">Price</Label>
                                            <RadioGroupItem value="SAC" id="sac">SAC</RadioGroupItem>
                                            <Label htmlFor="sac">SAC</Label>
                                        </div>
                                    </RadioGroup>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    )}

                    <AccordionItem value="aquisicao">
                        <AccordionTrigger className="text-sm font-semibold">Custos de Aquisição</AccordionTrigger>
                        <AccordionContent className="space-y-4 pt-2">
                            <FormField
                                control={form.control}
                                name="comissaoLeiloeiro"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Comissão do Leiloeiro (%)</FormLabel>
                                    <FormControl>
                                        <MoneyInput value={field.value} onChange={field.onChange} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="itbi"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>ITBI (%)</FormLabel>
                                    <FormControl>
                                        <MoneyInput value={field.value} onChange={field.onChange} />
                                    </FormControl>
                                    <FormDescription>Imposto sobre a Transmissão de Bens Imóveis</FormDescription>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="registroImovel"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Registro do Imóvel</FormLabel>
                                    <FormControl>
                                        <MoneyInput value={field.value} onChange={field.onChange} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="gastosDesocupacao"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Gastos com Desocupação</FormLabel>
                                    <FormControl>
                                        <MoneyInput value={field.value} onChange={field.onChange} />
                                    </FormControl>
                                    <FormDescription>Advogado ou acordo para desocupar o imóvel</FormDescription>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="valorReformas"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Reformas</FormLabel>
                                    <FormControl>
                                        <MoneyInput value={field.value} onChange={field.onChange} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="valorOutrosGastos"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Outros Gastos</FormLabel>
                                    <FormControl>
                                        <MoneyInput value={field.value} onChange={field.onChange} />
                                    </FormControl>
                                    <FormDescription>Dívidas do imóvel, penhora, IPTU antigo, etc.</FormDescription>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="manutencao">
                        <AccordionTrigger className="text-sm font-semibold">Custos de Manutenção</AccordionTrigger>
                        <AccordionContent className="space-y-4 pt-2">
                            <FormField
                                control={form.control}
                                name="prazoVenda"
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
                                        <MoneyInput value={field.value} onChange={field.onChange} />
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
                                        <MoneyInput value={field.value} onChange={field.onChange} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="venda">
                        <AccordionTrigger className="text-sm font-semibold">Custos de Venda</AccordionTrigger>
                        <AccordionContent className="space-y-4 pt-2">
                            <FormField
                                control={form.control}
                                name="comissaoImobiliaria"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Comissão da Imobiliária (%)</FormLabel>
                                    <FormControl>
                                        <MoneyInput value={field.value} onChange={field.onChange} />
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
                                    <FormLabel>Imposto de Renda (%)</FormLabel>
                                    <FormControl>
                                        <MoneyInput value={field.value} onChange={field.onChange} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>

                <Button type="submit" className="w-full mt-4">Calcular Rentabilidade</Button>
            </form>
            </Form>
        );
    }
)

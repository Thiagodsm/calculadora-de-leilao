import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,    
} from "../../../components/ui/form";
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
                valorArrematacao: 72000,
                valorVenda: 120000,
                porcEntradaFinanciamento: 5,
                taxaJurosAnual: 11,
                prazoFinanciamento: 420,
                comissaoLeiloeiro: 0,
                itbi: 3,
                registroImovel: 3471.96,
                comissaoImobiliaria: 6,
                ir: 15,
                gastosDesocupacao: 0,
                valorReformas: 3500,
                valorOutrosGastos: 0,
                prazoVenda: 12,
                iptuMensal: 0,
                condominioMensal: 250,
            },
            mode: 'onChange'
        });

        useImperativeHandle(
            ref, 
            () =>({
                resetForm: () => {
                    form.reset();
                    setFinancingType("SAC");
                }
            })
        );

        const handleOnSubmit = (data: SchemaFormData) =>
        {
            const results = calculateProfits({
                isFinanced,
                tipoFinanciamento: financingType,
                ...data,
            });
            onSubmit(results);
        };

        return (
            <Form {...form}>
            <form onSubmit={form.handleSubmit(handleOnSubmit)} className="space-y-4">
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
                        <FormControl >
                            <MoneyInput value={field.value} onChange={field.onChange} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                {isFinanced && (
                    <>
                        <h6 className="font-semibold mb-4">Valores do Financiamento</h6>
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
                    </>
                )}

                <h6 className="font-semibold mb-4">Custos para arrematar</h6>
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
                        <FormDescription>Imposto sobre a Transmissão de Bens Imóveis - incide sobre a transferência de bens imóveis.</FormDescription>
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
                        <FormDescription>Valores gastos com advogado ou atual morador para desocupar o imóvel</FormDescription>
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
                        <FormMessage />
                        <FormDescription>Custos com dividas do imóvel, penhora, IPTU antigo entre outros.</FormDescription>
                        </FormItem>
                    )}
                />

                <h6 className="font-semibold mb-4">Custos até a venda</h6>
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
                        <FormLabel>Condomínio mensal</FormLabel>
                        <FormControl>
                            <MoneyInput value={field.value} onChange={field.onChange} />
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
                <Button type="submit">Calcular</Button>
            </form>
            </Form>
        );
    }
)

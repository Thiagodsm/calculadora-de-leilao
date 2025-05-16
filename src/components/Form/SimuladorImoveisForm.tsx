import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,    
} from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button";
  
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "../../schemas/formSchema";
import CurrencyInput from "react-currency-input-field";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { useState } from "react";
import MoneyInput from "../MoneyInput";

type CreateCalculaImoveisFormData = z.infer<typeof formSchema>;

interface SimuladorImoveisFormProps{
    onSubmit: (data: CreateCalculaImoveisFormData, isFinanciado: boolean, tipoFinanciamento: string) => void;
    isFinanciado: boolean;
}

export function SimuladorImoveisForm({ onSubmit, isFinanciado }: SimuladorImoveisFormProps) {
    const [tipoFinanciamento, setTipoFinanciamento] = useState("sac");

    const form = useForm<CreateCalculaImoveisFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            //valorArrematacao: 0,   
            valorVenda: 0,       
            porcEntradaFinanciamento: 5,
            taxaJurosAnual: 11,
            prazoFinanciamento: 420,  
            comissaoLeiloeiro: 5,
            itbi: 3,
            registroImovel: 3471.96,
            comissaoImobiliaria: 6,
            ir: 15,
            gastosDesocupacao: 0,
            valorReformas: 3500,
            valorOutrosGastos: 0,
            prazoVendaMeses: 12,
            iptuMensal: 0,
            condominioMensal: 0,
        },
        //mode: 'onChange',
    });

    // Funcao para envolver o onSubmit e viabilizar o envio de isFinanciado
    const handleOnSubmit = (data: CreateCalculaImoveisFormData) =>{
        onSubmit(data, isFinanciado, tipoFinanciamento);
    }
    
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
                    <MoneyInput 
                        value={field.value}
                        onChange={field.onChange}
                    />
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
                        <MoneyInput 
                            value={field.value}
                            onChange={field.onChange}
                        />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
            />
            {isFinanciado && (
                <>
                    <h6 className="font-semibold mb-4">Valores do Financiamento</h6>
                    <FormField
                        control={form.control}
                        name="porcEntradaFinanciamento"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Porcentagem de Entrada (%)</FormLabel>
                            <FormControl>
                                <MoneyInput 
                                    value={field.value}
                                    onChange={field.onChange}
                                />
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
                                <MoneyInput 
                                    value={field.value}
                                    onChange={field.onChange}
                                />
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
                            value={tipoFinanciamento}
                            onValueChange={setTipoFinanciamento}
                        >
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="price" id="price">Price</RadioGroupItem>
                                <Label htmlFor="r1">Price</Label>

                                <RadioGroupItem value="sac" id="sac">SAC</RadioGroupItem>
                                <Label htmlFor="r2">SAC</Label>
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
                        <MoneyInput 
                            value={field.value}
                            onChange={field.onChange}
                        />
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
                    <MoneyInput 
                        value={field.value}
                        onChange={field.onChange}
                    />
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
                        <MoneyInput 
                            value={field.value}
                            onChange={field.onChange}
                        />
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
                    <MoneyInput 
                        value={field.value}
                        onChange={field.onChange}
                    />
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
            name="valorReformas"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Reformas</FormLabel>
                <FormControl>
                    <MoneyInput 
                        value={field.value}
                        onChange={field.onChange}
                    />
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
                    <MoneyInput 
                        value={field.value}
                        onChange={field.onChange}
                    />
                </FormControl>
                <FormMessage />
                <FormDescription>
                    Custos com dividas do imóvel, penhora, IPTU antigo entre outros.
                </FormDescription>
                </FormItem>
            )}
            />

            <h6 className="font-semibold mb-4">Custos até a venda</h6>
            <FormField
            control={form.control}
            name="prazoVendaMeses"
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
                    <MoneyInput 
                        value={field.value}
                        onChange={field.onChange}
                    />
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
                    <MoneyInput 
                        value={field.value}
                        onChange={field.onChange}
                    />
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
                    <MoneyInput 
                        value={field.value}
                        onChange={field.onChange}
                    />
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
                    <MoneyInput 
                        value={field.value}
                        onChange={field.onChange}
                    />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />

            <Button type="submit">Calcular</Button>
            </form>
        </Form>
    )
}
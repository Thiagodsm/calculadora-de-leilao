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
            valorArrematacao: 72000,   
            valorVenda: 120000,       
            porcEntradaFinanciamento: 5,
            taxaJurosAnual: 11,
            prazoFinanciamento: 420,  
            comissaoLeiloeiro: 0,
            itbi: 3,
            registroImovel: 3350 /*3471.96*/,
            comissaoImobiliaria: 6,
            ir: 15,
            gastosDesocupacao: 0,
            valorReformas: 3500,
            valorOutrosGastos: 0,
            prazoVendaMeses: 12,
            iptuMensal: 0,
            condominioMensal: 250,
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
                    <CurrencyInput
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        id="valorArrematacao"
                        name={field.name}
                        placeholder="Valor de arrematação"
                        prefix="R$ "
                        value={field.value || ""}
                        decimalsLimit={2}
                        decimalSeparator="."
                        groupSeparator=","
                        disableGroupSeparators={false}
                        allowNegativeValue={false}
                        onValueChange={(value) => {
                            if (value === undefined || value === "") {
                                field.onChange(""); 
                            } else {
                                field.onChange(value);
                            }
                        }}
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
                        <CurrencyInput
                            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                            id="valorVenda"
                            name={field.name}
                            placeholder="Valor de venda"
                            prefix="R$ "
                            value={field.value || ""}
                            decimalsLimit={2}
                            decimalSeparator="."
                            groupSeparator=","
                            disableGroupSeparators={false}
                            allowNegativeValue={false}
                            onValueChange={(value) => {
                                if (value === undefined || value === "") {
                                    field.onChange("");
                                } else {
                                    field.onChange(value);
                                }
                            }}
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
                                <Input 
                                    {...field} 
                                    value={field.value ?? ""}
                                    placeholder="Porcentagem de Entrada (%)" 
                                    onChange={(e) => {
                                        const value = e.target.value.replace(",", ".");
                                        if (!isNaN(Number(value))) {
                                            field.onChange(value);
                                        }
                                    }}
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
                                <Input 
                                    {...field} 
                                    value={field.value ?? ""}
                                    placeholder="Taxa de Juros Anual (%)" 
                                    onChange={(e) => {
                                        const value = e.target.value.replace(",", ".");
                                        if (!isNaN(Number(value))) {
                                            field.onChange(value);
                                        }
                                    }}
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
                        <Input 
                            {...field} 
                            value={field.value ?? ""}
                            placeholder="Comissão do leiloeiro" 
                            onChange={(e) => {
                                const value = e.target.value.replace(",", ".");
                                if (!isNaN(Number(value))) {
                                    field.onChange(value);
                                }
                            }}
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
                    <Input 
                        {...field} 
                        value={field.value ?? ""}
                        placeholder="ITBI" 
                        onChange={(e) => {
                            const value = e.target.value.replace(",", ".");
                            if (!isNaN(Number(value))) {
                                field.onChange(value);
                            }
                        }}
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
                        <CurrencyInput
                            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                            id="registroImovel"
                            name={field.name}
                            placeholder="Registro do imóvel"
                            prefix="R$ "
                            value={field.value || ""}
                            decimalsLimit={2}
                            decimalSeparator="."
                            groupSeparator=","
                            disableGroupSeparators={false}
                            allowNegativeValue={false}
                            onValueChange={(value) => {
                                if (value === undefined || value === "") {
                                    field.onChange(""); 
                                } else {
                                    field.onChange(value);
                                }
                            }}
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
                    <CurrencyInput
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        id="gastosDesocupacao"
                        name={field.name}
                        placeholder="Gastos com a desocupação"
                        prefix="R$ "
                        value={field.value || ""}
                        decimalsLimit={2}
                        decimalSeparator="."
                        groupSeparator=","
                        disableGroupSeparators={false}
                        allowNegativeValue={false}
                        onValueChange={(value) => {
                            if (value === undefined || value === "") {
                                field.onChange("");
                            } else {
                                field.onChange(value);
                            }
                        }}
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
                <CurrencyInput
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        id="valorReformas"
                        name={field.name}
                        placeholder="Reformas"
                        prefix="R$ "
                        value={field.value || ""}
                        decimalsLimit={2}
                        decimalSeparator="."
                        groupSeparator=","
                        disableGroupSeparators={false}
                        allowNegativeValue={false}
                        onValueChange={(value) => {
                            if (value === undefined || value === "") {
                                field.onChange("");
                            } else {
                                field.onChange(value);
                            }
                        }}
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
                    <CurrencyInput
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        id="valorOutrosGastos"
                        name={field.name}
                        placeholder="Outros gastos"
                        prefix="R$ "
                        value={field.value || ""}
                        decimalsLimit={2}
                        decimalSeparator="."
                        groupSeparator=","
                        disableGroupSeparators={false}
                        allowNegativeValue={false}
                        onValueChange={(value) => {
                            if (value === undefined || value === "") {
                                field.onChange("");
                            } else {
                                field.onChange(value);
                            }
                        }}
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
                    <CurrencyInput
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        id="iptuMensal"
                        name={field.name}
                        placeholder="IPTU mensal"
                        prefix="R$ "
                        value={field.value || ""}
                        decimalsLimit={2}
                        decimalSeparator="."
                        groupSeparator=","
                        disableGroupSeparators={false}
                        allowNegativeValue={false}
                        onValueChange={(value) => {
                            if (value === undefined || value === "") {
                                field.onChange("");
                            } else {
                                field.onChange(value);
                            }
                        }}
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
                    <CurrencyInput
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        id="iptuMensal"
                        name={field.name}
                        placeholder="Condomínio mensal"
                        prefix="R$ "
                        value={field.value || ""}
                        decimalsLimit={2}
                        decimalSeparator="."
                        groupSeparator=","
                        disableGroupSeparators={false}
                        allowNegativeValue={false}
                        onValueChange={(value) => {
                            if (value === undefined || value === "") {
                                field.onChange("");
                            } else {
                                field.onChange(value);
                            }
                        }}
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
                    <Input 
                        {...field} 
                        value={field.value ?? ""}
                        placeholder="Comissão da Imobiliária" 
                        onChange={(e) => {
                            const value = e.target.value.replace(",", ".");
                            if (!isNaN(Number(value))) {
                                field.onChange(value);
                            }
                        }}
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
                    <Input 
                        {...field} 
                        value={field.value ?? ""}
                        placeholder="Imposto de Renda" 
                        onChange={(e) => {
                            const value = e.target.value.replace(",", ".");
                            if (!isNaN(Number(value))) {
                                field.onChange(value);
                            }
                        }}
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
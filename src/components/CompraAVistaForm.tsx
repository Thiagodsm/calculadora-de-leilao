import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { FormField, FormLabel, FormMessage, FormItem, FormControl, Form } from './ui/form';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';

import { formSchema } from '../schemas/formSchema';

type CalculaImoveisFormValues = z.infer<typeof formSchema>;  

export default function CompraAVistaForm() {
    const form = useForm<CalculaImoveisFormValues>({
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
        mode: 'onChange'
        });

    function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm">Dados da compra</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            Dados da compra
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-x-8">
                <Card className="p-5 mb-4">
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
                    <Button className="mt-5" type="submit">Calcular</Button>
                </Card>
            </form>
        </Form>

      </DialogContent>
    </Dialog>
  )
}

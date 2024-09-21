// src/components/CompraAVistaForm.tsx

import { useForm } from 'react-hook-form'; // Import SubmitHandler
import { z } from 'zod';

import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { FormField, FormLabel, FormMessage, FormItem, FormControl, Form, FormDescription } from './ui/form';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';

// Definição do Schema com Zod
export const formSchema = z.object({
  valorArrematacao: z
    .number({ invalid_type_error: 'Valor de arrematação é obrigatório' })
    .min(1, 'Valor de arrematação deve ser pelo menos 1'),
  valorVenda: z
    .number({ invalid_type_error: 'Valor de venda é obrigatório' })
    .min(1, 'Valor de venda deve ser pelo menos 1'),
});

export default function CompraAVistaForm() {
    const form = useForm({
        defaultValues:{
            tipo: "",
        }
    }) 

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
            <form>
                <Card className="p-10">
                    <FormField 
                        control={form.control}
                        name='tipo'
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="shadcn" {...field} />
                                </FormControl>
                                <FormDescription>This is your public display name.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}      
                    />
                </Card>
            </form>
        </Form>

      </DialogContent>
    </Dialog>
  )
}

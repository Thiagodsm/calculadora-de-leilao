import { Button } from '../components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../components/ui/form';
import { Input } from '../components/ui/input';
import { LoginFormSchema } from '../lib/schema/login';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from "zod";
import { toast } from "sonner";
import { useNavigate } from 'react-router-dom'; // Adiciona o useNavigate para substituir o useRouter

function LoginForm() {
    const navigate = useNavigate(); // useNavigate do react-router-dom para navegação
    const [loading, setLoading] = useState(false);

    const onSubmit = async () => {
        setLoading(true);
        // Simulação de carregamento assíncrono
        setTimeout(() => {
            toast("Login Success", {
                className: "bg-green-500",
                description: "Redirect to home page",
            });
            navigate('/home'); // Substitui o router.replace por navigate
            setLoading(false);
        }, 2000);
    }

    const form = useForm<z.infer<typeof LoginFormSchema>>({
        resolver: zodResolver(LoginFormSchema),
        defaultValues: {
            email: "user@example.com",
            password: "user",
        },
    });

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input autoComplete='' type='password' placeholder="" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button loading={loading} type="submit">Login</Button>
            </form>
        </Form >
    );
}

export default LoginForm;

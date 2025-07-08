import { useState } from "react";
import { Button } from "./ui/button";
import { CoffeeIcon } from "lucide-react";
import { toast } from "sonner";

export default function PixSupportSection() 
{
    const pixKey = "b355d7d8-4c4a-4490-971f-08531f4666d5";
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(pixKey);
        setCopied(true);
        toast.success("Pix copiado com sucesso!");
        setTimeout(() => setCopied(false), 2000)
    };

    return(
        <div className="mt-10 space-y-4 rounded-lg border p-6 text-center shadaw">
            <h2 className="text-lg font-semibold">Gostou da calculadora?</h2>
            <p className="text-sm text-muted-foreground">Curtiu o projeto? Me ajude a manter a calculadora no ar com um cafezinho ☕</p>

            <div className="flex justify-center gap-2">
                <Button 
                    variant="default" onClick={handleCopy}>
                    <CoffeeIcon className="mr-2 h-4 w-4" />
                    {copied ? "Chave copiada!" : "Copiar chave Pix"}
                </Button>
            </div>
        </div>
    );
};

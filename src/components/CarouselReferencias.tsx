import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../components/ui/carousel";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

const references = [
    {
        title: "Priscila Perini",
        image: "/team_engineering_white.svg",
        link: "https://ui.shadcn.com/docs/components/carousel",
    },
    {
        title: "Caixa Imóveis à Venda",
        image: "/referencia-leilao.jpg",
        link: "https://www.caixa.gov.br/voce/habitacao/imoveis-venda/Paginas/default.aspx",
    },
    {
        title: "ShadCN Sidebar",
        image: "/team_engineering_white.svg",
        link: "https://github.com/Yudian00/shadcn-sidebar",
    },
    {
        title: "Shadcn Docs",
        image: "/team_engineering_white.svg",
        link: "https://www.caixa.gov.br/voce/habitacao/imoveis-venda/Paginas/default.aspx",
    },
    {
        title: "Calculadora de leilão",
        image: "/team_engineering_white.svg",
        link: "https://www.solonleiloes.com.br/calculadora-de-leilao",
    },
  ];

export default function CarouselReferencias() {
    const plugin = React.useRef(
        Autoplay({
            delay: 4000,
            stopOnInteraction: false,
        })
    );

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-5xl mx-auto"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{align: "start"}}
        >
        <CarouselContent>
            {references.map((ref, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                        <Card className="h-full">
                            <CardContent className="flex flex-col items-center justify-center p-4">
                                <img 
                                    src={ref.image} 
                                    alt={ref.title} 
                                    className="w-full flex object-contain mb-4 rounded-lg"  
                                />

                                <a 
                                    href={ref.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-center text-sm font-medium text-blue-600 underline break-words max-w-full"
                                >
                                    {ref.title}
                                </a>
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>
    )
}

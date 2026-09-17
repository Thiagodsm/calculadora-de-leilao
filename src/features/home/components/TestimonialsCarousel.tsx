import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar";
import { Card, CardContent } from "../../../components/ui/card";
import { formatCurrency } from "../../simulator/utils/formatters";
import type { CasoSucesso } from "../types";

interface TestimonialsCarouselProps {
  casos: CasoSucesso[];
}

export default function TestimonialsCarousel({ casos }: TestimonialsCarouselProps) {
  if (casos.length === 0) return null;

  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
      className="w-full max-w-3xl mx-auto"
    >
      <CarouselContent>
        {casos.map((caso) => (
          <CarouselItem key={caso.investidor.nome}>
            <Card className="border-0 shadow-none bg-muted/30">
              <CardContent className="flex flex-col items-center text-center gap-4 px-6 py-8 sm:px-10">
                <Avatar className="size-24 ring-4 ring-primary/20 shadow-lg">
                  <AvatarImage src={caso.avatarSrc} alt={caso.investidor.nome} className="object-cover" />
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">
                    {caso.avatarFallback}
                  </AvatarFallback>
                </Avatar>

                <blockquote className="text-sm sm:text-base text-muted-foreground italic leading-relaxed max-w-lg">
                  "{caso.depoimento}"
                </blockquote>

                <div className="flex flex-col items-center gap-1">
                  <p className="font-semibold text-sm">{caso.investidor.nome}</p>
                  <p className="text-xs text-muted-foreground">{caso.investidor.perfil}</p>
                </div>

                <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5">
                  <span className="text-xs text-muted-foreground">Lucro obtido:</span>
                  <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                    {formatCurrency(caso.resultado.lucroLiquido)}
                  </span>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      {casos.length > 1 && (
        <>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </>
      )}
    </Carousel>
  );
}

import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState, useCallback } from "react";
import type { EmblaCarouselType } from "embla-carousel";
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
  const [api, setApi] = useState<EmblaCarouselType | undefined>(undefined);
  const [current, setCurrent] = useState(0);

  const onSelect = useCallback((embla: EmblaCarouselType) => {
    setCurrent(embla.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("select", () => onSelect(api));
    return () => { api.off("select", () => onSelect(api)); };
  }, [api, onSelect]);

  if (casos.length === 0) return null;

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center gap-4">
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
        className="w-full"
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

      {casos.length > 1 && (
        <div className="flex sm:hidden gap-2">
          {casos.map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30"
              }`}
              aria-label={`Ir para depoimento ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

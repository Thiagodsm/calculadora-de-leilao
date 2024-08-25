// src/components/InfoSection.tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/ui/accordion"

const InfoSection = () => {
  return (
    <section id="informacoes" className="py-10">
      <div className="container mx-auto">
        <h2 className="text-xl font-bold mb-4">Informações</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="ano-bissexto">
            <AccordionTrigger>O que é um ano bissexto?</AccordionTrigger>
            <AccordionContent>
              {/* Conteúdo explicando o ano bissexto */}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="feriado-nacional">
            <AccordionTrigger>O que é um feriado nacional?</AccordionTrigger>
            <AccordionContent>
              {/* Conteúdo explicando os feriados nacionais */}
            </AccordionContent>
          </AccordionItem>
          {/* Adicione mais itens de acordo com suas necessidades */}
        </Accordion>
      </div>
    </section>
  );
};

export default InfoSection;

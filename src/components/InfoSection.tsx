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
              Chama-se ano bissexto o ano ao qual é acrescentado um dia extra, ficando com 366 dias, um dia a mais do que os anos normais de 365 dias, 
              ocorrendo a cada quatro anos (exceto anos múltiplos de 100 que não são múltiplos de 400). 
              Isto é feito com o objetivo de manter o calendário anual ajustado com a translação da Terra e com os eventos sazonais relacionados às estações do ano.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="feriado-nacional">
            <AccordionTrigger>O que é um feriado nacional?</AccordionTrigger>
            <AccordionContent>
            Os feriados nacionais são datas comemorativas que celebram eventos importantes para a história do país, como o Dia da Independência, 
            o Dia do Trabalho e o Natal. São dias de descanso para os trabalhadores e também oportunidades para reflexão sobre a importância dessas 
            datas para a construção da identidade nacional.
            </AccordionContent>
          </AccordionItem>
          {/* Adicione mais itens de acordo com suas necessidades */}
        </Accordion>
      </div>
    </section>
  );
};

export default InfoSection;

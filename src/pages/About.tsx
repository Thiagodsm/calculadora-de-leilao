import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import PageMeta from "../features/seo/components/PageMeta";
import PixSupportSection from "../components/PixSupportSection";

export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8 space-y-12">
      <PageMeta
        title="Sobre a Calculadora de Leilão | T.SM"
        description="Conheça a história por trás da calculadora gratuita de leilão imobiliário e a metodologia de cálculo SAC, PRICE, ITBI e IR."
        keywords={["sobre calculadora leilão", "metodologia cálculo leilão", "ITBI SAC PRICE IR leilão"]}
        ogImage="/og-image.svg"
      />

      {/* Missão */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-bold">Calculadora de Leilão Imobiliário</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          Uma ferramenta gratuita e acessível para que qualquer investidor possa simular com precisão
          os custos e o lucro real de imóveis arrematados em leilão extrajudicial — antes de dar o lance.
        </p>
      </div>

      <Separator />

      {/* Sobre o Criador */}
      <div>
        <h2 className="text-xl font-semibold mb-6">Sobre o Criador</h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src="/cropped_circle_image.png"
            alt="Thiago Moreira"
            className="w-32 h-32 rounded-full object-cover border shadow-md shrink-0"
          />
          <div className="text-muted-foreground text-base leading-relaxed text-justify">
            <h3 className="text-lg font-bold text-foreground mb-2">Thiago da Silva Moreira</h3>
            <p>
              Desenvolvedor full stack com experiência em .NET (C#), PL/SQL com Oracle, Java, APIs RESTful e ReactJS com TypeScript.
              Tem muito interesse em criar soluções práticas e simples que resolvem problemas do dia a dia.
              <br /><br />
              Com o objetivo de ajudar outras pessoas a entender melhor os cálculos envolvidos na compra e venda de imóveis de leilão extrajudicial
              — e também aprofundar seus conhecimentos em ReactJS com TypeScript — decidiu desenvolver e compartilhar esta ferramenta gratuita e acessível.
            </p>
          </div>
        </div>
      </div>

      <Separator />

      {/* Metodologia */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Metodologia de Cálculo</h2>
        <p className="text-muted-foreground">
          A calculadora utiliza fórmulas financeiras padrão do mercado brasileiro para garantir resultados precisos e confiáveis.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-lg border p-4 space-y-1">
            <h3 className="font-semibold text-sm">Sistema SAC</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Sistema de Amortização Constante. A amortização é fixa e os juros diminuem mês a mês,
              resultando em parcelas decrescentes ao longo do financiamento.
            </p>
          </div>
          <div className="rounded-lg border p-4 space-y-1">
            <h3 className="font-semibold text-sm">Sistema PRICE</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Parcelas fixas do início ao fim. A composição entre juros e amortização varia a cada mês,
              com juros maiores no início e amortização maior no final.
            </p>
          </div>
          <div className="rounded-lg border p-4 space-y-1">
            <h3 className="font-semibold text-sm">ITBI — Imposto de Transmissão</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Imposto municipal obrigatório na transferência de propriedade. Calculado sobre o valor
              de avaliação ou de transação (o maior). Varia tipicamente entre 2% e 4% conforme o município.
            </p>
          </div>
          <div className="rounded-lg border p-4 space-y-1">
            <h3 className="font-semibold text-sm">Imposto de Renda sobre Ganho de Capital</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Alíquota de 15% sobre o ganho de capital líquido na venda. Isenção para venda até
              R$ 440.000 do único imóvel residencial (mediante condições legais específicas).
            </p>
          </div>
          <div className="rounded-lg border p-4 space-y-1 sm:col-span-2">
            <h3 className="font-semibold text-sm">Comissões e Demais Custos</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Comissão do leiloeiro (0% a 5% dependendo da modalidade da Caixa), comissão de imobiliária
              (tipicamente 6% sobre o valor de venda), IPTU mensal, condomínio e custos de desocupação e reforma.
              Todos os custos são somados ao investimento total para o cálculo do ROI.
            </p>
          </div>
        </div>
      </div>

      <Separator />

      {/* Por que desenvolveu */}
      <div className="space-y-4 text-base text-muted-foreground leading-relaxed text-justify">
        <h2 className="text-xl font-semibold text-foreground">Por que decidi desenvolver a calculadora?</h2>

        <p>
          Tenho observado um crescente interesse em imóveis de leilão, impulsionado por influenciadores e criadores de conteúdo.
          No entanto, percebi que poucos, ou quase nenhum, explicam de forma clara e gratuita quais são os parâmetros que devem ser considerados
          e quais valores realmente precisam ser calculados na hora de comprar ou vender um imóvel arrematado.
        </p>

        <p>
          É fácil encontrar relatos de pessoas que conquistaram seu primeiro imóvel em leilão,
          mas é difícil encontrar conteúdo que detalhe os cálculos necessários e o momento certo para realizá-los.
          As boas ferramentas disponíveis costumam ser pagas, o que cria uma barreira de entrada para quem está começando e sonha em conquistar sua casa própria.
        </p>

        <p>
          Diante disso, decidi me aprofundar nesse universo.
          Assisti a diversos vídeos de especialistas como Jorge Kodama e Priscila Perini para entender de forma prática como os cálculos funcionam.
          Depois de entender os conceitos no papel, comecei a estruturar um projeto simples e acessível,
          que pudesse simular rapidamente todos os custos envolvidos — incluindo ITBI, comissões, impostos e lucro líquido.
        </p>

        <p>
          Muitas pessoas se impressionam com os valores atrativos dos leilões extrajudiciais,
          mas nem sempre sabem o que está por trás: taxas ocultas, prazos curtos, burocracias com a prefeitura,
          desocupação, e os riscos envolvidos.
          Sem esse conhecimento, uma boa oportunidade pode se tornar um grande pesadelo.
        </p>

        <p>
          Por isso, resolvi criar uma ferramenta gratuita, objetiva e fácil de usar — que mostra os principais custos e simula o lucro líquido da operação.
          Se essa calculadora puder te ajudar a tomar uma decisão mais consciente, todo o esforço já terá valido a pena.
        </p>
      </div>

      <Separator />

      {/* CTA */}
      <div className="text-center py-4 space-y-4">
        <h2 className="text-xl font-semibold">Pronto para Simular?</h2>
        <p className="text-muted-foreground">
          Use a calculadora gratuitamente. Sem cadastro, sem limites.
        </p>
        <Button asChild size="lg">
          <Link to="/simulador">Acessar o Simulador →</Link>
        </Button>
      </div>

      <div>
        <PixSupportSection />
      </div>
    </section>
  );
}

export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8 space-y-10">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src="/cropped_circle_image.png"
          alt="Thiago Moreira"
          className="w-32 h-32 rounded-full object-cover border shadow-md"
        />

        <div className="text-muted-foreground text-base leading-relaxed text-justify">
          <h1 className="text-2xl font-bold text-foreground mb-2">Thiago da Silva Moreira</h1>
          <p>
            Desenvolvedor full statck com experiência em .NET (C#), PL/SQL com Oracle, Java, APIs RESTful e ReactJS com Typescript.
            Tenho muito interesse em criar soluções práticas e simples que resolvem problemas do nosso dia a dia. 
            <br />Com o objetivo de ajudar outras pessoas a entender melhor os cálculos envolvidos na compra e venda de imóveis de leilão extrajudicial 
            — e também aprofundar meus conhecimentos em ReactJS com TypeScript — decidi desenvolver e compartilhar esta ferramenta gratuita e acessível.

            
          </p>
        </div>
      </div>

      <div className="space-y-4 text-base text-muted-foreground leading-relaxed text-justify">
        <h2 className="text-xl font-semibold text-foreground">Por decidi desenvolver a calculadora?</h2>

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
          Assisti a diversos vídeos de especialistas como Jorge Kodama e Priscila Perini, irmã do Bruno Perini, para entender de forma prática como os cálculos funcionam. 
          Depois de entender os conceitos no papel, comecei a estruturar um projeto simples e acessível, 
          que pudesse simular rapidamente todos os custos envolvidos — incluindo ITBI, comissões, impostos e lucro líquido.
        </p>

        <p>
          Muitas pessoas se impressionam com os valores atrativos dos leilões extrajudiciais, 
          mas nem sempre sabem o que está por trás: taxas ocultas, prazos curtos, burocracias com a prefeitura, 
          desocupação, e os outro riscos envolvidos. 
          Sem esse conhecimento, uma boa oportunidade pode se tornar um grande pesadelo.
        </p>

        <p>
          Por isso, resolvi criar uma ferramenta gratuita, objetiva e fácil de usar — que mostra os principais custos e simula o lucro líquido da operação. 
          Se essa calculadora puder te ajudar a tomar uma decisão mais consciente, todo o esforço já terá valido a pena.
        </p>

      </div>
    </section>
  );
}

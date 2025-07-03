export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8 space-y-10">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src="/bravus-foto.JPG"
          alt="Thiago Moreira"
          className="w-32 h-32 rounded-full object-cover border shadow-md"
        />

        <div className="text-muted-foreground text-base leading-relaxed">
          <h1 className="text-2xl font-bold text-foreground mb-2">Thiago da Silva Moreira</h1>
          <p>
            Desenvolvedor full statck com experiência em .NET, C#, automações e APIs RESTful.
            Gosto de criar soluções práticas que resolvem problemas do nosso dia a dia.
            Com o intuito de ajudar pessoas que tem duvidas com relação a como calcular 
            os valores envolvidos na compra e venda de imóveis de leilão, decidi estudar mais sobre Reactjs e Typescript 
            para desenvolver essa calculadora de leilão.
          </p>
        </div>
      </div>

      <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
        <h2 className="text-xl font-semibold text-foreground">Por decidi desenvolver a calculadora?</h2>

        <p>
          Muitas pessoas sonham em conquistar um imóvel próprio, e os leilões extrajudiciais
          são uma opção que chama atenção pelos preços. Mas na prática, pouca gente sabe o que
          está envolvido: custos extras, comissões, impostos, prazos... tudo isso precisa ser
          considerado para saber se a compra realmente vale a pena.
        </p>

        <p>
          A ideia dessa calculadora surgiu justamente dessa falta de clareza. Eu mesmo via várias dúvidas em grupos e fóruns.
          Mesmo quem entende o básico, muitas vezes não sabe como calcular os valores corretamente ou o que precisa pagar após a arrematação.
        </p>

        <p>
          Por isso, resolvi criar uma ferramenta simples, direta e gratuita — que mostra todos os custos e simula o lucro líquido da operação.
          Se essa calculadora puder ajudar você a tomar uma decisão mais consciente, já valeu todo o esforço.
        </p>
      </div>
    </section>
  );
}

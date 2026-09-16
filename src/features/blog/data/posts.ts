import type { ArticlePost } from "../types";

export const posts: ArticlePost[] = [
  {
    slug: "como-calcular-lucro-leilao-imobiliario",
    title: "Como Calcular o Lucro Real de um Imóvel em Leilão Extrajudicial",
    summary:
      "Aprenda passo a passo como calcular o lucro líquido de um imóvel arrematado em leilão da Caixa, considerando todos os custos ocultos.",
    publishedAt: "2026-09-16",
    readingTimeMinutes: 5,
    keywords: [
      "calcular lucro leilão",
      "leilão extrajudicial caixa",
      "lucro imóvel leilão",
      "custos leilão imobiliário",
    ],
    content: `
<h2>Por que calcular o lucro antes de dar o lance?</h2>
<p>
  Muitos investidores iniciantes cometem o erro de avaliar um leilão apenas pelo preço do lance mínimo.
  Um imóvel com lance inicial de R$ 120.000 pode parecer uma pechincha — até você descobrir que há
  dívidas de condomínio, IPTU atrasado, necessidade de reforma e uma comissão de leiloeiro de 5%.
  O lucro real pode ser muito menor do que o esperado, ou até negativo.
</p>
<p>
  Por isso, calcular o lucro antes de dar o lance é tão importante quanto visitar o imóvel.
  A seguir, vamos mostrar como fazer isso de forma estruturada.
</p>

<h2>Os quatro grupos de custos que você precisa conhecer</h2>

<h3>1. Custos de Aquisição</h3>
<p>
  São os custos pagos no ato da arrematação ou logo após:
</p>
<ul>
  <li><strong>Lance de arrematação</strong>: o valor que você pagou no leilão.</li>
  <li><strong>Comissão do leiloeiro</strong>: varia de 0% a 5% dependendo da modalidade da Caixa.
      No 1º e 2º Leilão SFI, o comprador paga 5%. Nas demais modalidades (Licitação Aberta,
      Concorrência Fechada, Venda Direta), a Caixa arca com essa comissão.</li>
  <li><strong>ITBI</strong>: imposto municipal obrigatório na transferência do imóvel. Varia entre
      2% e 4% conforme o município.</li>
  <li><strong>Registro em cartório</strong>: custo da escritura e registro no cartório de imóveis.
      Varia por estado, geralmente entre 1% e 2% do valor do imóvel.</li>
  <li><strong>Desocupação</strong>: caso o imóvel esteja ocupado, pode haver custos com a reintegração
      de posse (honorários advocatícios, etc.).</li>
  <li><strong>Reforma e adaptação</strong>: custo para deixar o imóvel em condições de venda.</li>
</ul>

<h3>2. Custos de Manutenção (Holding)</h3>
<p>
  São os custos mensais que você pagará enquanto o imóvel não é vendido:
</p>
<ul>
  <li><strong>IPTU mensal</strong>: valor anual dividido por 12.</li>
  <li><strong>Condomínio mensal</strong>: se o imóvel for em condomínio.</li>
  <li><strong>Parcelas do financiamento</strong>: se você financiou, cada mês sem vender é uma parcela a mais.</li>
</ul>
<p>
  Esses custos são multiplicados pelo prazo estimado de venda (em meses). Se você estima vender em 6 meses
  e o IPTU mensal é R$ 200 e o condomínio é R$ 500, o custo de manutenção total será R$ 4.200.
</p>

<h3>3. Custos de Financiamento</h3>
<p>
  Se você comprou o imóvel financiado pela Caixa (muito comum nos leilões extrajudiciais), os custos incluem:
</p>
<ul>
  <li><strong>Entrada (down payment)</strong>: percentual do valor financiado pago no ato.</li>
  <li><strong>Parcelas SAC ou PRICE</strong>: os pagamentos mensais do financiamento até a venda.</li>
  <li><strong>Saldo devedor na data da venda</strong>: o valor que ainda resta do financiamento e que
      será quitado com o produto da venda.</li>
</ul>

<h3>4. Custos de Venda</h3>
<ul>
  <li><strong>Comissão da imobiliária</strong>: tipicamente 6% sobre o valor de venda.</li>
  <li><strong>Imposto de Renda (ganho de capital)</strong>: 15% sobre o lucro líquido da venda.
      Há isenção para vendas até R$ 440.000 do único imóvel residencial, sob condições específicas.</li>
</ul>

<h2>Exemplo Prático: Cálculo Passo a Passo</h2>
<p>
  Vamos simular um caso concreto para entender como funciona na prática.
</p>
<p><strong>Dados do imóvel:</strong></p>
<ul>
  <li>Lance de arrematação: R$ 150.000</li>
  <li>Valor esperado de venda: R$ 220.000</li>
  <li>Prazo estimado para venda: 6 meses</li>
  <li>Modalidade: 2º Leilão SFI (financiado, entrada 5%, taxa 7,25% a.a.)</li>
</ul>

<p><strong>Custos calculados:</strong></p>
<ul>
  <li>Comissão do leiloeiro (5%): R$ 7.500</li>
  <li>ITBI (3%): R$ 4.500</li>
  <li>Registro em cartório: R$ 2.000</li>
  <li>Reforma estimada: R$ 5.000</li>
  <li>IPTU mensal × 6 meses: R$ 1.200</li>
  <li>Entrada (5%): R$ 7.500</li>
  <li>Parcelas SAC (6 meses): ~R$ 7.800</li>
  <li>Saldo devedor na venda: ~R$ 137.000</li>
  <li>Comissão imobiliária (6%): R$ 13.200</li>
  <li>IR (15% sobre ganho): ~R$ 3.600</li>
</ul>

<p><strong>Resultado:</strong></p>
<ul>
  <li>Total de custos: ~R$ 189.300</li>
  <li>Lucro líquido estimado: R$ 220.000 − R$ 189.300 = <strong>R$ 30.700</strong></li>
  <li>ROI: R$ 30.700 ÷ (entrada + custos diretos) ≈ <strong>~40%</strong> sobre o capital próprio investido</li>
</ul>

<h2>Use a Calculadora para Automatizar esse Processo</h2>
<p>
  Fazer esse cálculo manualmente é trabalhoso e sujeito a erros. Nossa calculadora gratuita faz
  tudo isso automaticamente: você insere os dados do imóvel, as condições do financiamento e o
  prazo estimado de venda, e ela retorna o lucro líquido, ROI, ROE, tabela de parcelas SAC ou PRICE
  e uma análise de sensibilidade para diferentes cenários de preço e prazo.
</p>
`,
  },
  {
    slug: "o-que-e-itbi-em-leilao-caixa",
    title: "O que é ITBI no Leilão da Caixa e Como Ele Afeta o Lucro",
    summary:
      "Entenda o que é o ITBI, como ele é calculado em leilões da Caixa, a variação por município e o impacto real no lucro da operação.",
    publishedAt: "2026-09-10",
    readingTimeMinutes: 4,
    keywords: [
      "ITBI leilão caixa",
      "o que é ITBI",
      "calcular ITBI imóvel",
      "ITBI leilão extrajudicial",
    ],
    content: `
<h2>O que é o ITBI?</h2>
<p>
  O ITBI (Imposto sobre Transmissão de Bens Imóveis) é um tributo municipal cobrado sempre que
  há transferência de propriedade de um imóvel entre pessoas vivas — seja por compra e venda,
  doação (com reserva de usufruto) ou arrematação em leilão.
</p>
<p>
  No caso dos leilões extrajudiciais da Caixa Econômica Federal, o comprador que arremata o imóvel
  é responsável pelo pagamento do ITBI junto à prefeitura do município onde o imóvel está localizado.
</p>

<h2>Qual é a alíquota do ITBI?</h2>
<p>
  Por ser um imposto municipal, a alíquota do ITBI varia de cidade para cidade. Em geral, as
  alíquotas praticadas no Brasil ficam entre <strong>2% e 4%</strong> do valor do imóvel.
</p>
<p>Exemplos de alíquotas por município:</p>
<ul>
  <li><strong>São Paulo (SP):</strong> 3% do valor de transação ou venal (o maior)</li>
  <li><strong>Rio de Janeiro (RJ):</strong> 2% para financiamentos, 3% para compras à vista</li>
  <li><strong>Campinas (SP):</strong> 2%</li>
  <li><strong>Guarulhos (SP):</strong> 3%</li>
  <li><strong>Belo Horizonte (MG):</strong> 3%</li>
</ul>
<p>
  Antes de calcular o lucro de um leilão, verifique a alíquota do ITBI no site da prefeitura
  do município onde o imóvel está localizado.
</p>

<h2>Qual é a base de cálculo do ITBI?</h2>
<p>
  A base de cálculo do ITBI é o maior entre dois valores:
</p>
<ul>
  <li><strong>Valor venal</strong>: valor cadastrado na prefeitura para fins de IPTU (nem sempre atualizado).</li>
  <li><strong>Valor de transação</strong>: o valor pelo qual o imóvel foi arrematado (o lance).</li>
</ul>
<p>
  Em leilões, como o lance de arrematação tende a ser inferior ao valor de mercado,
  é comum que a prefeitura use o valor venal como base — o que pode resultar em um ITBI
  ligeiramente diferente do esperado ao multiplicar a alíquota pelo lance.
</p>

<h2>Como o ITBI impacta o lucro do leilão?</h2>
<p>
  O ITBI é um custo direto e não negociável. Ele deve ser pago antes do registro do imóvel em cartório.
  Sem o pagamento do ITBI, não é possível transferir a propriedade para o nome do arrematante.
</p>
<p>Exemplo de impacto:</p>
<ul>
  <li>Lance de arrematação: R$ 200.000</li>
  <li>ITBI (3%): R$ 6.000</li>
  <li>Esse valor sai direto do lucro potencial da operação.</li>
</ul>
<p>
  Em uma operação com margem apertada, um ITBI de 3% pode ser a diferença entre lucro e prejuízo.
  Por isso, nunca esqueça de incluí-lo no seu cálculo antes de dar o lance.
</p>

<h2>ITBI em Imóveis Financiados pela Caixa</h2>
<p>
  Quando o imóvel é adquirido via financiamento bancário, algumas prefeituras permitem um desconto
  ou redução na alíquota do ITBI (geralmente de 3% para 2%). Isso ocorre porque parte do valor é
  financiada, não transmitida diretamente em espécie. Verifique essa condição na prefeitura local.
</p>

<h2>Como calcular rapidamente</h2>
<p>
  A fórmula é simples:
</p>
<p>
  <strong>ITBI = valor base × alíquota do município</strong>
</p>
<p>
  Exemplo: imóvel com base de cálculo R$ 180.000 em São Paulo (3%) → ITBI = R$ 5.400.
</p>
<p>
  Nossa calculadora já inclui o ITBI automaticamente no cálculo do lucro. Basta informar o
  percentual de ITBI do seu município e o restante é calculado automaticamente junto com
  todos os outros custos da operação.
</p>
`,
  },
];

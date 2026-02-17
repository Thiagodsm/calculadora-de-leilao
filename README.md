# Calculadora de Leilão 🏠📊

**Calculadora de Leilão** é uma aplicação web desenvolvida em **React + Vite + ShadCN + TailwindCSS** que simula a compra e venda de imóveis de leilão da Caixa Econômica Federal, calculando **custos totais, lucro bruto e lucro líquido** com base em parâmetros realistas do mercado imobiliário.

A ferramenta foi criada para investidores imobiliários avaliarem a viabilidade financeira de imóveis arrematados em leilão, considerando financiamento, impostos, taxas, despesas operacionais e custos de venda.

---

## 🌐 Acesse a Aplicação

👉 https://calculadoradeleilao.com/

---

## 🚀 Funcionalidades

### 🧮 Simulador de Leilão de Imóveis
O usuário preenche um formulário com dados da operação, e a aplicação gera um **demonstrativo financeiro completo**.

---

### 🔹 Dados de Entrada

#### **Valores do Imóvel**
- Valor de Arrematação  
- Valor de Venda  

#### **Financiamento**
- Porcentagem de Entrada (%)  
- Taxa de Juros Anual (%)  
- Prazo de Financiamento (meses)  
- Sistema de Amortização:
  - Price  
  - SAC  

#### **Custos para Arrematar**
- Comissão do Leiloeiro (%)  
- ITBI (%)  
- Registro do Imóvel  
- Gastos com Desocupação  
- Reformas  
- Outros Gastos  
- Dívidas do Imóvel (IPTU, condomínio, penhoras, etc.)  

#### **Custos até a Venda**
- Prazo de Venda (meses)  
- IPTU Mensal  
- Condomínio Mensal  

#### **Custos de Venda**
- Comissão da Imobiliária (%)  
- Imposto de Renda (%)  

---

## 📈 Resultados Gerados

A aplicação calcula e exibe:

- Custos totais de aquisição  
- Custos do financiamento (entrada, parcelas e saldo devedor)  
- Custos operacionais até a venda  
- Custos de venda  
- Total investido  
- Saldo devedor quitado com a venda  
- **Lucro bruto**  
- **Lucro líquido**  
- **Retorno sobre o investimento (ROI %)**  

Além disso, são exibidos **cards com barras de progresso** indicando:
- Total investido  
- Lucro líquido  

---

## 🖥️ Tecnologias Utilizadas

- **React 19**
- **Vite**
- **TypeScript**
- **TailwindCSS**
- **ShadCN UI**
- **React Hook Form + Zod**
- **Recharts**
- **Radix UI**
- **Netlify (Hosting)**
- **Porkbun (Domínio)**
- **Tema UI gerado via https://tweakcn.com/**

---

## ⚙️ Como Rodar o Projeto Localmente

### 1️⃣ Pré-requisitos

- Node.js **>= 20**
- npm ou yarn

---

### 2️⃣ Clone o repositório
```bash
git clone https://github.com/seu-usuario/calculadora-de-leilao.git
cd calculadora-de-leilao
```

### 3️⃣ Instale as dependências
```bash
npm install
```

### 4️⃣ Execute em modo desenvolvimento
```bash
npm run dev
```

A aplicação estará disponível em:

```bash
http://localhost:5173
```


### 5️⃣ Build para produção
```bash
npm run build
```

### 6️⃣ Preview do build
```bash
npm run preview
```

### 📂 Scripts Disponíveis

```bash
"scripts": {
  "dev": "vite",
  "build": "tsc -b && vite build",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

## 📂 Estrutura do Projeto

```bash
src/
├── components/
│   ├── Layout/          # Componentes de layout (Header, Sidebar, Footer, etc.)
│   └── ui/               # Componentes reutilizáveis (ShadCN UI)
│
├── features/
│   └── simulator/        # Módulo principal da Calculadora de Leilão
│       ├── components/    # Componentes específicos do simulador
│       ├── constants/     # Constantes de negócio (taxas, defaults, labels)
│       ├── domain/         # Regras de negócio (SAC, Price, cálculos financeiros)
│       ├── schemas/        # Schemas de validação (Zod / React Hook Form)
│       ├── types/           # Tipagens TypeScript
│       └── utils/           # Funções auxiliares do simulador
│
├── hooks/                 # Hooks customizados (React)
├── lib/                   # Helpers e utilidades globais
├── pages/                 # Páginas da aplicação (routes)
└── schemas/               # Schemas globais de validação



## 🎯 Roadmap

- [ ] Exportação do demonstrativo para Excel  
- [ ] Histórico de simulações  
- [ ] Comparação entre imóveis  
- [ ] Integração com preços de mercado por região  
- [ ] IA para recomendação de oportunidades de leilão  

---

## 🤝 Contribuição

1. Faça um **fork** do projeto  
2. Crie uma branch para sua feature:  
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import CalculosLeilaoExtrajudicial from "./pages/CalculosLeilaoExtrajudicial";
import CalculosTrabalhistas from "./pages/CalculosTrabalhistas";
import CalculosFinanceiros from "./pages/CalculosFinanceiros";
import CalculosDatas from "./pages/CalculosDatas";
import CalculosCalorias from "./pages/CalculosCalorias";
import RelogioMundial from "./pages/RelogioMundial";
import FasesDaLua from "./pages/FasesDaLua";
import ConversaoMoedas from "./pages/ConversaoMoedas";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/calculos-leilao-extrajudicial" element={<CalculosLeilaoExtrajudicial />} />
          <Route path="/calculos-trabalhistas" element={<CalculosTrabalhistas />} />
          <Route path="/calculos-financeiros" element={<CalculosFinanceiros />} />
          <Route path="/calculos-datas" element={<CalculosDatas />} />
          <Route path="/calculos-calorias" element={<CalculosCalorias />} />
          <Route path="/relogio-mundial" element={<RelogioMundial />} />
          <Route path="/fases-da-lua" element={<FasesDaLua />} />
          <Route path="/conversao-moedas" element={<ConversaoMoedas />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

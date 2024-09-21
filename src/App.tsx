import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import CalculoDatas from "./pages/CalculaDatas";
import CalculaFerias from "./pages/CalculaFerias";
import CalculaFgts from "./pages/CalculaFgts";
import CalculaJuros from "./pages/CalculaJuros";
import CalculaRecisao from "./pages/CalculaRecisao";
import CalculaPoupanca from "./pages/CalculaPoupanca";
import CalculaPorcentagem from "./pages/CalculaPorcentagem";
import CalculaImovelVista from "./pages/CalculaImovelVista";
import CalculaImovelFinanciado from "./pages/CalculaImovelFinanciado";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/calculo-datas" element={<CalculoDatas />} />
          <Route path="/calcula-ferias" element={<CalculaFerias />} />
          <Route path="/calcula-fgts" element={<CalculaFgts />} />
          <Route path="/calcula-juros" element={<CalculaJuros />} />
          <Route path="/calcula-recisao" element={<CalculaRecisao />} />
          <Route path="/calcula-poupanca" element={<CalculaPoupanca />} />
          <Route path="/calcula-porcentagem" element={<CalculaPorcentagem />} />
          <Route path="/calcula-compra-imovel-a-vista" element={<CalculaImovelVista />} />
          <Route path="/calcula-compra-imovel-financiado" element={<CalculaImovelFinanciado />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

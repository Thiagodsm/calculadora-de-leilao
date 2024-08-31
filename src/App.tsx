import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CalculoDatas from "./pages/CalculaDatas";
import CalculaFerias from "./pages/CalculaFerias";
import CalculaFgts from "./pages/CalculaFgts";
import CalculaJuros from "./pages/CalculaJuros";
import CalculaRecisao from "./pages/CalculaRecisao";
import CalculaPoupanca from "./pages/CalculaPoupanca";
import CalculaPorcentagem from "./pages/CalculaPorcentagem";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="/calculo-datas" element={<CalculoDatas />} />
          <Route path="/calcula-ferias" element={<CalculaFerias />} />
          <Route path="/calcula-fgts" element={<CalculaFgts />} />
          <Route path="/calcula-juros" element={<CalculaJuros />} />
          <Route path="/calcula-recisao" element={<CalculaRecisao />} />
          <Route path="/calcula-poupanca" element={<CalculaPoupanca />} />
          <Route path="/calcula-porcentagem" element={<CalculaPorcentagem />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import Home from "./pages/Home";
import CalculosLeilaoExtrajudicial from "./pages/CalculosLeilaoExtrajudicial";
import CalculosTrabalhistas from "./pages/CalculosTrabalhistas";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/calculos-leilao-extrajudicial" element={<CalculosLeilaoExtrajudicial />} />
          <Route path="/calculos-trabalhistas" element={<CalculosTrabalhistas />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
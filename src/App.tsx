import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import CalculosLeilaoExtrajudicial from "./pages/CalculosLeilaoExtrajudicial";
import { SimulatorPage } from "./features/simulator/SimulatorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/calculos-leilao-extrajudicial" element={<CalculosLeilaoExtrajudicial />} />
          <Route path="/simulator" element={<SimulatorPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
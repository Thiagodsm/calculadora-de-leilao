import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import Providers from "./components/Layout/Provider";
import Home from "./pages/Home";
import { SimulatorPage } from "./features/simulator/SimulatorPage";
import About from "./pages/About";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Providers>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<MainLayout />}>
            <Route path="/simulador" element={<SimulatorPage />} />
            <Route path="/sobre" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </Providers>
  );
}

export default App;

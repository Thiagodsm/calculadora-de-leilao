import { ThemeProvider } from "./components/ui/theme-provider";
import { ModeToggle } from "./components/ui/mode-toggle";
import { Routes, Route } from "react-router-dom"; 
import Sidebar from "./components/Sidebar"; 
import CalculoDatas from "./pages/CalculaDatas";
import CalculaFerias from "./pages/CalculaFerias";
import CalculaFgts from "./pages/CalculaFgts";
import CalculaJuros from "./pages/CalculaJuros";
import CalculaRecisao from "./pages/CalculaRecisao";
import CalculaPoupanca from "./pages/CalculaPoupanca";
import CalculaPorcentagem from "./pages/CalculaPorcentagem";
import { useState } from "react";
import {Menu} from 'lucide-react';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen flex">
        {/* Sidebar para dispositivos maiores */}
        <div className="hidden md:flex">
          <Sidebar />
        </div>
        
        {/* Menu hamburguer para dispositivos menores */}
        <div className="md:hidden">
          <button
            className="p-2"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {/* Icone do menu hamburguer */}
            <Menu className="w-6 h-6 text-white" />
          </button>
          {isSidebarOpen && <Sidebar />}
        </div>

        <div className="flex-1 flex flex-col">
          <header className="p-2">
            <ModeToggle />
          </header>
          <main className="flex-grow mt-4 p-4">
            <Routes>
              <Route path="/" element={<CalculoDatas />} />
              <Route path="/calculo-datas" element={<CalculoDatas />} />
              <Route path="/calcula-ferias" element={<CalculaFerias />} />
              <Route path="/calcula-fgts" element={<CalculaFgts />} />
              <Route path="/calcula-juros" element={<CalculaJuros />} />
              <Route path="/calcula-recisao" element={<CalculaRecisao />} />
              <Route path="/calcula-poupanca" element={<CalculaPoupanca />} />
              <Route path="/calcula-porcentagem" element={<CalculaPorcentagem />} />
            </Routes>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

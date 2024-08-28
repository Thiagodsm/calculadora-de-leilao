import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-full p-5 flex flex-col">
      <nav className="flex flex-col space-y-4">
        <Link to="/calculo-datas" className="text-lg font-semibold hover:bg-gray-700 p-2 rounded">
          Cálculo de Datas
        </Link>
        <Link to="/calcula-ferias" className="text-lg font-semibold hover:bg-gray-700 p-2 rounded">
          Calculadora de Férias
        </Link>
        <Link to="/calcula-fgts" className="text-lg font-semibold hover:bg-gray-700 p-2 rounded">
          Calculadora de FGTS
        </Link>
        <Link to="/calcula-juros" className="text-lg font-semibold hover:bg-gray-700 p-2 rounded">
          Calculadora de Juros
        </Link>
        <Link to="/calcula-recisao" className="text-lg font-semibold hover:bg-gray-700 p-2 rounded">
          Calculadora de Rescisão
        </Link>
        <Link to="/calcula-poupanca" className="text-lg font-semibold hover:bg-gray-700 p-2 rounded">
          Calculadora de Poupança
        </Link>
        <Link to="/calcula-porcentagem" className="text-lg font-semibold hover:bg-gray-700 p-2 rounded">
          Calculadora de Porcentagem
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;

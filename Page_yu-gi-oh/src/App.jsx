import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Compras from "./components/Compras/compras.jsx";

function App() {
  const [carrinho, setCarrinho] = useState([]);

  // Função para adicionar itens ao carrinho
  const adicionarAoCarrinho = (produto) => {
    setCarrinho((prev) => {
      const index = prev.findIndex((p) => p.id === produto.id);
      if (index !== -1) {
        const newCarrinho = [...prev];
        newCarrinho[index].quantidade += 1;
        return newCarrinho;
      }
      return [...prev, { ...produto, quantidade: 1 }];
    });
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home carrinho={carrinho} adicionarAoCarrinho={adicionarAoCarrinho} />}
        />
        <Route
          path="/compras"
          element={<Compras carrinho={carrinho} />}
        />
      </Routes>
    </Router>
  );
}

export default App;

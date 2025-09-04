import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Carrinho from "./pages/carrinho/Carrinho.jsx";

function App() {
  const [carrinho, setCarrinho] = useState(() => {
    const carrinhoSalvo = localStorage.getItem("carrinho");
    return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];
  });

  useEffect(() => {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
  }, [carrinho]);

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

  const limparCarrinho = () => {
    setCarrinho([]);
    localStorage.removeItem("carrinho");
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              carrinho={carrinho}
              adicionarAoCarrinho={adicionarAoCarrinho}
            />
          }
        />
        <Route
          path="/compras"
          element={
            <Carrinho carrinho={carrinho} limparCarrinho={limparCarrinho} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

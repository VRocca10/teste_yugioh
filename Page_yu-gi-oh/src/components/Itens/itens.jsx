import { useState } from "react";
import "./style.scss";
import Card from "../Card/card.jsx";

function Itens() {
    const [itensPorPagina, setItensPorPagina] = useState(10);
    const [paginaAtual, setPaginaAtual] = useState(1);

    const dados = Array.from({ length: 50 }, (_, i) => ({
        id: i + 1,
        titulo: `ARTMAGE FINMEL`,
        preco: (Math.random() * 100).toFixed(2),
    }));
    const totalPaginas = Math.ceil(dados.length / itensPorPagina);

    const inicio = (paginaAtual - 1) * itensPorPagina;
    const fim = inicio + itensPorPagina;
    const itensPagina = dados.slice(inicio, fim);

    return (
        <div className="box">
            <div className="topo-controles">
                <div className="controle-itens">
                    <label className="dropdown-label">
                        <select
                            value={itensPorPagina}
                            onChange={(e) => {
                                setItensPorPagina(Number(e.target.value));
                                setPaginaAtual(1);
                            }}
                            className="dropdown"
                        >
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                        </select>
                        <span>itens por página</span>
                    </label>
                </div>

                <div className="paginacao">
                    <button onClick={() => setPaginaAtual(paginaAtual - 1)} disabled={paginaAtual === 1}>
                        &lt;
                    </button>

                    {Array.from({ length: totalPaginas }, (_, i) => {
                        if (i + 1 >= paginaAtual - 2 && i + 1 <= paginaAtual + 2) {
                            return (
                                <button
                                    key={i}
                                    onClick={() => setPaginaAtual(i + 1)}
                                    className={paginaAtual === i + 1 ? "ativo" : ""}
                                >
                                    {i + 1}
                                </button>
                            );
                        }
                        return null;
                    })}

                    <button onClick={() => setPaginaAtual(paginaAtual + 1)} disabled={paginaAtual === totalPaginas}>
                        &gt;
                    </button>
                </div>
            </div>

            <div className="lista-cards">
                {itensPagina.map((item) => (
                    <Card key={item.id} titulo={item.titulo} preco={`R$${item.preco}`} />
                ))}
            </div>
        </div>
    );
}

export default Itens;

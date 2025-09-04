import { useState, useEffect } from "react";
import Card from "../Card/Card.jsx";
import "./style.scss";

function Itens({ filtros, termoBusca, adicionarAoCarrinho }) {
    const [itensPorPagina, setItensPorPagina] = useState(10);
    const [paginaAtual, setPaginaAtual] = useState(1);
    const [dados, setDados] = useState([]);
    const [totalCards, setTotalCards] = useState(0);
    const [loading, setLoading] = useState(false);

    const fetchDados = async (pagina, limite, filtrosSelecionados = [], busca = "") => {
        try {
            setLoading(true);
            let offset = (pagina - 1) * limite;
            let url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?num=${limite}&offset=${offset}`;

            // Adiciona filtros
            if (filtrosSelecionados.length > 0) {
                const params = filtrosSelecionados
                    .map((filtro) => `race=${encodeURIComponent(filtro)}`)
                    .join("&");
                url += `&${params}`;
            }

            // Adiciona termo de busca
            if (busca && busca.trim().length >= 1) {
                url += `&fname=${encodeURIComponent(busca.trim())}`;
            }

            const response = await fetch(url);
            const data = await response.json();

            setDados(data.data || []);
            setTotalCards(data.meta?.total_count || 14000); // fallback
        } catch (error) {
            console.error("Erro ao buscar cartas:", error);
            setDados([]);
            setTotalCards(0);
        } finally {
            setLoading(false);
        }
    };

    // Atualiza dados sempre que mudar pagina, filtros, termo de busca ou itens por página
    useEffect(() => {
        fetchDados(paginaAtual, itensPorPagina, filtros, termoBusca);
    }, [paginaAtual, itensPorPagina, filtros, termoBusca]);

    const totalPaginas = Math.ceil(totalCards / itensPorPagina);

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
                {loading ? (
                    <p>Carregando...</p>
                ) : dados.length === 0 ? (
                    <p>Nenhuma carta encontrada</p>
                ) : (
                    dados.map((item) => (
                        <Card
                            key={item.id}
                            titulo={item.name}
                            preco={item.atk ?? 0}
                            imagem={item.card_images[0].image_url}
                            adicionarAoCarrinho={() =>
                                adicionarAoCarrinho({
                                    id: item.id,
                                    titulo: item.name,
                                    preco: item.atk ?? 0,
                                    imagem: item.card_images[0].image_url,
                                    descricao: `ATK: ${item.atk ?? "N/A"} / DEF: ${item.def ?? "N/A"}`,
                                })
                            }
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default Itens;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import Logo from "../../assets/logo.svg";
import Icon from "../../assets/icons_carrinho.svg";

function Header({ cartCount }) {
    const [search, setSearch] = useState("");
    const [resultados, setResultados] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchCards = async () => {
            if (search.trim().length < 3) {
                setResultados([]);
                return;
            }
            setLoading(true);
            try {
                const res = await fetch(
                    `https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${search}`
                );
                const data = await res.json();
                setResultados(data.data?.slice(0, 10) || []); // mostra só 10 primeiros
            } catch (err) {
                console.error("Erro ao buscar cards:", err);
                setResultados([]);
            } finally {
                setLoading(false);
            }
        };

        const delay = setTimeout(fetchCards, 500); // debounce 500ms
        return () => clearTimeout(delay);
    }, [search]);

    return (
        <header className="header">
            <img className="item_logo" src={Logo} alt="Logo" />

            <div className="search_container">
                <input
                    type="text"
                    className="search_bar"
                    placeholder="Pesquisar..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                {loading && <div className="search_loading">Carregando...</div>}

                {resultados.length > 0 && (
                    <ul className="search_results">
                        {resultados.map((card) => (
                            <li key={card.id}>{card.name}</li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="cart_icon_container">
                <Link to="/compras">
                    <img className="item_carrinho" src={Icon} alt="Carrinho" />
                    {cartCount > 0 && <span className="cart_count">{cartCount}</span>}
                </Link>
            </div>
        </header>
    );
}

export default Header;

import { Link } from "react-router-dom";
import "./style.scss";
import Logo from "../../assets/logo.svg";
import Icon from "../../assets/icons_carrinho.svg";

function Header({ cartCount, termoBusca, setTermoBusca, onBuscar }) {
    return (
        <header className="header">
            <img className="item_logo" src={Logo} alt="Logo" />

            <div className="search_container">
                <input
                    type="text"
                    className="search_bar"
                    placeholder="Pesquisar..."
                    value={termoBusca}
                    onChange={(e) => setTermoBusca(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") onBuscar(termoBusca);
                    }}
                    onClick={(e) => {
                        const larguraInput = e.target.offsetWidth;
                        const cliqueX = e.nativeEvent.offsetX;
                        
                        if (cliqueX > larguraInput - 30) {
                            onBuscar(termoBusca);
                        }
                    }}
                />
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

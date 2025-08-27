import { Link } from "react-router-dom";
import "./style.scss";
import Logo from "../../assets/logo.svg";
import Icon from "../../assets/icons_carrinho.svg";

function Header({ cartCount }) {
    return (
        <header className="header">
            <img className="item_logo" src={Logo} alt="Logo" />
            <input type="text" className="search_bar" placeholder="Pesquisar..." />
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

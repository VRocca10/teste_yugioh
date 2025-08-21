import "./style.css";
import Logo from "../../assets/logo.svg";
import Icon from "../../assets/icons_carrinho.svg";

function Header() {
    return (
        <div>
            <header>
                <div className="container-fluid">
                    <img className="item_logo" src={Logo} alt="Logo da página" />
                    <input
                        type="text"
                        className="search_bar"
                        placeholder="Pesquisar..."
                    />
                    <img className="item_carrinho" src={Icon} alt="" />
                </div>
            </header>
        </div>
    );
}

export default Header;
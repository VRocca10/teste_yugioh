import "./style.scss";
import Header from "../../components/header/header";
import Compras from "../../components/Compras/compras";
import Footer from "../../components/Footer/footer";

function Carrinho({ carrinho, limparCarrinho }) {
    return (
        <div >
            <div className="row">
                <div className="col-12">
                    <Header />
                </div>
            </div>

            <div className="row">
                <div className="col-12 compras-wrapper">
                    <Compras carrinho={carrinho} limparCarrinho={limparCarrinho} />
                </div>
            </div>

            <div className="row">
                <div className="col-12 footer-wrapper">
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Carrinho;

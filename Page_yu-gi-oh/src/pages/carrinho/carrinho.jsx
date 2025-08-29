import "./style.scss";
import Header from "../../components/header/header";
import Compras from "../../components/Compras/compras";
import Footer from "../../components/Footer/footer";

function Carrinho() {
    return (
        <div className="container-fluid carrinho-container">
            <div className="row">
                <div className="col-12">
                    <Header />
                </div>
            </div>

            <div className="row">
                <div className="col-12 compras-wrapper">
                    <Compras />
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

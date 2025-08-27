import "./style.scss";
import Header from "../../components/header/header";
import Compras from "../../components/Compras/compras";
import Footer from "../../components/Footer/footer";

function Carrinho() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <Header />
                </div>
            </div>

            <div>
                <Compras />
            </div>

            <div>
                <Footer />
            </div>

        </div>
    )
}

export default Carrinho;
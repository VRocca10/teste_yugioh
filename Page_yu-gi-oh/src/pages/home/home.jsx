import Header from "../../components/header/header.jsx"
import Filtros from "../../components/Filtros/filtros.jsx"
import Paginacao from "../../components/Paginacao/paginacao.jsx";
import Itens from "../../components/itens/itens.jsx";
import Card from "../../components/Card/card.jsx";
import Footer from "../../components/Footer/footer.jsx";
import "./style.scss";

function Home() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <Header />
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-md-2">
                    <Filtros />
                </div>

                <div className="col-md-10">
                    <div className="mb-3">
                        <Paginacao />
                    </div>
                    <div className="mb-3">
                        <Itens />
                    </div>
                    <div className="mb-3">
                        {/* <Card /> */}
                    </div>
                </div>
            </div>

            <div className="row mt-4 ">
                <div className="col-md-12">
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Home;
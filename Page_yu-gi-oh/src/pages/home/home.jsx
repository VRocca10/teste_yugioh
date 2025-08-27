import { useState } from "react";
import Header from "../../components/header/header.jsx";
import Filtros from "../../components/Filtros/filtros.jsx";
import Paginacao from "../../components/Paginacao/paginacao.jsx";
import Itens from "../../components/itens/itens.jsx";
import Footer from "../../components/Footer/footer.jsx";
import "./style.scss";

function Home({ carrinho, adicionarAoCarrinho }) {
    const [filtros, setFiltros] = useState([]);

    const handlePesquisar = (selecionados) => setFiltros(selecionados);
    const handleLimpar = () => setFiltros([]);

    return (
        <div className="container-fluid">
            <Header cartCount={carrinho.reduce((acc, item) => acc + item.quantidade, 0)} />
            <div className="row mt-3">
                <div className="col-md-2">
                    <Filtros onPesquisar={handlePesquisar} onLimpar={handleLimpar} />
                </div>
                <div className="col-md-10">
                    <Paginacao />
                    <Itens filtros={filtros} adicionarAoCarrinho={adicionarAoCarrinho} />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;

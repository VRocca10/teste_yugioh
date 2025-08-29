import { useState } from "react";
import Header from "../../components/header/header.jsx";
import Filtros from "../../components/Filtros/filtros.jsx";
import Paginacao from "../../components/Paginacao/paginacao.jsx";
import Itens from "../../components/itens/itens.jsx";
import Footer from "../../components/Footer/footer.jsx";
import Modal from "../../components/Modal/modal.jsx";
import "./style.scss";

function Home({ carrinho, adicionarAoCarrinho }) {
    const [filtros, setFiltros] = useState([]);
    const [modalMessage, setModalMessage] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handlePesquisar = (selecionados) => setFiltros(selecionados);
    const handleLimpar = () => setFiltros([]);

    const handleAdicionar = (produto) => {
        const jaExiste = carrinho.some(item => item.id === produto.id);

        const mensagem = (
            <span>
                Produto <span className="produto-nome">{produto.titulo}</span>{" "}
                {jaExiste 
                    ? "já foi adicionado no carrinho" 
                    : "adicionado no carrinho com sucesso"}
            </span>
        );

        setModalMessage(mensagem);

        if (!jaExiste) {
            adicionarAoCarrinho(produto);
        }

        setShowModal(true);
    };

    return (
        <div className="container-fluid">
            <Header cartCount={carrinho.reduce((acc, item) => acc + item.quantidade, 0)} />

            <div className="row mt-3">
                <div className="col-md-2 pe-3">
                    <Filtros onPesquisar={handlePesquisar} onLimpar={handleLimpar} />
                </div>

                <div className="col-md-10 ps-md-5">
                    <Paginacao />
                    <Itens filtros={filtros} adicionarAoCarrinho={handleAdicionar} />
                </div>
            </div>

            <Footer />


            <Modal show={showModal} onClose={() => setShowModal(false)}>
                {modalMessage}
            </Modal>
        </div>
    );
}

export default Home;

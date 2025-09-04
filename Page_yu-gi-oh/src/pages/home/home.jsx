import { useState } from "react";
import Header from "../../components/Header/Header.jsx";
import Filtros from "../../components/Filtros/Filtros.jsx";
import Paginacao from "../../components/Paginacao/Paginacao.jsx";
import Itens from "../../components/Itens/itens.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Modal from "../../components/Modal/Modal.jsx";
import "./style.scss";

function Home({ carrinho, adicionarAoCarrinho }) {
    const [filtros, setFiltros] = useState([]);
    const [termoBusca, setTermoBusca] = useState(""); // texto digitado na barra
    const [termoBuscaPesquisa, setTermoBuscaPesquisa] = useState(""); // termo usado para filtrar
    const [modalMessage, setModalMessage] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handlePesquisar = (selecionados) => setFiltros(selecionados);
    const handleLimpar = () => setFiltros([]);

    // Função chamada quando clica na lupa
    const handleBuscar = (termo) => {
        setTermoBuscaPesquisa(termo);
    };

    const handleAdicionar = (produto) => {
        const jaExiste = carrinho.some((item) => item.id === produto.id);

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
        <div>
            <Header
                cartCount={carrinho.reduce((acc, item) => acc + item.quantidade, 0)}
                termoBusca={termoBusca}
                setTermoBusca={setTermoBusca}
                onBuscar={handleBuscar}
            />

            <div className="row mt-3">
                <div className="col-md-2 pe-3">
                    <Filtros onPesquisar={handlePesquisar} onLimpar={handleLimpar} />
                </div>

                <div className="col-md-10 ps-md-5">
                    <Paginacao />
                    <Itens
                        filtros={filtros}
                        termoBusca={termoBuscaPesquisa} // usa o termo apenas após clicar
                        adicionarAoCarrinho={handleAdicionar}
                    />
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

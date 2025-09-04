import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function Compras({ carrinho = [], limparCarrinho }) {
    const [frete, setFrete] = useState(20);
    const [subtotal, setSubtotal] = useState(0);

    // Calcula subtotal sempre que o carrinho mudar
    useEffect(() => {
        const totalProdutos = carrinho.reduce(
            (acc, item) => acc + item.preco * item.quantidade,
            0
        );
        setSubtotal(totalProdutos);
    }, [carrinho]);

    const totalAPagar = subtotal + frete;

    return (
        <div className="carrinho-container">
            <h1 className="title">
                CARRINHO DE <span className="title-color">COMPRAS</span>
            </h1>
            <div className="underline"></div>

            {/* Botão para voltar à Home */}
            <div className="voltar-comprar">
                <Link to="/">← Continuar comprando</Link>
            </div>

            <div className="content">
                {/* Lista de produtos */}
                <div className="produtos">
                    {carrinho.length === 0 ? (
                        <p>Seu carrinho está vazio.</p>
                    ) : (
                        carrinho.map((item, index) => (
                            <div className="produto" key={index}>
                                <img src={item.imagem} alt={item.titulo} />
                                <div className="info">
                                    <h3>{item.titulo}</h3>
                                    <p>{item.descricao}</p>
                                    <div className="linha-detalhes">
                                        <p>
                                            <b>Preço por unidade:</b>{" "}
                                            <span className="preco">R$ {item.preco.toFixed(2)}</span>
                                        </p>
                                        <p>
                                            <b>Quantidade:</b>{" "}
                                            <span className="quantidade">{item.quantidade}</span>
                                        </p>
                                        <p>
                                            <b>Total:</b>{" "}
                                            <span className="total">
                                                R$ {(item.preco * item.quantidade).toFixed(2)}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}

                    {/* Subtotal */}
                    <div className="subtotal">
                        Subtotal ({carrinho.length} itens):{" "}
                        <span>R$ {subtotal.toFixed(2)}</span>
                    </div>

                    {/* Frete */}
                    <div className="frete">
                        Custo do Frete: <span>R$ {frete.toFixed(2)}</span>
                    </div>

                    {/* Formas de envio */}
                    <div className="envio">
                        <h3>Formas de envio</h3>
                        <label>
                            <input
                                type="radio"
                                name="frete"
                                onChange={() => setFrete(15)}
                            />{" "}
                            Frete Fixo (R$ 15,00)
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="frete"
                                defaultChecked
                                onChange={() => setFrete(20)}
                            />{" "}
                            Frete combinado (R$ 20,00)
                        </label>
                    </div>
                </div>

                {/* Resumo da compra */}
                <div className="resumo">
                    <h3>
                        Resumo da <span className="laranja">compra</span>
                    </h3>
                    <p>Total dos produtos: </p>
                    <span className="verde">R$ {subtotal.toFixed(2)}</span>
                    <div className="underline"></div>
                    <p>Valor do frete: </p>
                    <span className="verde">R$ {frete.toFixed(2)}</span>
                    <div className="underline"></div>
                    <h2>TOTAL A PAGAR: </h2>
                    <span className="laranja">R$ {totalAPagar.toFixed(2)}</span>

                    {/* Botão para limpar o carrinho */}
                    {carrinho.length > 0 && (
                        <button onClick={limparCarrinho} className="btn-limpar">
                            Esvaziar carrinho
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Compras;

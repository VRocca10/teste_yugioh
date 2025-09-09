import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function Compras({ carrinho = [], limparCarrinho }) {
    const [freteTipo, setFreteTipo] = useState("combinado");
    const [valorCombinadoCentavos, setValorCombinadoCentavos] = useState(2000); // 20,00 R$
    const [subtotal, setSubtotal] = useState(0);

    // Calcula subtotal sempre que o carrinho mudar
    useEffect(() => {
        const totalProdutos = carrinho.reduce(
            (acc, item) => acc + item.preco * item.quantidade,
            0
        );
        setSubtotal(totalProdutos);
    }, [carrinho]);

    // Frete final usado nos cálculos
    const frete = freteTipo === "fixo" ? 15 : valorCombinadoCentavos / 100;
    const totalAPagar = subtotal + frete;

    // Formata BRL (R$ XX,YY)
    const formatarReal = (valor) =>
        new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2,
        }).format(Number.isFinite(valor) ? valor : 0);

    // Handler do input de frete combinado
    const handleValorCombinadoChange = (e) => {
        let digits = e.target.value.replace(/\D/g, ""); // remove tudo que não é número
        if (digits === "") digits = "0";
        const centavos = parseInt(digits, 10);
        setValorCombinadoCentavos(centavos);
    };

    return (
        <div className="carrinho-container">
            <h1 className="title">
                CARRINHO DE <span className="title-color">COMPRAS</span>
            </h1>
            <div className="underline"></div>

            <div className="voltar-comprar">
                <Link to="/">← Continuar comprando</Link>
            </div>

            <div className="content">
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
                                        <p className="preco">
                                            <b>Preço por unidade:</b>
                                            <span>{formatarReal(item.preco)}</span>
                                        </p>
                                        <p className="quantidade">
                                            <b>Quantidade:</b>
                                            <span>{item.quantidade}</span>
                                        </p>
                                        <p className="total">
                                            <b>Total:</b>
                                            <span>{formatarReal(item.preco * item.quantidade)}</span>
                                        </p>
                                    </div>

                                </div>
                            </div>
                        ))
                    )}

                    <div className="subtotal">
                        Subtotal ({carrinho.length} itens):{" "}
                        <span>{formatarReal(subtotal)}</span>
                    </div>

                    <div className="frete">
                        Custo do Frete: <span>{formatarReal(frete)}</span>
                    </div>

                    <div className="envio">
                        <h3>
                            Formas de <span className="laranja">envio</span>
                        </h3>

                        <label>
                            <input
                                type="radio"
                                name="frete"
                                checked={freteTipo === "fixo"}
                                onChange={() => setFreteTipo("fixo")}
                            />{" "}
                            Frete Fixo com rastreio (R$ 15,00) até 15 dias
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="frete"
                                checked={freteTipo === "combinado"}
                                onChange={() => setFreteTipo("combinado")}
                            />{" "}
                            Frete combinado com o vendedor
                            <div className="valor-combinado">
                                Valor combinado:
                                <input
                                    type="text"
                                    inputMode="decimal"
                                    className="valor-botao"
                                    value={formatarReal(valorCombinadoCentavos / 100)}
                                    onChange={handleValorCombinadoChange}
                                    disabled={freteTipo !== "combinado"}
                                />
                            </div>
                        </label>
                    </div>
                </div>

                <div className="resumo">
                    <h3>
                        Resumo da <span className="laranja">compra</span>
                    </h3>
                    <p>Total dos produtos: </p>
                    <span className="verde">{formatarReal(subtotal)}</span>
                    <div className="underline"></div>
                    <p>Valor do frete: </p>
                    <span className="verde">{formatarReal(frete)}</span>
                    <div className="underline"></div>
                    <h2>TOTAL A PAGAR: </h2>
                    <span className="laranja">{formatarReal(totalAPagar)}</span>

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

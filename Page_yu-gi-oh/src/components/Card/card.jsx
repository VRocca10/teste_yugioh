import "./style.scss";

function Card({ titulo, preco, imagem, adicionarAoCarrinho }) {
    return (
        <div className="container">
            <img src={imagem} alt={titulo} className="card-image" />
            <div className="card-info">
                <h2 className="card-title">{titulo}</h2>
                <p className="card-price">R$ {preco}</p>
            </div>
            <button onClick={adicionarAoCarrinho} className="card-button">Comprar</button>
        </div>
    );
}

export default Card;

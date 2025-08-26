import "./style.scss";
import ImagemCard from "../../assets/card.svg"

function Card({titulo, preco}) {
    return (
        <div className="container">
            <img src={ImagemCard} alt="Imagem de um card" className="card-image" />
            <div className="card-info">
                <h2 className="card-title">{titulo}</h2>
                <p className="card-price">{preco}</p>
            </div>
            <button className="card-button">Comprar</button>
        </div>
    )
}

export default Card;
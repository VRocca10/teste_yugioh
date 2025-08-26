import "./style.scss";
import ImagemFooter from "../../assets/footer_image.svg"


function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <span>© 2025 FPR Animes - Todos os direitos reservados.</span>
                <img src={ImagemFooter} alt="" />
            </div>
        </footer>
    )
}

export default Footer;
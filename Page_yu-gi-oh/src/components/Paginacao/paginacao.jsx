import "./style.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import imagem1 from "../../assets/banner1.svg";
import imagem2 from "../../assets/banner2.svg";
import imagem3 from "../../assets/banner3.svg";



function Paginacao() {
    const images = [imagem1, imagem2, imagem3]

    return (
        // <div className="container">
            <Swiper
                slidesPerView={1}
                pagination={{ clickable: true }}
                modules={[Pagination]}
            >
                {images.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img src={item} alt="Slider" className="slide-item" />
                    </SwiperSlide>
                ))}
            </Swiper>
        // </div>
    );
}


export default Paginacao;
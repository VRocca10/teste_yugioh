import "./style.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; 
import imagem1 from "../../assets/banner1.svg";
import imagem2 from "../../assets/banner2.svg";
import imagem3 from "../../assets/banner3.svg";

function Paginacao() {
    const images = [imagem1, imagem2, imagem3];

    return (
        <Swiper
            slidesPerView={1}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]} 
            autoplay={{ delay: 8000, disableOnInteraction: false }} 
            loop={true} 
        >
            {images.map((item, index) => (
                <SwiperSlide key={index}>
                    <img src={item} alt="Slider" className="slide-item" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default Paginacao;

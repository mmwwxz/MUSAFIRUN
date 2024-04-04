import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Carousel2.style.jsx.scss"
import stars from "../../assets/stars.png";
import {EffectCoverflow, Keyboard, Navigation, Pagination} from "swiper/modules";
import {useEffect, useState} from "react";

SwiperCore.use([EffectCoverflow, Keyboard, Navigation, Pagination]);

const CardSlider = ({ items }) => {
    const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

    useEffect(() => {
        function handleResize() {
            setSlidesPerView(getSlidesPerView());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function getSlidesPerView() {
        if (window.innerWidth >= 1024) {
            return 3;
        } else {
            return 1;
        }
    }

    return (
        <div className="cardSlider">
            <Swiper
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={slidesPerView}
                followFinger={true}
                keyboard={{
                    enabled: true,
                }}
                initialSlide={1}
                speed={1000}
                spaceBetween={0}
                loop={true}
            >
                {items.map(item => (
                    <SwiperSlide key={item.id}>
                        <div className="card">
                            <img src={item.img} alt={item.alt} />
                            <h2>{item.name}</h2>
                            <img className='stars' src={stars} alt="Stars" />
                            <p>{item.content}</p>
                            <button>Подробнее</button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CardSlider;

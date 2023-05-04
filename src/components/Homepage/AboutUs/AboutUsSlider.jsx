import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/scss';
import 'swiper/scss/autoplay'
import { Autoplay } from "swiper";

import img1 from '../../../assets/images/manufacture/logo1.svg'
import img2 from '../../../assets/images/manufacture/logo2.svg'
import img3 from '../../../assets/images/manufacture/logo3.svg'
import img4 from '../../../assets/images/manufacture/logo4.svg'
import img5 from '../../../assets/images/manufacture/logo5.svg'
import img6 from '../../../assets/images/manufacture/logo6.svg'
import img7 from '../../../assets/images/manufacture/logo7.svg'
import img8 from '../../../assets/images/manufacture/logo8.svg'

const dataSliders = [img1, img2, img3, img4, img5, img6, img7, img8, img1, img2, img3, img4, img5, img6, img7, img8]

const Slider = () => {
    return (
        <Swiper
            modules={[Autoplay]}
            autoplay={{
                delay: 1000,
                disableOnInteraction: false,
            }}
            slidesPerView={2}
            breakpoints={{
                480: {slidesPerView: 3},
                991: {slidesPerView: 6},
                1200: {slidesPerView: 8}
            }}   
            speed={1000}
            loop={true}
        >
            {dataSliders.map((item, index) => (             
                <SwiperSlide key={index}><img src={item} width={100} height={100} alt="image description" loading="lazy" /></SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider
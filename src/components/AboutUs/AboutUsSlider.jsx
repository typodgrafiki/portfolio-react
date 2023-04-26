import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/scss';
import 'swiper/scss/autoplay'
import { Autoplay } from "swiper";

import img1 from '../../assets/images/manufacture/logo1.svg'
import img2 from '../../assets/images/manufacture/logo2.svg'
import img3 from '../../assets/images/manufacture/logo3.svg'
import img4 from '../../assets/images/manufacture/logo4.svg'
import img5 from '../../assets/images/manufacture/logo5.svg'
import img6 from '../../assets/images/manufacture/logo6.svg'
import img7 from '../../assets/images/manufacture/logo7.svg'
import img8 from '../../assets/images/manufacture/logo8.svg'
import img9 from '../../assets/images/manufacture/logo9.svg'
import img10 from '../../assets/images/manufacture/logo10.svg'
import img11 from '../../assets/images/manufacture/logo11.svg'
import img12 from '../../assets/images/manufacture/logo12.svg'

const dataSliders = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12]

const Slider = () => {
    return (
        <Swiper
            modules={[Autoplay]}
            autoplay={{
                delay: 1500,
                disableOnInteraction: false,
            }}
            speed={1000}
            loop={true}
            slidesPerView={8}
        >
            {dataSliders.map((item, index) => (             
                <SwiperSlide><img src={item} width={100} height={100} key={index} alt="image description" /></SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider
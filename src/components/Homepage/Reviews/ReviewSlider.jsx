import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/scss';
import 'swiper/scss/autoplay'
import "swiper/css/navigation"
import "swiper/css/effect-fade"
import { EffectFade, Navigation } from "swiper"

import img1 from '../../../assets/images/reviews/faces/face1.png'
import img2 from '../../../assets/images/reviews/faces/face2.png'
import img3 from '../../../assets/images/reviews/faces/face3.png'
import img4 from '../../../assets/images/reviews/faces/face4.png'

const dataSliders = [
    {
        'img': img1,
        'quote': 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, accusantium debitis. Minus consequuntur quae ipsa dignissimos.',
        'name': 'Lexie Ernst',
        'workplace': 'Founder & CEO, Visia'        
    },
    {
        'img': img2,
        'quote': 'Cum quae ullam assumenda praesentium quaerat, voluptas optio possimus eligendi rerum dignissimos recusandae soluta quos neque, fuga vel!',
        'name': 'Anna Novak',
        'workplace': 'CEO Amazon'        
    },
    {
        'img': img3,
        'quote': 'Dicta quis et a deserunt nisi eveniet numquam, neque nostrum soluta omnis iusto ex excepturi tempora culpa nesciunt perspiciatis.',
        'name': 'Andrzej Duduś',
        'workplace': 'CEO Kaczyński Sp. z o. o.'        
    },
    {
        'img': img4,
        'quote': 'Ratione temporibus non obcaecati excepturi aliquid eligendi, alias consequatur necessitatibus et quibusdam accusamus.',
        'name': 'John Albert',
        'workplace': 'Allegro Founder'        
    }
]

const ReviewsSlider = () => {
    return (
        <Swiper
            modules={[EffectFade, Navigation]}
            speed={1000}
            effect={'fade'}
            navigation={true}
        >
            {dataSliders.map((item, index) => (             
                <SwiperSlide key={index}>
                    <div className="quote">
                        {item.quote}    
                    </div>
                    <div className="author flex align-center gap20">
                        <div className="image">
                            <img src={item.img} width={100} height={100} key={index} alt="image description" />
                        </div>
                        <div className="caption">
                            <div className="name">{item.name}</div>
                            <div className="workplace">{item.workplace}</div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ReviewsSlider
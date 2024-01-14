// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import s from './style.module.css'
import { useState } from "react";
import { Swiper as SwiperClass } from "swiper/types";
export const SwiperCustom = () => {
    const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);

    const slideTo = (index : number) => {
        swiperRef?.slideTo(index - 1, 0);
    };

    const generateSlides = () => {
        return [1, 2, 3].map((index) => {
            return <SwiperSlide className={`${s.slide} ${index === 2 ? s.slide_center : ''}`}>Slide {index}</SwiperSlide>
        })
    }

    return <div className={s.swiperWrapper}>
        <Swiper
            onSwiper={setSwiperRef}
            spaceBetween={40}
            slidesPerView={'auto'}
            centeredSlides={true}
            onSlideChange={() => console.log('slide change')}
        >
            {generateSlides()}
        </Swiper>

        <button onClick={() => slideTo(1)}>To 1</button>
    </div>
}

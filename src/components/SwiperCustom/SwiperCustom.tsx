// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import s from './style.module.css'
import { useEffect, useState } from "react";
import { Swiper as SwiperClass } from "swiper/types";
import { planImg } from "../../const/const.ts";

export const SwiperCustom = () => {
    const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);
    const [activeIndex, setActiveIndex] = useState<number>(1);
    // swiperRef?.on('slideChange', () => {
    //     console.log(swiperRef?.activeIndex)
    // })
    const onSlideChangeHandler = (swiper: SwiperClass) => {
        setActiveIndex(swiper.activeIndex)
    }
    const slideTo = (index: number) => {
        swiperRef?.slideTo(index - 1, 0);
    };

    useEffect(() => {
        // console.log(activeIndex)
    }, [activeIndex]);
    const generateSlides = () => {
        return [0, 1, 2].map((_, index) => {
            return <SwiperSlide key={index}
                                className={`${s.slide} ${activeIndex === index ? s.slide_center : ''}`}>
                <img src={planImg} alt={'plan'}/>
                {/*<ImageZoom/>*/}
            </SwiperSlide>
        })
    }

    return <div className={s.swiperWrapper}>
        <Swiper
            //allowTouchMove={false} вкупе с planImg будет работать только при false
            initialSlide={1}
            onSwiper={setSwiperRef}
            spaceBetween={40}
            slidesPerView={'auto'}
            centeredSlides={true}
            onSlideChange={onSlideChangeHandler}
        >
            {generateSlides()}
        </Swiper>

        <button onClick={() => slideTo(1)}>To 1</button>
    </div>
}

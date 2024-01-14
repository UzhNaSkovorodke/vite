// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import s from './style.module.css'
import { useEffect, useState } from "react";
import { Swiper as SwiperClass } from "swiper/types";

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
                <img src={'https://www.gk-profit.ru/file/photopic/thumb1/f979529b8e14af27bf2465ad1f8b4a61.jpg'} alt={'plan'}/>
            </SwiperSlide>
        })
    }

    return <div className={s.swiperWrapper}>
        <Swiper
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

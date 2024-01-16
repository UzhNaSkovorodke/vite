// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import s from './style.module.css'
import { useEffect, useState } from "react";
import { Swiper as SwiperClass } from "swiper/types";
import { SwiperControl } from "./SwiperControl/SwiperControl.tsx";
import { Floors } from "../../App.tsx";
import { ImageZoom } from "../ImageZoom/ImageZoom.tsx";

export const SwiperCustom = ({floors}: {
    floors: Floors
}) => {
    const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);
    const [activeIndex, setActiveIndex] = useState<number>(1);
    // swiperRef?.on('slideChange', () => {
    //     console.log(swiperRef?.activeIndex)
    // })
    const onSlideChangeHandler = (swiper: SwiperClass) => {
        setActiveIndex(swiper.activeIndex)
    }
    const slideTo = (index: number) => {
        swiperRef?.slideTo(index, 500);
    };

    useEffect(() => {
        // console.log(activeIndex)
    }, [activeIndex]);
    const generateSlides = () => {
        return floors.map((_, index) => {
            return <SwiperSlide key={index}
                                className={`${s.slide} ${activeIndex === index ? s.slide_center : ''}`}>
                {/*<img src={planImg} alt={'plan'}/>*/}
                <ImageZoom activeIndex={activeIndex}/>
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
        <SwiperControl slideTo={slideTo} activeIndex={activeIndex} floors={floors}/>
    </div>
}

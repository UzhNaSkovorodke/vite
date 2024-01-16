import s from './style.module.css'
import { ReactZoomPanPinchRef, TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { planImg } from "../../const/const.ts";
import { useEffect, useRef } from "react";

export const ImageZoom = ({activeIndex}: { activeIndex: number }) => {
    const transformRef = useRef<ReactZoomPanPinchRef>(null);
    useEffect(() => {
        transformRef.current ? transformRef.current.resetTransform(0) : null
    }, [activeIndex]);

    return <div className={s.imageZoomWrapper}>
        <TransformWrapper
            centerOnInit
            limitToBounds
            disablePadding
            initialScale={1}
            ref={transformRef}>
            <TransformComponent>
                <div className={s.planImage}>
                    <img src={planImg} alt="test"/>
                </div>
            </TransformComponent>
        </TransformWrapper>
    </div>
}

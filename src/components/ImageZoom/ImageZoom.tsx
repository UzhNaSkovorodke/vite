import s from './style.module.css'
import { ReactZoomPanPinchRef, TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { planImg } from "../../const/const.ts";
import { useEffect, useRef } from "react";

export const ImageZoom = ({activeIndex}: { activeIndex: number }) => {
    const transformRef = useRef<ReactZoomPanPinchRef>(null);
    useEffect(() => {
        transformRef.current ? transformRef.current.resetTransform(0) : null
    }, [activeIndex]);

    const handleZoomIn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (transformRef.current) {
            transformRef.current.zoomIn()
        }
    }
    const handleZoomOut = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (transformRef.current) {
            transformRef.current.zoomOut()
        }
    }

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

        <button onClick={(e) => handleZoomIn(e)} style={{padding: '10px'}}>+</button>
        <button onClick={(e) => handleZoomOut(e)} style={{padding: '10px'}}>-</button>
    </div>
}

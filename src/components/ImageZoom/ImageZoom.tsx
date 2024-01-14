import s from './style.module.css'
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { planImg } from "../../const/const.ts";

export const ImageZoom = () => {
    return <div className={s.imageZoomWrapper}>
        <TransformWrapper
            centerOnInit
            limitToBounds
            disablePadding>
            <TransformComponent>
                <div className={s.planImage}>
                    <img src={planImg} alt="test"/>
                </div>
            </TransformComponent>
        </TransformWrapper>
    </div>
}

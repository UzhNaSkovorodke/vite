import { Floors } from "../../../App.tsx";

interface SwiperControlProps {
    slideTo: (index: number) => void
    activeIndex: number
    floors: Floors
}

export const SwiperControl = ({slideTo, activeIndex, floors}: SwiperControlProps) => {
    const marg = {padding: '10px'}

    const renderControls = (floors: Floors) => {
       return floors.map((floor, index) => {
           return <button key={index} style={marg} onClick={() => slideTo(index)}>{`Floor ${floor}`}</button>
       })
    }

    return (
        <div style={{display: 'flex', gap: '10px'}}>
            <button style={marg} onClick={() => slideTo(activeIndex - 1)}>{`Left ${activeIndex - 1}`}</button>
            {renderControls(floors)}
            <button style={marg} onClick={() => slideTo(activeIndex + 1)}>{`Right ${activeIndex + 1}`}</button>
        </div>
    )
}

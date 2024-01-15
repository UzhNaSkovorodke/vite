interface SwiperControlProps {
    slideTo: (index: number) => void
    activeIndex: number
}

export const SwiperControl = ({slideTo, activeIndex}: SwiperControlProps) => {
    const marg = {padding: '10px'}
    return (
        <div style={{display: 'flex', gap: '10px'}}>
            <button style={marg} onClick={() => slideTo(activeIndex - 1)}>{`Left ${activeIndex - 1}`}</button>
            <button style={marg} onClick={() => slideTo(1)}>1</button>
            <button style={marg} onClick={() => slideTo(activeIndex + 1)}>{`Right ${activeIndex + 1}`}</button>
        </div>
    )
}

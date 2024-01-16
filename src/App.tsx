import './App.css'
import './pupa'
import { SwiperCustom } from "./components/SwiperCustom/SwiperCustom.tsx";

export type Floors = Array<number>;
function App() {
    const floors : Floors = [14,15,16,17]
    // const floors2: Floors = [3,4,5]

    return (
        <>
            <SwiperCustom floors={floors}/>
            {/*<ImageZoom />*/}
        </>
    )
}

export default App

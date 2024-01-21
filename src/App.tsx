import './App.css'
import './pupa'
import {pyp} from "./pupa.ts";

export type Floors = Array<number>;

function App() {
    //const floors : Floors = [14,15,16,17]
    // const floors2: Floors = [3,4,5]
    pyp()
    return (
        <>
            {/*<SwiperCustom floors={floors}/>*/}
            {/*<ImageZoomExample />*/}
        </>
    )
}

export default App

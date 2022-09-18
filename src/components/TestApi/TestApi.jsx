import { useState } from "react";
import taS from "./TestApi.module.css";
 

function TestApi() {


    let [number, setNumber] = useState(1)
    
    const clickBttn = ()=> {
        setNumber(number+1)
    }

    // const dc = ()=> console.log('duble click');
    // const mm = ()=> console.log('mouse move');

return (
    <div className={taS.mainWrapper}>
        <div 
        className={taS.square}
        // onDoubleClick={dc}
        // onMouseMove = {mm}
        onMouseMove={clickBttn}
        >
           <div className={taS.text} > {number} </div>
        </div>
    </div>
)
}

export default TestApi;

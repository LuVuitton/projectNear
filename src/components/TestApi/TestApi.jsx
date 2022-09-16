import { useState } from "react";
import taS from "./TestApi.module.css";
 

function TestApi() {

    const dc = ()=> console.log('duble click');
    const mm = ()=> console.log('mouse move');

return (
    <div className={taS.mainWrapper}>
        <div 
        className={taS.square}
        onDoubleClick={dc}
        onMouseMove = {mm}
        >
           <div className={taS.text} > TEST </div>
        </div>
    </div>
)
}

export default TestApi;

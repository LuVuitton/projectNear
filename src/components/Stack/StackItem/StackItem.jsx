import { useState } from 'react';
import stackS from './StackItem.module.css'

function StackItem(props) {

const [about, setAbout] = useState(false);
const moreClasses = about?stackS.moreRed:stackS.moreGreen
const moreClassesArr =[stackS.more, moreClasses]


  return (
    <div onClick={()=>{setAbout(prev => !prev)}} className={stackS.mainWrapper}>
      <div className={stackS.item}>
        <div className={stackS.flag}><img src={props.flag} alt="hello"/></div>
        <div>{props.km}</div>
        <div>{props.money} $</div>
      </div>
     
      {about && <div > 
        {props.description}
      </div>}

      <div className={moreClassesArr.join(' ')} >{about?'hide description':'show more'}</div>

   

    </div>
  );
}

export default StackItem;

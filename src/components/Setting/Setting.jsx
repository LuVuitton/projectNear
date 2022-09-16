import { Link } from "react-router-dom";
import settingS from './Setting.module.css'
import data from "../../data/data.json"



const settingMap = data.settingData.map(e=><Link key={e.key} className={settingS.item} to={e.link}>{e.navName}</Link>)


function Setting() {
  return (
    <nav>
      {settingMap}
      
    </nav>
  );
}

export default Setting;

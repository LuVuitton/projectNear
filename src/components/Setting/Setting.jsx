import { Link } from "react-router-dom";
import settingS from './Setting.module.css'

const settingData = [
  { "navName": "main", "link": "/mainSetting", "key": 1 },
  { "navName": "notifications", "link": "/notificationsSetting", "key": 2 },
  { "navName": "location", "link": "/locationSetting", "key": 3 },
  { "navName": "theme", "link": "/themeSetting", "key": 4 }
]


const settingMap = settingData.map(e=><Link key={e.key} className={settingS.item} to={e.link}>{e.navName}</Link>)


function Setting() {
  return (
    <nav>
      {settingMap}
      
    </nav>
  );
}

export default Setting;

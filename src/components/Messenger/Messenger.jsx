import { Link, useLocation } from "react-router-dom";
import messengerS from "./Messenger.module.css";
import data from "../../data/data.json"




function Messenger() {
  
  const matchUrl = useLocation()
  
  const messengerMap = data.messengerData.map((e) => (
    <Link key={e.key} to={`${matchUrl.pathname}/${e.userId}`} className={messengerS.item}> {e.person}</Link>
  ));



  return <>{messengerMap}</>;
}

export default Messenger;

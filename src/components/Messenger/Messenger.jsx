import { Link, useLocation } from "react-router-dom";
import messengerS from "./Messenger.module.css";

const messengerData = [
  { "person": "Stasic", "userId":1, "key": 1 },
  { "person": "Anya", "userId":2, "key": 2 },
  { "person": "Ilon", "userId":3, "key": 3 },
  { "person": "Louis", "userId":4, "key": 4 },
  { "person": "Zlatan", "userId":5, "key": 5 }
]


function Messenger() {
  
  const matchUrl = useLocation()
  
  const messengerMap = messengerData.map((e) => (
    <Link key={e.key} to={`${matchUrl.pathname}/${e.userId}`} className={messengerS.item}> {e.person}</Link>
  ));



  return <>{messengerMap}</>;
}

export default Messenger;

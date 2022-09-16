import { Link } from "react-router-dom";
import navBottomS from "./NavBottom.module.css";
import data from "../../data/data.json"

// const navBottomData = [
//   { link: "*", navName: "back", key: 1 },
//   { link: "/menu", navName: "menu", key: 2 },
//   { link: "/stack", navName: "stack", key: 3 },
// ];


const mapNavBottomData = data.navBottomData.map((e) => (
  <Link key={e.key} className={navBottomS.item} to={e.link}>
    {e.navName}
  </Link>
));

function NavBottom() {
  return (
    <div className={navBottomS.mainWrapper}>
      <nav className={navBottomS.bottons}>{mapNavBottomData}</nav>
    </div>
  );
}

export default NavBottom;


import { Link } from "react-router-dom";
import menuS from './Menu.module.css'

const menuData = [
  { link: "/map", navName: "map", key:1},
  { link: "/messenger", navName: "messenger", key:3},
  { link: "/offer", navName: "offer", key:4},
  { link: "/profile", navName: "profile", key:5},
  { link: "/setting", navName: "setting", key:6},
  { link: "/stack", navName: "stack", key:7},
  { link: "/test", navName: "test", key:8}
]

const mapMenu = menuData.map(e=> <Link key={e.key} className={menuS.item} to={e.link}>{e.navName}</Link>)


function Menu() {
  return (
    <nav>

           {mapMenu}

    </nav>
  );
}

export default Menu;

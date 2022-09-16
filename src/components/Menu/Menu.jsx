
import { Link } from "react-router-dom";
import menuS from './Menu.module.css'
import data from "../../data/data.json"




const mapMenu = data.menuData.map(e=> <Link key={e.key} className={menuS.item} to={e.link}>{e.navName}</Link>)


function Menu() {
  return (
    <nav>

           {mapMenu}

    </nav>
  );
}

export default Menu;

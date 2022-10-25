import { useState } from "react";
import { navMenuLinks } from "./NavMenuItems";
import SubMenu from "./SubMenu";

export default function NavMenuBar({ show }) {
    // props imported from Navigation.js

    const [menuData, setMenuData] = useState([]);

    // state to hide or show menu
    const [visible, setVisible] = useState(false);

    // dropdown lowest layer
    const [dropDownVisible, setDownVisible] = useState(false);

    console.log(dropDownVisible);

    // log the state data when hovering menu item
    console.log(menuData)

    return (
        <section className={show ? "navMenuBar" : "hideMenuBar"} onMouseLeave={() => setVisible(false)}>
            <div className="navMenuBarContainer contentPadding">
                <ul className="menus">
                    {navMenuLinks.map((menu, index) => {
                        return (
                            <li className="" key={menu.id} onMouseEnter={() => {setMenuData(menu.subMenu); setVisible(true); setDownVisible(false)}}>
                                <a href={menu.url}>{menu.title}</a>
                            </li>
                        );
                    })}   
                </ul>
            </div>
            {visible && <SubMenu data={menuData}/>}
      
        </section>
    );
}

import React from 'react'
import { useState } from 'react';
import DropDown from './DropDown';

export default function SubMenu({ data }) {
    const [dropdownData, setDropdownData] = useState([]);

    // state to hide or show menu
    const [subMenuVisible, setSubMenuVisible] = useState(false);
    console.log(dropdownData)

  return (
    <section onMouseLeave={() => {setDropdownData([]); setSubMenuVisible(false)}}>
        <div className="navMenuBarSecond contentPadding navMenuBarContainer">
                    <ul className="menus">
                        {data.map((menu, index) => {
                            return (
                                <li className="" key={menu.id} onMouseEnter={() => {setDropdownData(menu.subMenu); setSubMenuVisible(true)}}>
                                    <a href={menu.url}>{menu.title}</a>
                                </li>
                            );
                        })}   
                    </ul>
        </div>
        {subMenuVisible &&

            <DropDown dropdownData={dropdownData}/>
        }
    </section>

  )
}

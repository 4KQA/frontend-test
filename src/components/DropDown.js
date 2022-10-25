import React from 'react'
import { useState } from 'react';

export default function DropDown({dropdownData}) {
    // state to hide or show menu
    // TODO fix styling, hide when going out
    const [dropDownVisible, setDownVisible] = useState(false);
    console.log(dropDownVisible)

  return (
    <>  
        <div className='dropdownmenu contentPadding'>
            <ul className="menus">
                {dropdownData.map((menu, index) => {
                    return (
                        <li className="" key={menu.id} onMouseEnter={() => {setDownVisible(true)}}>
                            <a href={menu.url}>{menu.title}</a>
                        </li>
                    );
                })}   
            </ul>
        </div>
    </>
  )
}

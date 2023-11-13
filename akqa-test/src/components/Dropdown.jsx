import { useState } from "react";
//import { menuItem1 } from "./menuItems";

export const MenuItem = ({menuItem1}) => {
    return (
        <li>
            <a href="#">{menuItem1.title}</a>
        </li>
    )
};

export const Dropdown = ({menuItem1}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen)
    }

    return(
        <div className="dropdown">
            <button onClick={toggleDropdown} className="dropBtn">Dropdown</button>
            {dropdownOpen && (
                <ul className="dropdown-menu">
                    {menuItem1.map((menuItem, index) => (
                        <MenuItem key={index} menuItem={menuItem} />
                    ))}
                </ul>
            )}
        </div>
    )
} 


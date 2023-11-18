import { useState } from "react";
import '../App.css'

export default function MenuItem({ item, onClick }) {
    const [isOpen, setIsOpen] = useState(false);

   const handleToggle = () => {
    setIsOpen(!isOpen);
    onClick(item.label);
   }

    return (
        <nav className="dropdown-items">
            <button href="{item.url}" className="navLink" onClick={handleToggle}>{item.label}</button>
            {item.children && isOpen && (
                <ul className={`submenu ${isOpen ? 'active' : ''}`} >
                    {item.children.map((child, index) => (
                        <MenuItem key={index} item={child} onClick={onclick} />
                    ))}
                </ul>
            )}
        </nav>
    )
}







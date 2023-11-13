import { useState } from "react";
import { Link } from "react-router-dom";
import '../App.css'

export default function MenuItem({ item }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(true)
    };

    const handleMouseLeave = () => {
        setIsOpen(false)
    };

    return (
        <div
            className="dropdown-items"
            onClick={handleClick}
            onMouseLeave={handleMouseLeave}
        >
            <Link to={item.link} className="navLink">{item.label}</Link>
            {item.children && isOpen && (
                <ul className="submenu">
                    {item.children.map((child, index) => (
                        <MenuItem key={index} item={child} />
                    ))}
                </ul>
            )}
        </div>
    )
}









//importerer logo fra assets
import Derma from "../assets/logo/DermaWorld.png"
import '../App.css'

import NavLinks from "./menuItems";

export default function Header() {
    
    return (
        <header>
            <div className="top">
                <a href="/" style={{ width: "18%" }}><img src={Derma} alt="DermaWorld Logo" className="logo" /></a>
                <form className="search">
                    <input type="text" placeholder="Search" />
                </form>
            </div>

            <NavLinks/>

            <div>{/* TODO: RESPONSIVE */}</div>
        </header>
    )
}


//importerer logo fra assets
import Derma from "../assets/logo/DermaWorld.png"
import SearchIcon from '@mui/icons-material/Search';
import '../App.css'

import NavLinks from "./menuItems";

export default function Header() {
    
    return (
        <header>
            <div className="top">
                <a href="/" style={{ width: "18%" }}><img src={Derma} alt="DermaWorld Logo" className="logo" /></a>
                <form className="search">

                    <input type="text" placeholder="Search" />
                    <SearchIcon
                        sx={{
                            fontSize: "2em",
                            position: "absolute",
                            transform: "translateX(-150%)",
                            top: "2.2em",
                            color: "rgb(150, 150, 150)"
                        }}
                    />

                </form>
            </div>

            <NavLinks/>

            <div>{/* TODO: RESPONSIVE */}</div>
        </header>
    )
}
import { Link } from "react-router-dom";

//importerer logo fra assets
import Derma from "../assets/logo/DermaWorld.png"

import SearchIcon from '@mui/icons-material/Search';

import '../App.css'

//import { menuItem1 } from "./menuItems";
import { Dropdown } from "./dropdown";
import { menuItem1 } from "./menuItems";

export default function Header() {

    //TODO: if-else statement der læser om musen er over eller ej så link ikke får pink farve



    return (
        <header>
            <div className="top">
                <div style={{ width: "15%" }}><img src={Derma} alt="DermaWorld Logo" className="logo" /></div>
                <form className="search">

                    <input type="text" placeholder="Search" />
                    <SearchIcon
                        sx={{
                            fontSize: "2.2em",
                            position: "absolute",
                            transform: "translateX(-150%)",
                            top: "2.2em",
                            color: "rgb(150, 150, 150)"
                        }}
                    />

                </form>
            </div>


            <nav className="nav-top-level">

                <Link className="navLink">Bedingungen</Link>


                <Link className="navLink dropBtn" onClick={Dropdown}>Behandlungen</Link>


                <Link className="navbar-item">

                    <Dropdown menuItems={menuItem1} />

                </Link>

                <Link className="navLink">Veranstaltungen</Link>
                <Link className="navLink">Werkzeuge</Link>
                <Link className="navLink">Forschung und Erkenntnisse</Link>

            </nav>

        </header>
    )
}
import { Link } from "react-router-dom";

//importerer logo fra assets
import Derma from "../assets/logo/DermaWorld.png"

import SearchIcon from '@mui/icons-material/Search';

//import '../App.css'



export default function Header() {
    const linkStyle = {
        color: "black",
        textDecoration: "none",


    }
    //TODO: if-else statement der læser om musen er over eller ej så link ikke får pink farve
    const linkStyleHover = {
        color: "black",
        textDecoration: "underline",
    }

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

                <Link onMouseOut={linkStyle} onMouseOver={linkStyleHover}>Bedingungen</Link>
                <Link onMouseOut={linkStyle} onMouseOver={linkStyleHover}>Behandlungen</Link>
                <Link onMouseOut={linkStyle} onMouseOver={linkStyleHover}>Veranstaltungen</Link>
                <Link onMouseOut={linkStyle} onMouseOver={linkStyleHover}>Werkzeuge</Link>
                <Link onMouseOut={linkStyle} onMouseOver={linkStyleHover}>Forschung und Erkenntnisse</Link>

            </nav>

        </header>
    )
}
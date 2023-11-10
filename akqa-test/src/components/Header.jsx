import { NavLink } from "react-router-dom";

export default function Header() {
    return (

        <>
            {/*Logo + search + navlinks*/}

            <nav className="nav-top-level">
        
                    <NavLink>Bedingungen</NavLink>
                    <NavLink>Behandlungen</NavLink>
                    <NavLink>Veranstaltungen</NavLink>
                    <NavLink>Werkzeuge</NavLink>
                    <NavLink>Forschung und Erkenntnisse</NavLink>

            </nav>

        </>
    )
}
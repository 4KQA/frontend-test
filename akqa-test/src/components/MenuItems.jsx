import MenuItem from "./dropdown"
import '../App.css'

import { useState } from "react"

export default function NavLinks() {
    const [activeSubMenu, setActiveSubMenu] = useState(null);

    const handleSubMenuClick = (label) => {
        setActiveSubMenu(activeSubMenu === label ? null : label)
    }

    const menuItems = [
        {
            id:1,
            label: "Bedingungen",
            url:"#",
            children: [
                {
                    label: "Bedingungen_1",
                    url:"#",
                    children: [
                        { label: 'Bedingungen_01'}
                    ]
                },
                {
                    label: "Bedingungen_2",
                    url:"#",
                    children: [
                        { label: 'Bedingungen_02'}
                    ]
                },
                {
                    label: "Bedingungen_3",
                    url:"#",
                    children: [
                        { label: 'Bedingungen_03'}
                    ]
                },
            ]
        },
        {
            id:2,
            label: "Behandlungen",
            url:"#",
            children: [
                {
                    label: "Adtralza",
                    url:"#",
                    children: [
                        { label: 'Overview', url:"#" },
                        { label: 'Mode of Action', url:"#" },
                        { label: 'Efficacy', url:"#"},
                        { label: 'Quality of Life', url:"#" },
                        { label: 'Safety', url:"#" },
                        { label: 'Dosing', url:"#" },
                        { label: 'News', url:"#" },
                        { label: 'Technical information', url:"#" },
                    ]
                },
                {
                    label: "Diavonex",
                    url:"#",
                    children: [
                        { label: 'Diavonex_01', url:"#" }
                    ]
                },
                {
                    label: "Diavobet",
                    url:"#",
                    children: [
                        { label: 'Diavobet_01', url:"#" }
                    ]
                },
                {
                    label: "Enstilar",
                    url:"#",
                    children: [
                        { label: 'Enstilar_01', url:"#" }
                    ]
                },
                {
                    label: "Fucidin",
                    url:"#",
                    children: [
                        { label: 'Fucidin_01', url:"#" }
                    ]
                },
                {
                    label: "Kyntheum",
                    url:"#",
                    children: [
                        { label: 'Kyntheum_01', url:"#" }
                    ]
                },
                {
                    label: "Protopic",
                    url:"#",
                    children: [
                        { label: 'Protopic_01', url:"#",}
                    ]
                },
                {
                    label: "Skinoren",
                    url:"#",
                    children: [
                        { label: 'Skinoren_01', url:"#" }
                    ]
                },
                {
                    label: "Tralokiumab",
                    url:"#",
                    children: [
                        { label: 'Tralokiumab_01', url:"#" }
                    ]
                },
                {
                    label: "Xamiol",
                    url:"#",
                    children: [
                        { label: 'Xamiol_01', url:"#" }
                    ]
                },
            ]
        },
        {
            id:3,
            label: "Veranstaltung",
            url:"#",
            children: [
                {
                    label: "Veranstaltung_1",
                    url:"#",
                    children: [
                        { label: 'Veranstaltunf_01', url:"#" },
                        { label: 'Veranstaltunf_02', url:"#" }
                    ]
                }
            ]
        },
        {
            id:4,
            label: "Werkzeuge",
            url:"#",
            children: [
                {
                    label: "Werkzeuge_1",
                    url:"#",
                    children: [
                        { label: 'Werkzeuge_01', url:"#" },
                        { label: 'Werkzeuge_02', url:"#" },
                        { label: 'Werkzeuge_03', url:"#" },
                        { label: 'Werkzeuge_04', url:"#" },
                    ]
                }
            ]
        },
        {
            id:5,
            label: "Forschung und Erkenntnisse",
            url:"#",
            children: [
                {
                    label: "Forschung und Erkenntnisse_1",
                    children: [
                        { label: 'Forshung und Erkenntnisse_01', url:"#" },
                        { label: 'Forshung und Erkenntnisse_02', url:"#" },
                        { label: 'Forshung und Erkenntnisse_03', url:"#" },
                        { label: 'Forshung und Erkenntnisse_04', url:"#" },
                        { label: 'Forshung und Erkenntnisse_05', url:"#" },
                    ]
                }
            ]
        },
    ]

return(
    <nav>
        <button className="menu">
            {menuItems.map((item, index) => (
                <MenuItem key={index} item={item} onClick={handleSubMenuClick} />
            ))}
        </button>
    </nav>
)

}

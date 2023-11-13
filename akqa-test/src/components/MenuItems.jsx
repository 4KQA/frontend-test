import MenuItem from "./dropdown"
import '../App.css'

export default function NavLinks() {
    const menuItems = [
        {
            label: "Bedingungen",
            link: "#",
            children: [
                {
                    label: "Item1",
                    link: "#",
                    children: [
                        { label: 'Item2', link: "#" }
                    ]
                }
            ]
        },
        {
            label: "Behandlungen",
            link: "#",
            children: [
                {
                    label: "Adtralza",
                    link: "#",
                    children: [
                        { label: 'Overview', link: "#" },
                        { label: 'Mode of Action', link: "#" },
                        { label: 'Efficacy', link: "#" },
                        { label: 'Quality of Life', link: "#" },
                        { label: 'Safety', link: "#" },
                        { label: 'Dosing', link: "#" },
                        { label: 'News', link: "#" },
                        { label: 'Technical information', link: "#" },
                    ]
                },
                {
                    label: "Diavonex",
                    link: "#",
                    children: [
                        { label: 'Item2', link: "#" }
                    ]
                },
                {
                    label: "Diavobet",
                    link: "#",
                    children: [
                        { label: 'Item2', link: "#" }
                    ]
                },
                {
                    label: "Enstilar",
                    link: "#",
                    children: [
                        { label: 'Item2', link: "#" }
                    ]
                },
                {
                    label: "Fucidin",
                    link: "#",
                    children: [
                        { label: 'Item2', link: "#" }
                    ]
                },
                {
                    label: "Kyntheum",
                    link: "#",
                    children: [
                        { label: 'Item2', link: "#" }
                    ]
                },
                {
                    label: "Protopic",
                    link: "#",
                    children: [
                        { label: 'Item2', link: "#" }
                    ]
                },
                {
                    label: "Skinoren",
                    link: "#",
                    children: [
                        { label: 'Item2', link: "#" }
                    ]
                },
                {
                    label: "Tralokiumab",
                    link: "#",
                    children: [
                        { label: 'Item2', link: "#" }
                    ]
                },
                {
                    label: "Xamiol",
                    link: "#",
                    children: [
                        { label: 'Item2', link: "#" }
                    ]
                },
            ]
        },
        {
            label: "Veranstaltung",
            link: "#",
            children: [
                {
                    label: "Item1",
                    link: "#",
                    children: [
                        { label: 'Item2', link: "#" }
                    ]
                }
            ]
        },
        {
            label: "Werkzeuge",
            link: "#",
            children: [
                {
                    label: "Item1",
                    link: "#",
                    children: [
                        { label: 'Item2', link: "#" }
                    ]
                }
            ]
        },
        {
            label: "Forschung und Erkenntnisse",
            link: "#",
            children: [
                {
                    label: "Item1",
                    link: "#",
                    children: [
                        { label: 'Item2', link: "#" }
                    ]
                }
            ]
        },
    ]

return(
    <nav>
        <ul className="menu">
            {menuItems.map((item, index) => (
                <MenuItem key={index} item={item} />
            ))}
        </ul>
    </nav>
)

}

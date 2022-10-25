import logo from "../assets/svg/logos/DermaWorldLogo.svg"
import mobileNav from "../assets/svg/icons/bars.svg"

export default function NavTopBar() {
    return (
        <section>
            <div className="navTopBar contentPadding">
                <a href="/"><img src={logo} alt="DERMA World Logo" title="DERMA World - By LEO Pharma"></img></a>
                <form className="navTopBarSearchForm">
                    {/* Input Search Icon added in CSS - bg */}
                    <input type="text" placeholder="search"></input>
                </form>
            </div>
            <div className="navTopBarMobile contentPadding">
                <a href="/"><img src={logo} alt="DERMA World Logo" title="DERMA World - By LEO Pharma"></img></a>
                <div className="mobileMenu">
                    <img src={mobileNav} alt="Mobile Navigation Logo Bars"></img>
                </div>
            </div>
        </section>
    );
}
import heroImage from "../assets/images/IVA-Cover-ohne-retuschiert-mobile.png";
import heroImageDesktop from "../assets/images/IVA-Cover-ohne-retuschiert-1.png";
import adtralzaLogo from "../assets/svg/logos/AdtralzaLogo.svg";

export default function Hero() {
    return(
        <section 
            className="hero"
            style={{
                backgroundImage: `url(${heroImageDesktop})`
            }}
        >
        
            <div className="heroTextContainer contentPadding">
                <img src={adtralzaLogo} alt="Adtralza Logo (Tralokinumab)" title="Adtralza Logo (Tralokinumab)"></img>
                <h2>Adtralza® is a new treatment for adult patients with 
                <br></br>moderate-to-severe atopic dermatitis (eczema) who are candidates for systemic therapy.</h2>
            </div>

            <div 
                className="heroMobileImage"
                style={{
                backgroundImage: `url(${heroImage})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }}
            >    
            </div>
        </section>
    );
}
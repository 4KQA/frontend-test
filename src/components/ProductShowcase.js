import productShowcaseImage from "../assets/images/adtralza-packshot-gebaut-01-2.png";

export default function ProductShowcase() {
    return(
        <section className="productShowcase bgGray">
            <div className="productShowcaseBox contentPadding">
                <div className="half">
                    <img src={productShowcaseImage} alt="Adtralza Injection 150mg/1 mL syringe (tralokinumab-ldrm)" title="Adtralza Injection 150mg/1 mL syringe (tralokinumab-ldrm)"></img>
                </div>
                
                <div className="productShowCaseTextContainer half">
                    <h2>It is the first and only biologic developed 
                        to specifically neutralize IL-13, a key driver 
                        of atopic dermatitis signs and 
                        symptoms(1,2)
                    </h2>
                    <p>Learn more about how Adtralza® works and how to use it in treatment.</p>
                </div>
            </div>
        </section>
    );
}
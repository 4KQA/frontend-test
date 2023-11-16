import lady from '../assets/lady.png'
import inject from '../assets/inject.png'

import { DefaultCard } from "../components/cards";

export default function Tools() {
    return (
        <section className='tools'>
            <h2>Clinical tools - at a glance</h2>

            <div>
                <DefaultCard
                    image={lady}
                    title="Dosing guide"
                    descrip="Adtralza&#174; has a straightforward dosing regimen, with 150 mg prefilled syringes(1)."
                    link="Learn more about application and dosing"
                />

                <DefaultCard
                    image={inject}
                    title="Patient injection made simple"
                    descrip="This step by step video guide shows the patient how to self inject using the two syringes that come in the Adtralza&#174; carton."
                    link="Watch the video"
                />
            </div>
        </section>
    )
}
import number from '../assets/bobler/number.svg'
import handheart from '../assets/bobler/handheart.svg'
import handsecure from '../assets/bobler/handsecure.svg'
import { BubbleCard } from '../components/cards'

export default function Info() {
    return (
        <section className='bub-card-container'>
            <BubbleCard
                image={number}
                title="Long term suistained improvement"
                descrip="9 out of 10 respondents experienced sustained disease control in clinical trials 10, providing sustained improvements in the burden of disease(1,2,1,8*)."
                link="See efficacy and trial data"
            />

            <BubbleCard
                image={handheart}
                title="Improvements in the burden of disease"
                descrip="Patients in clinical trials saw an improvement in Quality of Life with early symptom relief and sustained improvements in burden of disease from week 16 to 32(12,13)."
                link="Learn more about quality of life improvements"
            />

            <BubbleCard
                image={handsecure}
                title="Good safety profile"
                descrip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales fringilla diam, nec faucibus nibh. Vestibulum vehicula odio in tellus egestas pharetra."
                link="See safety profile"
            />
        </section>
    )
}
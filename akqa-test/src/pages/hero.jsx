import adtralza from '../assets/adtralza.png'

export default function Hero() {
    return (
        <section className="pic-w-txt">
            <div className='info-sec'>
                <img src={adtralza} alt=".." className='logo-pic' />
                <h2>Adtralza&#174; is a new treatment for adult patients with moderate-to-severe atopic dermatitis (eczema) who are candidates for systemic therapy.</h2>
            </div>
        </section>
    )
}
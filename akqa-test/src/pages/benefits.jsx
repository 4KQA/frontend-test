import vidplaceholder from '../assets/vidplaceholder.png'


export default function Benefits() {
    return (
        <section className='benefits'>
            <div className="b-description">
                <h2>Adtralza&#174; neutralizes IL-13, a key driver of Atopic Dermatitis signs and symptoms.</h2>
                <p>By specifically targeting the IL-13 cytokine, Adtralza® inhibits the interaction with type II receptors and prevents IL-13-induced inflammatory responses in the skin(1,2).</p>
            </div>

            <div className="b-container">
                <div className="b-list">
                    <p>Adtralza&#174; selectively modulates the dysregulated immune system by(1):</p>
                    <ul className="b-listItems">
                        <li>- Reducing markers of skin inflammation</li>
                        <li>- Improving markers of skin barrier integrity</li>
                        <li>- Reducing epidermal thickness</li>
                    </ul>
                    <button placeholder="Watch the video" className="b-ctaBtn">Watch the video</button>
                    <small><p>Duration: 2:43</p></small>
                </div>

                <div className="b-vid">
                    <img src={vidplaceholder} alt="Video to be displayed here, this is a placeholder."></img>
                </div>

            </div>
        </section>
    )
}
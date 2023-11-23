import React from 'react'
import molecules from "./img/molecules.png"
import Button from './Button'
import Heading from './Heading'

export default function Video() {
  return (
    <div className='video'>
        <Heading heading={"Adtralza® neutralizes IL-13, a key driver of Atopic Dermatitis signs and symptoms."}/>
        <div className="container">
        <section>
            <p>By specifically targeting the IL-13 cytokine, Adtralza® inhibits the interaction with type II receptors and prevents IL-13-induced inflammatory responses in the skin(1,2). Adtralza® selectively modulates the dysregulated immune system by(1)</p>
            <ul>
                <li>Reducing markers of skin inflammation</li>
                <li>Improving markers of skin barrier integrity </li>
                <li>Reducing epidermal thickness</li>
            </ul>
            <Button buttonText={"Watch the video"}/>
            <p>Duration: 2:43</p>
        </section>
        <section>
            <img src={molecules} alt="Molecules" />
        </section>
        </div>
    </div>
  )
}

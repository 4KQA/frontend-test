import React from 'react'
import nurse from "./img/nurse.png"
import dosing from "./img/dosing.png"
import "./maincontent.css"
import Heading from './Heading'

export default function InfoGuide() {
  return (
    <article className='tools'>
        <Heading heading={"Clinical tools - at a glance"}/>
        <div className="container">
        <section className='card'>
            <img src={nurse} alt="Female nurse in a blue shirt, smiling" />
            <div className="guide">
              <h2>Dosing guide</h2>
              <p>Adtralza® has a straightforward dosing regimen, with 150 mg prefilled syringes(1). </p>
              <a href="#" aria-label='Learn more'>Learn more about application and dosing</a>
            </div>
        </section>
        <section className='card'>
            <img src={dosing} alt="Female in shorts injecting Adtralza in the thigh with a syringe" />
            <div className="guide">
              <h2>Patient injection made simple</h2>
              <p>This step by step video guide shows the patient how to self inject using the two syringes that come in the Adtralza® carton. </p>
              <a href="#" aria-label='Watch video'>Watch the video</a>
            </div>
        </section>
        </div>
    </article>
  )
}

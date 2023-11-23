import React from 'react'
import NineOutOfTen from "./img/9-10.png"
import heart from "./img/heart.png"
import safety from "./img/safety.png"
import "./maincontent.css"

export default function HowTo() {
  return (
    <article className='container how-to'>
        <div className="box">
        <section className='first-step'>
            <img src={NineOutOfTen} alt="" />
            <h2>Long term sustained improvement</h2>
            <p>9 out of 10 respondents experienced sustained disease control in clinical trials 10, providing sustained improvements in the burden of disease(1,2, 1, 8*†‡). </p>
            <a href="#" aria-label='See efficacy'>See efficacy and trial data</a>
        </section>
        <section className='second-step'>
            <img src={heart} alt="" />
            <h2>Improvements in the burden of disease</h2>
            <p>Patients in clinical trials saw an improvement in Quality of Life with early symptom relief and sustained improvements in burden of disease from week 16 to 32(12,13).</p>
            <a href="#">Learn more about quality of life improvements</a>
        </section>
        <section className='third-step'>
            <img src={safety} alt="" />
            <h2>Good safety profile</h2>
            <a href="#" aria-label='See safety profile'>See safety profile </a>
        </section>
        </div>
    </article>
  )
}

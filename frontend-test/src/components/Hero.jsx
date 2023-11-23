import React from 'react'
import "./hero.css"
import Logo from "./img//adtralza-logo.png"

export default function Hero() {
  return (
    <section className='backdrop'>
        <div className='container'>
            <div className='box'>
                <img className='logo' src={Logo} alt="Adtralza logo" />
                <h1>
                Adtralza® is a new treatment for adult patients with moderate-to-severe atopic dermatitis (eczema) who are candidates for systemic therapy.
                </h1>
            </div>
        </div>
    </section>
  )
}

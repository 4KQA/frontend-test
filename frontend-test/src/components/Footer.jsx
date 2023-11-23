import React from 'react'
import "./footer.css"
import LeoLogo from "./img/leo-logo.png"

export default function Footer() {
  return (
    <footer className='footer'>
        <div className="container">
        <img className='leo-logo' src={LeoLogo} alt="Leo Pharma logo" />
        <ul>
            <li><a href="#" aria-label='Contact'>Contact</a></li>
            <li><a href="#" aria-label='Imprint'>Imprint</a></li>
            <li><a href="#" aria-label='Conditions'>Conditions</a></li>
            <li><a href="#" aria-label='Terms of use'>Terms of use</a></li>
            <li><a href="#" aria-label='Privacy'>Privacy</a></li>
            <li><a href="#" aria-label='Cookie content'>Cookie content</a></li>
        </ul>
        <p className='copyright'>
            © Copyright LEO Pharma 2020
            LEO and the LEO Lion Design
            are registered trademarks
            of LEO Pharma
            All rights reserved
        </p>
        </div>
    </footer>
  )
}

import React from 'react';
import "./navigation.css"

export default function MainNavigation({handleFirstNavClick}) {

  return (
    <header>
      <nav>
        <div className='navItems'>
            <a href="#" aria-label='Bedingungen'>Bedingungen</a>
            <a href="/" aria-label='Behandlungen' onClick={handleFirstNavClick} className='active'>Behandlungen</a>
            <a href="#" aria-label='Veranstaltungen' >Veranstaltungen</a>
            <a href="#" aria-label='Werkzeuge' >Werkzeuge</a>
            <a href="#" aria-label='Forschung und Erkenntnisse' >Forschung und Erkenntnisse</a>
        </div>
      </nav>
    </header>
  );
}

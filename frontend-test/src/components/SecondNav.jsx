import React, { useState } from 'react';

export default function SecondNav({handleSecondNavClick}) {

  return (
    <header>
      <nav className='secondNav'>
        <div className='navItems'>
            <a href="/" aria-label='Adtralza' onClick={handleSecondNavClick} className='active active-with-underline'>Adtralza</a>
            <a href="#" aria-label='Diavonex'>Diavonex</a>
            <a href="#" aria-label='Diavobet'>Diavobet</a>
            <a href="#" aria-label='Enstilar'>Enstilar</a>
            <a href="#" aria-label='Fucidin'>Fucidin</a>
            <a href="#" aria-label='Adtralza'>Kyntheum</a>
            <a href="#" aria-label='Kyntheum'>Protopic</a>
            <a href="#" aria-label='Skinoren'>Skinoren</a>
            <a href="#" aria-label='Tralokinumab'>Tralokinumab</a>
            <a href="#" aria-label='Xamiol'>Xamiol</a>
        </div>
      </nav>
    </header>
  );
}

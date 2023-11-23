import React from 'react'

export default function AdtralzaNav() {
  return (
    <header>
      <nav className='thirdNav'>
          <div className='navItems'>
              <a href="/" aria-label='Overview' className='active active-with-underline'>Overview</a>
              <a href="#" aria-label='Mode of Action' >Mode of Action</a>
              <a href="#" aria-label='Efficacy' >Efficacy</a>
              <a href="#" aria-label='Quality of Life' >Quality of Life</a>
              <a href="#" aria-label='Safety' >Safety</a>
              <a href="#" aria-label='Dosing' >Dosing</a>
              <a href="#" aria-label='News' >News</a>
              <a href="#" aria-label='Technical Information' >Technical Information</a>
          </div>
      </nav>
    </header>
  )
}
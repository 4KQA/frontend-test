import React from 'react'
import dermaworld from "./img/DermaWorld.png"
import searchIcon from "./img/searchIcon.png"

export default function SearchBar() {
  return (
    <header>
        <nav>
            <div className='headerItems'>
              <a href="/" aria-label='Home'>
              <img src={dermaworld} alt="Dermaworld by Leo Pharma logo" />
              </a>
              <input type="search" placeholder='SEARCH' aria-label="Search" />
            </div>
        </nav>
    </header>
  )
}

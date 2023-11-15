"use client";
import { sourceSans } from "../fonts";
import { useState } from "react";
// import PrimaryNavigation from "./components/PrimaryNavigation";

function TopBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <ul className={`${sourceSans.className} flex place-items-center justify-between`}>
        <li>
          <a href="#" aria-label="Home">
            logo
          </a>
        </li>
        <li>
          <label className="sr-only" htmlFor="search-field">
            Search
          </label>
          <div className="flex place-items-center gap-2">
            <input className="border-2 border-black hidden md:block" type="text" name="search-field" id="search-field" placeholder="Search" />
            <button type="submit">
              <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7.61905" cy="7.61905" r="7.11905" stroke="black" />
                <path d="M13.3337 12.3811L19.167 17.279" stroke="black" stroke-linecap="round" />
              </svg>
            </button>
            <button onClick={() => setMenuOpen((prevState) => !prevState)} className="md:hidden w-6" aria-label="Menu" aria-expanded="false">
              <svg viewBox="0 0 428 304" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.5 27H401.5M26.5 152H401.5M26.5 277H401.5" stroke="black" stroke-width="52.0833" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
        </li>
      </ul>
      {isMenuOpen ? <Menu /> : ""}
    </nav>
  );
}

export default TopBar;

function Menu() {
  return (
    <div>
      <ul className={`${sourceSans.className} lg:flex justify-between`}>
        <li>
          <button aria-expanded="false" href="#">
            Bedingungen
          </button>
        </li>
        <li>
          <button aria-expanded="false" href="#">
            Behandlungen
          </button>
        </li>
        <li>
          <button aria-expanded="false" href="#">
            Veranstaltungen
          </button>
        </li>
        <li>
          <button aria-expanded="false" href="#">
            Werkzeuge
          </button>
        </li>
        <li>
          <button aria-expanded="false" href="#">
            Forschung und Erkenntnisse
          </button>
        </li>
      </ul>
    </div>
  );
}

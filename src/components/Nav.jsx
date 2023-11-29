import { useState } from "react";
import Secondarynav from "./Secondarynav";
import Thirdnav from "./Thirdnav";

import logo from "../assets/Logo/DermaWorld.svg";
import search from "../assets/Logo/search.svg";

function Nav() {
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);

  const navElements = [
    {
      Title: "Bedingungen",
    },
    {
      Title: "Behandlungen",
    },
    {
      Title: "Veranstaltungen",
    },
    {
      Title: "Werkzeuge",
    },
    {
      Title: "Forschung und Erkenntnisse",
    },
  ];

  return (
    <nav className="mt-2">
      <div className="flex justify-between mx-10 mb-5">
        <img src={logo} alt="DermaWorld by Leo Pharma logo" />
        <div className="flex flex-row gap-10">
          <div className="flex flex-row md:border-solid md:border-2 md:border-gray md:rounded-2xl px-2">
            <input className=" hidden md:block p-1 m-1" type="search" placeholder="Search" />
            <img className=" w-14 md:w-full" src={search} alt="Search logo" />
          </div>
          <button onClick={() => document.querySelector("ul").classList.toggle("hidden")} className=" w-full md:hidden">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round"></path> <path d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round"></path> <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round"></path>{" "}
              </g>
            </svg>
          </button>
        </div>
      </div>
      <ul className=" hidden md:flex flex-row gap-5 font-normal px-10">
        {navElements.map((item) => (
          <li className="hover:opacity-50 active:opacity-50" key={item.Title}>
            <button onClick={() => setShowSecond(!showSecond)}>{item.Title}</button>
          </li>
        ))}
      </ul>
      {showSecond === true ? <Secondarynav showThird={showThird} setShowThird={setShowThird} /> : ""}
      {showThird === true && showSecond === true ? <Thirdnav /> : ""}
    </nav>
  );
}

export default Nav;

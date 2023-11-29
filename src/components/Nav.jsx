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
        <div className="flex flex-row border-solid border-2 border-gray rounded-2xl px-2">
          <input className=" hidden md:block p-1 m-1" type="search" placeholder="Search" />
          <img src={search} alt="Search logo" />
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

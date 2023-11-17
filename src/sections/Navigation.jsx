import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Search from "../components/Search";
import { FiMenu } from "react-icons/fi";

export default function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="navbar">
      <div className="menuIcon" onClick={toggleMenu}>
        <FiMenu size="12vw" color="#00609c" />
      </div>
      <div className={showMenu ? "menu active" : "menu"}>
        <NavLink to="/conditions">Conditions</NavLink>

        <div className="withSubNav">
          <NavLink to="/treatments">Treatments</NavLink>

          <div className="subNav">
            <div className="productOverview">
              <div className="adtralza">
                <NavLink to="/treatments/adtralza">Adtralza</NavLink>

                <div className="subSubNav">
                  <div className="productInfo">
                    <NavLink to="/treatments/adtralza/overview">
                      Overview
                    </NavLink>

                    <NavLink to="/treatments/adtralza/mode">
                      Mode of Action
                    </NavLink>

                    <NavLink to="/treatments/adtralza/efficacy">
                      Efficacy
                    </NavLink>

                    <NavLink to="/treatments/adtralza/quality">
                      Quality of Life
                    </NavLink>

                    <NavLink to="/treatments/adtralza/safety">Safety</NavLink>

                    <NavLink to="/treatments/adtralza/dosing">Dosing</NavLink>

                    <NavLink to="/treatments/adtralza/news">News</NavLink>

                    <NavLink to="/treatments/adtralza/information">
                      Technical Information
                    </NavLink>
                  </div>
                </div>
              </div>

              <NavLink to="/treatments/diavonex">Diavonex</NavLink>

              <NavLink to="/treatments/diavobet">Diavobet</NavLink>

              <NavLink to="/treatments/enstilar">Enstilar</NavLink>

              <NavLink to="/treatments/fucidin">Fucidin</NavLink>

              <NavLink to="/treatments/kyntheum">Kyntheum</NavLink>

              <NavLink to="/treatments/protopic">Protopic</NavLink>

              <NavLink to="/treatments/skinoren">Skinoren</NavLink>

              <NavLink to="/treatments/tralokinumab">Tralokinumab</NavLink>

              <NavLink to="/treatments/xamiol">Xamiol</NavLink>
            </div>
          </div>
        </div>

        <NavLink to="/events">Events</NavLink>

        <NavLink to="/tools">Tools</NavLink>

        <NavLink to="/research">Research & Findings</NavLink>

        <Search />
      </div>
    </nav>
  );
}

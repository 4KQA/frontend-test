import React from "react";
import { NavLink } from "react-router-dom";
import Search from "./Search";

export default function Navigation() {
  return (
    <nav className="navbar">
      <ul className="menu fixedMargin">
        <li className="menuItem">
          <NavLink to="/conditions">Conditions</NavLink>
        </li>
        <li className="withSubNav">
          <NavLink to="/treatments">
            Treatments
            <div className="subNav">
              <ul>
                <li className="productOverview">
                  <NavLink to="/treatments/adtralza">
                    Adtralza
                    <div className="productInfo">
                      <ul>
                        <li>
                          <NavLink to="/treatments/adtralza/overview">
                            Overview
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/treatments/mode">
                            Mode of Action
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/treatments/efficacy">Efficacy</NavLink>
                        </li>
                        <li>
                          <NavLink to="/treatments/quality">
                            Quality of Life
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/treatments/safety">Safety</NavLink>
                        </li>
                        <li>
                          <NavLink to="/treatments/dosing">Dosing</NavLink>
                        </li>
                        <li>
                          <NavLink to="/treatments/news">News</NavLink>
                        </li>
                        <li>
                          <NavLink to="/treatments/information">
                            Technical Information
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/treatments/diavonex">Diavonex</NavLink>
                </li>
                <li>
                  <NavLink to="/treatments/diavobet">Diavobet</NavLink>
                </li>
                <li>
                  <NavLink to="/treatments/enstilar">Enstilar</NavLink>
                </li>
                <li>
                  <NavLink to="/treatments/fucidin">Fucidin</NavLink>
                </li>
                <li>
                  <NavLink to="/treatments/kyntheum">Kyntheum</NavLink>
                </li>
                <li>
                  <NavLink to="/treatments/protopic">Protopic</NavLink>
                </li>
                <li>
                  <NavLink to="/treatments/skinoren">Skinoren</NavLink>
                </li>
                <li>
                  <NavLink to="/treatments/tralokinumab">Tralokinumab</NavLink>
                </li>
                <li>
                  <NavLink to="/treatments/xamiol">Xamiol</NavLink>
                </li>
              </ul>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/events">Events</NavLink>
        </li>
        <li>
          <NavLink to="/tools">Tools</NavLink>
        </li>
        <li>
          <NavLink to="/research">Research & Findings</NavLink>
        </li>
        <Search />
      </ul>
    </nav>
  );
}

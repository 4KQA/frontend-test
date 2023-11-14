import { NavLink } from "react-router-dom";
import logo from "../images/logo.svg";

export default function Header() {
  return (
    <div className="header fixedMargin">
      <NavLink to="/">
        <img src={logo} alt="DermaWorld by LEO Pharma logo" />
      </NavLink>
    </div>
  );
}

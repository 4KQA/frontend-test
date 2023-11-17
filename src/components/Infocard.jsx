import { NavLink } from "react-router-dom";

export default function Infocard({
  imageSrc,
  heading,
  text,
  linkHref,
  linkText,
}) {
  return (
    <div className="infoCard">
      <img className="hero" src={imageSrc} alt="Card Image" />
      <div className="cardContent cardMargin">
        <h2>{heading}</h2>
        <p>{text}</p>
        <NavLink to={linkHref}>{linkText}</NavLink>
      </div>
    </div>
  );
}

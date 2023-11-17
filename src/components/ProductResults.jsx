import { NavLink } from "react-router-dom";

export default function ProductResults({
  imgSrc,
  altText,
  heading,
  text,
  linkHref,
  linkText,
}) {
  return (
    <>
      <div className="resultsColumn">
        <img src={imgSrc} alt={altText} />
        <div className="resultsText">
          <h2>{heading}</h2>
          <p>{text}</p>
          <NavLink to={linkHref}>{linkText}</NavLink>
        </div>
      </div>
    </>
  );
}

import { useState } from "react";

export default function Infocard({
  imageSrc,
  heading,
  text,
  linkHref,
  linkText,
}) {
  return (
    <div className="infoCard">
      <img src={imageSrc} alt="Card Image" />
      <div className="cardContent cardMargin">
        <h2>{heading}</h2>
        <p>{text}</p>
        <a href={linkHref}>{linkText}</a>
      </div>
    </div>
  );
}

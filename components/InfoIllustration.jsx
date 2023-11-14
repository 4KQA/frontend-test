import React from "react";
import Image from "next/image";

const InfoIllustration = ({
  picture,
  headline,
  description,
  link,
  containerStyle,
  headlineStyle,
  descriptionStyle,
  linkStyle,
}) => {
  return (
    <div>
      <div style={containerStyle} className="flex flex-col px-4">
        <Image
          alt="Hero image til landing page"
          src={picture}
          width={180}
          height={0}
          className="self-center"
        />
        <div className="flex flex-col italic font-lato">
          <h2
            style={headlineStyle}
            className="text-4xl text-navy-blue text-center max-w-md"
          >
            {headline}
          </h2>
          <p
            style={descriptionStyle}
            className="text-lg max-w-sm self-center pt-3"
          >
            {description}
          </p>
          <p style={linkStyle} className="text-center pt-6 text-dark-indigo">
            {link}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoIllustration;

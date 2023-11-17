import { useState } from "react";

export default function ProductVideo({
  heading,
  text,
  point1,
  point2,
  point3,
  duration,
  placeholderSrc,
  altText,
  videoSrc,
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    setIsPlaying(true);
  };
  return (
    <>
      <h2 className="fixedMargin">{heading}</h2>
      <div className="howItWorksFlex fixedMargin">
        <div className="howItWorksText">
          <p>{text}</p>
          <p>— {point1}</p>
          <p>— {point2}</p>
          <p>— {point3}</p>
          <button className="watchButton" onClick={playVideo}>
            Watch the video
          </button>
          <br />
          <p className="videoDuration">Duration: {duration}</p>
        </div>
        <div className="howItWorksVideo">
          {!isPlaying && (
            <div onClick={playVideo}>
              <img src={placeholderSrc} alt={altText} />
            </div>
          )}
          {isPlaying && (
            <video controls>
              <source src={videoSrc} type="video/mp4" />
            </video>
          )}
        </div>
      </div>
    </>
  );
}

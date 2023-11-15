import { useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";

export default function VideoCard({ placeholderSrc, videoSrc, title, text }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    setIsPlaying(true);
  };
  return (
    <div className="videoCard">
      <div className="videoPlaceholder">
        {!isPlaying && (
          <div className="placeholder" onClick={playVideo}>
            <button className="playBtn">
              <FaCirclePlay size="3vw" />
            </button>
            <img src={placeholderSrc} alt="Video Placeholder" />
          </div>
        )}
        {isPlaying && (
          <video className="KOLVideo" controls>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      <div className="videoText">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}

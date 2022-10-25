import React from 'react'
import videoSource from '../assets/video/pexels-artem-podrez-5752729.mp4'
import thumbImage from '../assets/images/adtralzaExplainerVideoThumbnail.png'
import thumbImage2 from '../assets/images/pexels-anna-shvets-3683056.jpg'
import thumbImage3 from '../assets/images/pexels-chokniti-khongchum-2280571.jpg'
import thumbImage4 from '../assets/images/pexels-pixabay-161688.jpg'
import videoSource2 from '../assets/video/video2.mp4'
import videoSource3 from '../assets/video/video3.mp4'
import videoSource4 from '../assets/video/video4.mp4'
import VideoPlayer from './VideoPlayer'
import { useState } from 'react'
import playerIcon from '../assets/svg/icons/IconPlayer.svg'

export default function ExpertInsights() {
  let videoData = [
    {
        id: '1',
        title: 'Video title',
        video: `${videoSource}`,
        thumbNail: `${thumbImage}`,
        description: 'Short description of the contents or subject of the video. You can upload a screen from the video as thumbnail image.'
    },
    {
      id: '2',
      title: 'Video title',
      video: `${videoSource2}`,
      thumbNail: `${thumbImage2}`,
      description: 'Short description of the contents or subject of the video. You can upload a screen from the video as thumbnail image.'
    },
    {
      id: '3',
      title: 'Video title',
      video: `${videoSource3}`,
      thumbNail: `${thumbImage3}`,
      description: 'Short description of the contents or subject of the video. You can upload a screen from the video as thumbnail image.'
    },
    {
      id: '4',
      title: 'Video title',
      video: `${videoSource4}`,
      thumbNail: `${thumbImage4}`,
      description: 'Short description of the contents or subject of the video. You can upload a screen from the video as thumbnail image.'
    }
  ]
  // for showing and hiding the videoplayer
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);

  // Send prop to chilc (videoplayer component) to change state when closing
  const handleVideoPlayer = () => setShowVideoPlayer(!showVideoPlayer);

  // get unique video from data onclick
  const [videoID, setVideoID] = useState("");
  
  return (
    <section className='expertInsights bgGray'>
        {/* Send props to the video player - if state = show, if not hide - reusable*/}
        {showVideoPlayer &&
            (
                <VideoPlayer 
                    handleVideoPlayer={handleVideoPlayer}
                    video={videoID}   
                />
            )
        }
    
      <div className='contentPadding'>
        <div className='expertInsightsHeader'>
          <h2 className='headerFont'>KOL Videos - get expert insights here</h2>
          <p>See what Key opinion leaders have to say about their experiences with Adtralza®</p>
        </div>

        <div className='videoCardsContainer'>
          {
            videoData.map(({id, title, thumbNail, video, description}, index) => {
              return (
                <div className='videoCard' key={id}>
                  <div
                    className='videoCardImage defaultHoverAnimation' 
                    onClick={ () => {setShowVideoPlayer(!showVideoPlayer); setVideoID(video);}}
                    style={{
                      backgroundImage: `url(${thumbNail})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}  
                  >
                    <img src={playerIcon} alt="VideoPlayer Icon"></img>
                  </div>
                  
                  <div className='videoCardText'>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>

    </section>
  );
}

import React, { useState } from 'react'
import image from '../assets/images/adtralzaExplainerVideoThumbnail.png'
import VideoPlayer from './VideoPlayer';
import video from '../assets/video/pexels-artem-podrez-5752729.mp4'


export default function ExplainerVideo() {

    const [showVideoPlayer, setShowVideoPlayer] = useState(false);
    const handleVideoPlayer = () => setShowVideoPlayer(!showVideoPlayer);
    return (
        <section className='explainerVideo bgGray'>
            {/* Send props to the video player - if state = show, if not hide - reusable*/}
            {showVideoPlayer &&
                (
                    <VideoPlayer 
                        handleVideoPlayer={handleVideoPlayer}
                        video={video}   
                    />
                )
            }

            <div className='contentPadding'>
                <h2>Adtralza® neutralizes IL-13, a key driver of Atopic Dermatitis signs and symptoms.</h2>
                <div className='explainerVideoBox'>
                    <div className='explainerVideoBoxLeft'>
                        <p>
                            By specifically targeting the IL-13 cytokine, Adtralza® inhibits the interaction with type II receptors and prevents IL-13-induced inflammatory responses in the skin(1,2).

                            <br></br>
                            <br></br>
                            Adtralza® selectively modulates the dysregulated immune system by(1): 

                            <br></br>
                            <br></br>— Reducing markers of skin inflammation 
                            <br></br>— Improving markers of skin barrier integrity 
                            <br></br>— Reducing epidermal thickness
                        </p>
                        <div className='explainerVideoBoxLeftBottom'>
                            <button className='mainBtnPurple defaultHoverAnimation' onClick={handleVideoPlayer}>Watch the video</button>
                            
                            {/* This value could be dynamic with the use of onMetaDataLoad, video.duration etc. */}
                            <p>Duration: 2:43</p>
                        </div>

                    </div>
                    <img src={image} alt='Adtralza Explainer Video Thumbnail. Molecules.'></img>
                </div>
            </div>
        </section>
    );
}

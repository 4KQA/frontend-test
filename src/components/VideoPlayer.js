import React from 'react'

export default function VideoPlayer({ handleVideoPlayer, video}) {
  return (
    <section className='videoPlayer'>
        <button className="defaultHoverAnimation" onClick={handleVideoPlayer}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <video src={video} controls autoPlay></video>
    </section>
  );
}

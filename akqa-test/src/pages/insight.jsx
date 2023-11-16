import { VideoCard } from "../components/cards";

export default function Insight(){
    return(
        <section className='expert-insight'>
          <h2>KOL Videos - get expert insights here</h2>
          <p>See what Key opinion leaders have to say about their experiences with Adtralza&#174;</p>

          <article>
            <div>
              <VideoCard
                title="Video title"
                descrip="Short description of the contents or subject of the video.  You can upload a screen from the video as thumbnail image"
              />
              <VideoCard
                title="Video title"
                descrip="Short description of the contents or subject of the video.  You can upload a screen from the video as thumbnail image"
              />
            </div>
            <div>
              <VideoCard
                title="Video title"
                descrip="Short description of the contents or subject of the video.  You can upload a screen from the video as thumbnail image"
              />
              <VideoCard
                title="Video title"
                descrip="Short description of the contents or subject of the video.  You can upload a screen from the video as thumbnail image"
              />
            </div>
          </article>
        </section>
    )
}
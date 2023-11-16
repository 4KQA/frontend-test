function Videos() {
  return (
    <section className="bg-dermaGrey px-4 lg:px-60 py-16">
      <div className="mb-10"> 
          <h2 className="text-2xl text-dermaPrimary mb-2">KOL Videos - get expert insights here</h2>
          <p>See what Key opinion leaders have to say about their experiences with Adtralza®</p>
      </div>
      <div className="grid gap-10 lg:grid-cols-2 gap-y-20">
        <Video />
        <Video />
        <Video />
        <Video />
      </div>
    </section>
  );
}

export default Videos;

function Video() {
  return (
    <article className="flex flex-col xl:flex-row gap-5 max-w-xl">
      <video src="#" poster="/video-placeholder.svg"></video>
      <div>
        <h3 className="text-lg text-dermaPrimary">Video title</h3>
        <p>Short description of the contents or subject of the video. You can upload a screen from the video as thumbnail image</p>
      </div>
    </article>
  );
}

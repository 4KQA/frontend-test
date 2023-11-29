import Video from "./Video";

function Videos() {
  return (
    <section className="m-5 md:m-10">
      <h2 className="text-2xl text-leoBlue">KOL Videos - get expert insights here</h2>
      <p className="mb-5">See what Key opinion leaders have to say about their experiences with Adtralza® </p>
      <div className="grid md:grid-cols-2">
        <Video />
        <Video />
        <Video />
        <Video />
      </div>
    </section>
  );
}

export default Videos;

import play from "../assets/Logo/play.svg";

function Video() {
  return (
    <div className="flex flex-col lg:flex-row gap-5">
      {/* <img className="p-5 bg-leoPink rounded-full" src={play} alt="" /> */}
      <video className="bg-white" src="#" poster={play}></video>
      <div>
        <h3 className="text-leoBlue">Video title</h3>
        <p>Short description of the contents or subject of the video. You can upload a screen from the video as thumbnail image</p>
      </div>
    </div>
  );
}

export default Video;

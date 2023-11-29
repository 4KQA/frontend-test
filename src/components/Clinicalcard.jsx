function Clinicalcard(props) {
  return (
    <div className="flex flex-col bg-leoGray md:w-2/5 gap-6">
      <img src={props.image} alt={props.alt} />
      <div className="flex flex-col justify-between gap-5 p-10">
        <div>
          <h3 className="text-leoBlue">{props.heading}</h3>
          <p>{props.text}</p>
        </div>
        <a className=" text-leoPink" href="#">
          {props.link}
        </a>
      </div>
    </div>
  );
}

export default Clinicalcard;

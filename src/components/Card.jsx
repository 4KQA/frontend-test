function Card(props) {
  return (
    <article className="flex flex-col gap-5 text-center md:content-between md:w-1/3">
      <img className=" p-3 md:p-10" src={props.image} alt={props.alt} />
      <h3 className=" text-leoBlue">{props.heading}</h3>
      <p>{props.text}</p>
      <a className=" text-leoPink" href="#">
        {props.link}
      </a>
    </article>
  );
}

export default Card;

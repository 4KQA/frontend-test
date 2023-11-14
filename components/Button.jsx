import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        onClick={props.click}
        className="rounded-full text-white bg-navy-blue w-72 h-12 text-lg whitespace-nowrap flex justify-center items-center hover:bg-dark-indigo"
      >
        {props.content}
      </button>
    </div>
  );
};

export default Button;

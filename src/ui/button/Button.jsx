import React from "react";
import scss from "./Button.module.scss";

const Button = ({ size = "variant1", onClick, text, fsz }) => {
  return (
    <button
      className={`${scss[size]}`}
      onClick={onClick}
      style={{ fontSize: fsz }}
    >
      {text}
    </button>
  );
};

export default Button;

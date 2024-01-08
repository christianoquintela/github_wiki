import React from "react";
import "./button.css";

function Button({ onClick }) {
  return <div onClick={onClick} className='button'>Buscar</div>;
}

export default Button;

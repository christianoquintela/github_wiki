import React from "react";
import './input.css';

function Input({ value, onChange }) {
  console.log("valor:",value);
  return (
    <div className='container_input'>
      <input value={value} onChange={onChange} className='input' />

    </div>
  );
}

export default Input;

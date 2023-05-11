import React from "react";
import './Input.css'

const Input = (props) => {
  return (
    <div className="Write">
      <input
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;

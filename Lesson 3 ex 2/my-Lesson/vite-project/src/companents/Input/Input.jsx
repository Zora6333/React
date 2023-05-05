import React from "react";
import './Input.css'

const Input = (props) => {
  return (
    <div className="Write">
      <input
        type="text"
        value={props.value1}
        onChange={(event) => props.onChange1(event.target.value)}
        placeholder={props.placeholder1}
      />

      <input
        type="text"
        value={props.value2}
        onChange={(event) => props.onChange2(event.target.value)}
        placeholder={props.placeholder2}
      />
    </div>
  );
};

export default Input;

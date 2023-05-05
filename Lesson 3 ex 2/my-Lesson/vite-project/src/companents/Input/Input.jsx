import { useState } from "react";
import "./Input.css";

export const Input = (props) => {
  return (
    <div>
      <input
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
      
      <input
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </div>
  );
};

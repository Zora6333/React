import React from "react";
import "../Contacts/Contacts.css";

function Contacts() {
  return (
      <ul className="wrapper">
        <li className="icon facebook">
          <span className="tooltip">Facebook</span>
          <span>
            <i className="fab fa-facebook-f"></i>
          </span>
        </li>
        <li className="icon twitter">
          <span className="tooltip">Twitter</span>
          <span>
            <i className="fab fa-twitter"></i>
          </span>
        </li>
        <li className="icon instagram">
          <span className="tooltip">Instagram</span>
          <span>
          <i className="fa fa-instagram fa-2x"></i>
          </span>
        </li>
        <li className="icon github">
          <span className="tooltip">Github</span>
          <span>
            <i className="fab fa-github"></i>
          </span>
        </li>
        <li className="icon youtube">
          <span className="tooltip">Youtube</span>
          <span>
            <i className="fab fa-youtube"></i>
          </span>
        </li>
      </ul>
  );
}

export default Contacts;

import React from "react";
import "../Contacts/Contacts.css";

function Contacts() {
  return (
      <ul className="wrapper">
        <li className="icon facebook">
          <span className="tooltip">Facebook</span>
          <span>
            <i className="fab fa-facebook-f"><img src="./src/pages/Contacts/free-icon-facebook-4494475.png" height={50} width={50}/></i>
          </span>
        </li>
        <li className="icon twitter">
          <span className="tooltip">Twitter</span>
          <span>
            <i className="fab fa-twitter"><img src="./src/pages/Contacts/free-icon-twitter-4494477.png" height={50} width={50}/></i>
          </span>
        </li>
        <li className="icon instagram">
          <span className="tooltip">Instagram</span>
          <span>
          <i className="fafa-instagramfa-2x"><img src="./src/pages/Contacts/free-icon-instagram-2111463.png" height={50} width={50}/></i>
          </span>
        </li>
        <li className="icon github">
          <span className="tooltip">Github</span>
          <span>
            <i className="fab fa-github"><img src="./src/pages/Contacts/free-icon-github-733553.png" height={50} width={50}/></i>
          </span>
        </li>
        <li className="icon youtube">
          <span className="tooltip">Youtube</span>
          <span>
            <i className="fab fa-youtube"><img src="./src/pages/Contacts/free-icon-youtube-4494485.png" height={50} width={50}/></i>
          </span>
        </li>
      </ul>
  );
}

export default Contacts;

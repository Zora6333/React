import React from "react";
import "../AboutUs/AboutUs.css";

function AboutUs() {
  return (
    <div className="Page">
      <div className="About">
        <h1>About Us</h1>
      </div>
      <div className="Greeting">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ad
          perspiciatis corporis fuga velit dolores quam magni facilis nemo nisi
          animi voluptatem vitae quaerat repellendus consequuntur ipsam, ea ex
          exercitationem!
        </p>
      </div>
      <div className="Team">
        <a className="Person_1" href="https://en.wikipedia.org/wiki/Billy_Herrington">
          <p>Billy Herrington</p>
          <p>CEO</p>
          <img src="./src/pages/Img/1.jpg"  width="189" height="200" />
        </a>
        <a className="Person_2" href="https://24smi-org.turbopages.org/24smi.org/s/celebrity/107909-rikardo-milos.html">
          <p>Ricardo Milos</p>
          <p>COO</p>
          <img src="./src/pages/Img/1672838204_foni-club-p-oboi-rikardo-milos-29.jpg" width="189" height="200" />
        </a>
        <a className="Person_3" href="https://en.wikipedia.org/wiki/Arnold_Schwarzenegger">
          <p>Arnold Schwarzenegger</p>
          <p>CTO</p>
          <img src="./src/pages/Img/c609d8309d370d30d45ae2baf1ac0674.jpg" width="189" height="200" />
        </a>
        <a className="Person_4" href="https://en.wikipedia.org/wiki/Walter_White_(Breaking_Bad)">
          <p>Walter White</p>
          <p>Lead Designer</p>
          <img src="./src/pages/Img/MV5BMTgzOTMzMTY1MV5BMl5BanBnXkFtZTcwNjMyMjM0OA@@._V1_.jpg" width="189" height="200" />
        </a>
        <a className="Person_5" href="https://ru.wikipedia.org/wiki/Джесси_Пинкман">
          <p>Jesse Pinkman</p>
          <p>Software Enginer</p>
          <img src="./src/pages/Img/7ec3e68fc944535a2dd75b2c55b9a857.jpeg" width="189" height="200" />
        </a>
      </div>
    </div>
  );
}

export default AboutUs;

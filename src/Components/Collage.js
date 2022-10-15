import React from "react";
import "./components.scss";
const Collage = () => {
  return (
    <div className="collageContainer">
      <div class="collage">
        <div href="#">
          <img
            src={process.env.PUBLIC_URL + "/Assets/1.jpg"}
            alt="Collage Photo1"
          />
        </div>
        <div href="#">
          <img
            src={process.env.PUBLIC_URL + "/Assets/2.jpg"}
            alt="Collage Photo2"
          />
        </div>
        <div href="#">
          <img
            src={process.env.PUBLIC_URL + "/Assets/3.jpg"}
            alt="Collage Photo3"
          />
        </div>
        <div href="#">
          <img
            src={process.env.PUBLIC_URL + "/Assets/4.jpg"}
            alt="Collage Photo4"
          />
        </div>
        <div href="#">
          <img
            src={process.env.PUBLIC_URL + "/Assets/5.jpg"}
            alt="Collage Photo5"
          />
        </div>
      </div>
    </div>
  );
};

export default Collage;

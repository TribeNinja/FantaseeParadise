import React from "react";
import logo from "../Assets/paradise_white.png";
import "./components.scss";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="logoContainer">
        <img src={logo} />
      </div>
    </div>
  );
};

export default Navbar;

import React, { useEffect, useState } from "react";
import logo from "../Assets/paradise_white.png";
import "./components.scss";
import { LanguageList, T } from "react-translator-component";
const Navbar = () => {
  const [clicked, setclicked] = useState(false);
  useEffect(() => {
    <LanguageList />;
  }, [clicked]);

  return (
    <div className="navbarContainer">
      <div className="logoContainer">
        <img src={logo} alt={""} />
      </div>
      <div className="menu">
        <ul>
          <li>{T("Apply Here")}</li>
          <li>{T("Management")}</li>
          <li>{T("Shop")}</li>
        </ul>
      </div>
      <LanguageList
        Theme="Dropdown"
        className="language"
        onClick={() => {
          this.forceUpdate();
        }}
      />
    </div>
  );
};

export default Navbar;

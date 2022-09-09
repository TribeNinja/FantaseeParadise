import React, { useEffect, useState } from "react";
import logo from "../Assets/paradise_white.png";
import "./components.scss";
import { T } from "react-translator-component";

const Navbar = () => {
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
      {/* <div className="language">
        <LanguageList Language={lang} />
        <select value={lang} onChange={(e) => setLang(e.target.value)}>
          {Object.keys(Config.list).map((key) => (
            <option key={key} value={key}>
              {Config.list[key].text}
            </option>
          ))}
        </select>
      </div> */}
    </div>
  );
};

export default Navbar;

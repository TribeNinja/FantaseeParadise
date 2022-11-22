import logo from "../Assets/paradise_white.png";
import { useState } from "react";
import "./components.scss";
import { T } from "react-translator-component";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [drawer, setDrawer] = useState(false);
  return (
    <div className="navbarContainer">
      <div className="menu">
        <ul>
          <li>{T("Apply Here")}</li>
          <Link to="/gallery">
            <li>{T("Gallery")}</li>
          </Link>

          <Link to="/">
            <li>
              <img src={logo} alt={""} />
            </li>
          </Link>
          <li>Fantasee Party</li>
          <li></li>
        </ul>
      </div>
      {drawer ? (
        <div className="sideBarContainer">
          <ul>
            <div
              className="sideBarCloseButton"
              onClick={() => {
                setDrawer(!drawer);
              }}
            ></div>
            <li>{T("Apply Here")}</li>
            <li>{T("Gallery")}</li>
            <li>{T("Shop")}</li>
            <li>Fantasee Party</li>
            <li>{T("Contact")}</li>
          </ul>
        </div>
      ) : (
        <div
          className="sideBarContainer"
          onClick={() => {
            setDrawer(!drawer);
          }}
        >
          <div className="hBurger"></div>
          <div className="hBurger"></div>
          <div className="hBurger"></div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

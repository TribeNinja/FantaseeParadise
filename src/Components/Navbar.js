import logo from "../Assets/paradise_white.png";
import { useContext } from "react";
import { observer } from "mobx-react-lite";
import "./components.scss";
import { T, Translator } from "react-translator-component";
import { Link, useLocation } from "react-router-dom";
import Store from "../store";

const Navbar = () => {
  const store = useContext(Store);
  const { drawer, setDrawer, setFalse } = store;

  return (
    <Translator>
      <div className="navbarContainer">
        <div className="menu">
          <ul>
            <a href="/apply-now" target="_blank">
              <li>{T("Apply Here")}</li>
            </a>
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
                  setDrawer(false);
                  console.log(drawer);
                }}
              ></div>
              <Link to="/">
                <li onClick={setFalse}>{T("Home")}</li>
              </Link>
              <a href="/apply-now" target="_blank">
                <li onClick={setFalse}>{T("Apply Here")}</li>
              </a>
              <Link to="/gallery">
                <li onClick={setFalse}>{T("Gallery")}</li>
              </Link>

              <li>Fantasee Party</li>
              <li onClick={setFalse}>{T("Contact")}</li>
            </ul>
          </div>
        ) : (
          <div
            className="sideBarContainer"
            onClick={() => {
              setDrawer(true);
              console.log(drawer);
            }}
          >
            <div className="hBurger"></div>
            <div className="hBurger"></div>
            <div className="hBurger"></div>
          </div>
        )}
      </div>
    </Translator>
  );
};

export default observer(Navbar);

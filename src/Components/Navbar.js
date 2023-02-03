import logo from "../Assets/paradise_white.png";
import { useContext } from "react";
import { observer } from "mobx-react-lite";
import "./components.scss";
import { T, Translator } from "react-translator-component";
import { Link } from "react-router-dom";
import Store from "../store";
import { toast } from "react-toastify";

const Navbar = () => {
  const store = useContext(Store);
  const { drawer, setDrawer, setFalse, setRefreshArray } = store;
  const mailnotify = () => toast("Email Copied to clipboard !");

  return (
    <Translator>
      <div className="navbarContainer">
        <div className="menu">
          <ul>
            <Link to="/apply-now">
              <li onClick={() => setRefreshArray()}>{T("Apply Here")}</li>
            </Link>
            <Link to="/gallery">
              <li onClick={() => setRefreshArray()}>{T("Gallery")}</li>
            </Link>
            <Link to="/">
              <li onClick={() => setRefreshArray()}>
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
                }}
                data-aos="zoom-out-left"
              ></div>
              <li>
                <img src={logo} data-aos="zoom-in" />
              </li>
              <Link to="/" style={{ textDecoration: "none" }}>
                <li
                  onClick={() => {
                    setRefreshArray();
                    setFalse();
                  }}
                  data-aos="fade-right"
                >
                  <h1>{T("Home")}</h1>
                </li>
              </Link>
              <Link to="/apply-now" style={{ textDecoration: "none" }}>
                <li
                  onClick={() => {
                    setRefreshArray();
                    setFalse();
                  }}
                  data-aos="fade-right"
                  data-aos-delay="50"
                >
                  <h1>{T("Apply Here")}</h1>
                </li>
              </Link>
              <Link to="/gallery" style={{ textDecoration: "none" }}>
                <li
                  onClick={() => {
                    setFalse();
                    setRefreshArray();
                  }}
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  <h1>{T("Gallery")}</h1>
                </li>
              </Link>

              <li data-aos="fade-right" data-aos-delay="150">
                <h1>Fantasee Party</h1>
              </li>
              <li
                onClick={() => {
                  setRefreshArray();
                  setFalse();
                }}
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <h1>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      mailnotify();
                      navigator.clipboard.writeText(
                        "fantaseeparadise@gmail.com"
                      );
                    }}
                    href="mailto:fantaseeparadise@gmail.com"
                    style={{ textDecoration: "none", color: "#8c6700" }}
                  >
                    {T("Contact")}
                  </a>
                </h1>
              </li>
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
            <div className="hBurger" data-aos="fade-left"></div>
            <div
              className="hBurger"
              data-aos="fade-left"
              data-aos-delay="50"
            ></div>
            <div
              className="hBurger"
              data-aos="fade-left"
              data-aos-delay="100"
            ></div>
          </div>
        )}
      </div>
    </Translator>
  );
};

export default observer(Navbar);

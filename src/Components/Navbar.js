import logo from "../Assets/paradise_white.png";
import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import "./components.scss";
import { Link } from "react-router-dom";
import Store from "../store";
import { toast } from "react-toastify";
import { HashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const store = useContext(Store);
  const { drawer, setDrawer, setFalse, setRefreshArray, lang } = store;
  const mailnotify = () => toast("Email Copied to clipboard !");
  const { t } = useTranslation();

  return (
    <div className="navbarContainer">
      <div className="menu">
        <ul>
          <Link to="/apply-now">
            <li onClick={() => setRefreshArray()}>{t(`Apply Here.1`)}</li>
          </Link>
          <Link to="/gallery">
            <li onClick={() => setRefreshArray()}>{t(`Gallery.1`)}</li>
          </Link>
          <HashLink
            to="/#section1"
            smooth
            style={{ textDecoration: "none", color: "#8c6700" }}
          >
            <li onClick={() => setRefreshArray()}>
              <img src={logo} alt={"logo"} width="15vw" height="100%" />
            </li>
          </HashLink>
          <li>
            <HashLink to="/#section5" smooth style={{ textDecoration: "none" }}>
              Fantasee Party
            </HashLink>
          </li>
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
              <img src={logo} data-aos="zoom-in" alt="logo" />
            </li>
            <Link to="/" style={{ textDecoration: "none" }}>
              <li
                onClick={() => {
                  setRefreshArray();
                  setFalse();
                }}
                data-aos="fade-right"
              >
                <h1>Home</h1>
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
                <h1>Apply Here</h1>
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
                <h1>Gallery</h1>
              </li>
            </Link>

            <li
              data-aos="fade-right"
              data-aos-delay="150"
              onClick={() => {
                setFalse();
              }}
            >
              <h1>
                <HashLink
                  to="/#section5"
                  smooth
                  style={{ textDecoration: "none", color: "#8c6700" }}
                >
                  Fantasee Party
                </HashLink>
              </h1>
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
                    navigator.clipboard.writeText("fantaseeparadise@gmail.com");
                  }}
                  href="mailto:fantaseeparadise@gmail.com"
                  style={{ textDecoration: "none", color: "#8c6700" }}
                >
                  {t(`Contact.1`)}
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
  );
};

export default observer(Navbar);

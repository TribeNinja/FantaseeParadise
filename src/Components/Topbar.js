import React, { useState } from "react";
import "./components.scss";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
// import Store from "../store";
import { observer } from "mobx-react-lite";

const Topbar = () => {
  // const store = useContext(Store);
  // const { lang, setLang } = store;

  const { t, i18n } = useTranslation();
  const [clicked, setClicked] = useState(false);

  const mailnotify = () => toast("Email Copied to clipboard !");
  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
    setClicked(!clicked);
  };

  return (
    <>
      <div className="topbarContainer">
        <p>
          <a
            onClick={(e) => {
              e.preventDefault();
              mailnotify();
              navigator.clipboard.writeText("fantaseeparadise@gmail.com");
            }}
            href="mailto: fantaseeparadise@gmail.com"
          >
            {t(`Contact.1`)}
          </a>
        </p>
        <div className="language">
          {clicked ? (
            <div className="langList" data-aos="fade-down">
              <button onClick={() => handleClick("en")}>
                <img src={process.env.PUBLIC_URL + "./flags/en.svg"} />
                English
              </button>
              <button onClick={() => handleClick("es")}>
                <img src={process.env.PUBLIC_URL + "./flags/es.svg"} />
                Spanish
              </button>
            </div>
          ) : (
            <button
              data-aos="zoom-in"
              onClick={() => {
                setClicked(!clicked);
              }}
            >
              Select Language
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default observer(Topbar);

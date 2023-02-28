import React, { useContext } from "react";
import "./components.scss";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
// import Store from "../store";
import { observer } from "mobx-react-lite";

const Topbar = () => {
  // const store = useContext(Store);
  // const { lang, setLang } = store;

  const { t, i18n } = useTranslation();

  const mailnotify = () => toast("Email Copied to clipboard !");
  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
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
        <button onClick={() => handleClick("en")}>English</button>
        <button onClick={() => handleClick("es")}>Spanish</button>
      </div>
    </div>
  );
};

export default observer(Topbar);

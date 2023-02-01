import React, { useState } from "react";
import "./components.scss";
import { LanguageList, Config } from "react-translator-component";
import { toast } from "react-toastify";

const Topbar = () => {
  const [lang, setLang] = useState(Config);
  const mailnotify = () => toast("Email Copied to clipboard !");
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
          Contact
        </a>
      </p>
      <div className="language">
        <LanguageList Language={lang} />
        <select value={lang} onChange={(e) => setLang(e.target.value)}>
          {Object.keys(Config.list).map((key, index) => {
            return (
              <>
                <option key={index} value={key}>
                  <img src={`${Config.list[key].icon}`} alt="" />
                  {Config.list[key].text}
                </option>
              </>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Topbar;

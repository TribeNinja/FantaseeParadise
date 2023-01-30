import React, { useState } from "react";
import "./components.scss";
import { LanguageList, Config } from "react-translator-component";

const Topbar = () => {
  const [lang, setLang] = useState(Config);
  return (
    <div className="topbarContainer">
      <p>
        <a href="mailto: zulkerb9b@gmail.com">Contact</a>
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

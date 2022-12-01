import React, { useState } from "react";
import "./components.scss";
import { LanguageList, T, Config } from "react-translator-component";

const Topbar = () => {
  const [lang, setLang] = useState(Config);
  return (
    <div className="topbarContainer">
      <p>Contact</p>
      <div className="language">
        <LanguageList Language={lang} />
        <select value={lang} onChange={(e) => setLang(e.target.value)}>
          {Object.keys(Config.list).map((key) => (
            <>
              <option key={key} value={key}>
                <img src={`${Config.list[key].icon}`} alt="" />
                {Config.list[key].text}
              </option>
            </>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Topbar;

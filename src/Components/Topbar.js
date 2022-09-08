import React from "react";
import "./components.scss";

import { T } from "react-translator-component";
const Topbar = () => {
  return (
    <div className="topbarContainer">
      <p>{T("Contact")}</p>
    </div>
  );
};

export default Topbar;

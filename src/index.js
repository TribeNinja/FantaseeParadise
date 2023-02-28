import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./i18next";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.Strictmode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.Strictmode>
);

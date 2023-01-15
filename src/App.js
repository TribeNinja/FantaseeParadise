import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Topbar from "./Components/Topbar";
import Navbar from "./Components/Navbar";
import Gallery from "./Pages/Gallery";
import "./App.scss";
import Application from "./Pages/Application";
import Release from "./Pages/Release";
import ScrollToTop from "./Components/ScrollToTop";

const App = () => {
  return (
    <>
      <div className="MainContainer">
        <Topbar />
        <Navbar />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/apply-now" element={<Application />} />
            <Route path="/release-form" element={<Release />} />
          </Routes>
        </ScrollToTop>
      </div>
    </>
  );
};

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Topbar from "./Components/Topbar";
import Navbar from "./Components/Navbar";
import Gallery from "./Pages/Gallery";
import "./App.scss";
const App = () => {
  return (
    <>
      <div className="MainContainer">
        <Topbar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </>
  );
};

export default App;

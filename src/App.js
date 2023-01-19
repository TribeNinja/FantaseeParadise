import React, { useEffect, useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { observer } from "mobx-react-lite";
import Home from "./Pages/Home";
import Topbar from "./Components/Topbar";
import Navbar from "./Components/Navbar";
import Gallery from "./Pages/Gallery";
import "./App.scss";
import Application from "./Pages/Application";
import Release from "./Pages/Release";
import ScrollToTop from "./Components/ScrollToTop";
import IndividualProfile from "./Pages/IndividualProfile";
import sanityClient from "./Components/Client";
import Store from "./store";

const App = () => {
  const [data, setData] = useState(null);
  const store = useContext(Store);
  const { showProfile, showImage, showName, showImageArray } = store;
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "models"]{slug,image{asset->{_id,url}}},imageArray[]{asset->{_id,url}}`
      )
      .then((data) => setData(data))
      .catch(console.error);
  }, [showProfile]);
  return (
    <div className="MainContainer">
      <Topbar />
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/apply-now" element={<Application />} />
          <Route path="/release-form" element={<Release />} />
          <Route
            path={`/models/${showProfile}`}
            element={
              <IndividualProfile
                data={showImage}
                name={showName}
                imageArray={showImageArray}
              />
            }
          />
        </Routes>
      </ScrollToTop>
    </div>
  );
};

export default observer(App);

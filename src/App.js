import React, { useEffect, useContext } from "react";
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
import AOS from "aos";
import "aos/dist/aos.css";
import ImagePopUp from "./Components/ImagePopUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const store = useContext(Store);
  const { showProfile, showImage, showName, showImageArray, clicked } = store;

  useEffect(() => {
    AOS.init();
    sanityClient
      .fetch(
        `*[_type == "models"]{slug,image{asset->{_id,url}}},imageArray[]{asset->{_id,url}}`
      )
      .then((data) => data)
      .catch(console.error);
  }, [showProfile]);
  return (
    <div
      className="MainContainer"
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/Assets/section1.jpg"
        })`,
      }}
    >
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        toastStyle={{ color: "#cd9706" }}
      />
      <Topbar />
      <Navbar />
      {clicked && <ImagePopUp />}
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

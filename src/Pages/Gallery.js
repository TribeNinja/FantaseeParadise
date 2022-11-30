import React, { useState, useEffect } from "react";
import "./Pages.scss";
import FsLightbox from "fslightbox-react";
import Footer from "../Components/Footer";
const Gallery = () => {
  const [jToggler, setJToggler] = useState(false);
  const [lToggler, setLToggler] = useState(false);
  const [lightbox, setLightbox] = useState();

  const [profile, setProfile] = useState(0);

  const imageArray = [
    {
      name: "Jasmine",
      image: ["https://dl.dropboxusercontent.com/s/18qeub65epojz2g/o_O.png"],
    },
    {
      name: "Lulu",
      image: ["https://dl.dropboxusercontent.com/s/kfuvt281ifz5e7n/o_O.png"],
    },
  ];

  const Jasmine = [
    "https://dl.dropboxusercontent.com/s/18qeub65epojz2g/o_O.png",
    "https://dl.dropboxusercontent.com/s/76vvfqd5enyhh01/o_O.png",
    "https://dl.dropboxusercontent.com/s/1uwzs88ttf6vyoy/o_O.png",
    "https://dl.dropboxusercontent.com/s/o74yq3uyk9jm00f/o_O.png",
    "https://dl.dropboxusercontent.com/s/zr8xojbtxjzn84n/o_O.png",
    "https://dl.dropboxusercontent.com/s/n35k053h3auctt9/o_O.png",
    "https://dl.dropboxusercontent.com/s/a5k3gj8y2fx7b3b/o_O.png",
  ];
  const Lulu = [
    "https://dl.dropboxusercontent.com/s/kfuvt281ifz5e7n/o_O.png",
    "https://dl.dropboxusercontent.com/s/lg1wihi8t2h2p83/o_O.png",
    "https://dl.dropboxusercontent.com/s/3yzi0lxabzig3h2/o_O.png",
  ];

  return (
    <div className="galleryContainer">
      <div className="topSection">
        <div className="blackSideBg"></div>
        <div
          className="imageContainer"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/Assets/section2.jpg"
            })`,
          }}
        ></div>
        <h1 className="the">The</h1>
        <h1> Gallery</h1>
      </div>
      <div className="bottomSection">
        <div className="bottomLeft">
          <h1>Model Profile</h1>
          {imageArray.map((item, index) => {
            return (
              <>
                <div
                  key={index}
                  className="imageItem"
                  onClick={() => {
                    setProfile(index);
                  }}
                >
                  <div className="imageWrapper">
                    <img loading="lazy" src={item.image[0]} />
                  </div>
                  <h1>{item.name}</h1>
                </div>
              </>
            );
          })}
        </div>
        <div className="bottomRight">
          {profile === 0
            ? Jasmine.map((item, index) => {
                return (
                  <div key={index}>
                    <img
                      loading="lazy"
                      alt={item}
                      src={item}
                      onClick={() => {
                        setJToggler(!jToggler);
                        setLightbox(index);
                      }}
                    />
                  </div>
                );
              })
            : profile === 1
            ? Lulu.map((item, index) => {
                return (
                  <div key={index}>
                    <img
                      loading="lazy"
                      alt={item}
                      src={item}
                      onClick={() => {
                        setLToggler(!lToggler);
                        setLightbox(index);
                      }}
                    />
                  </div>
                );
              })
            : ""}
        </div>
        <FsLightbox
          toggler={jToggler}
          sources={Jasmine}
          sourceIndex={lightbox}
        />
        <FsLightbox toggler={lToggler} sources={Lulu} sourceIndex={lightbox} />
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;

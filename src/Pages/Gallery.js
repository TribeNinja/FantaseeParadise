import React, { useState } from "react";
import "./Pages.scss";
import FsLightbox from "fslightbox-react";
import Footer from "../Components/Footer";
const Gallery = () => {
  const [jToggler, setJToggler] = useState(false);
  const [lToggler, setLToggler] = useState(false);
  const [sToggler, setSToggler] = useState(false);
  const [sxToggler, setSXToggler] = useState(false);
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
    {
      name: "SoulX",
      image: ["https://dl.dropboxusercontent.com/s/7ysu7ovre1e7c3x/o_O.png"],
    },
    {
      name: "Sexboy",
      image: ["https://dl.dropboxusercontent.com/s/tfm0vvup1mnrt7t/o_O.png"],
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
  const SoulX = [
    "https://dl.dropboxusercontent.com/s/7ysu7ovre1e7c3x/o_O.png",
    "https://dl.dropboxusercontent.com/s/0ujr4kqvtzs7g86/o_O.png",
    "https://dl.dropboxusercontent.com/s/b0go4rso3psz1sl/o_O.png",
  ];
  const Sexboy = [
    "https://dl.dropboxusercontent.com/s/tfm0vvup1mnrt7t/o_O.png",
    "https://dl.dropboxusercontent.com/s/qemcuneyhzcku9t/o_O.png",
    "https://dl.dropboxusercontent.com/s/qemcuneyhzcku9t/o_O.png",
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
        <p>Model Profile</p>
        <div className="bottomLeft">
          <h1>Model Profile</h1>
          <div className="itemContainer">
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
                      <img loading="lazy" alt={item.name} src={item.image[0]} />
                    </div>
                    <h1>{item.name}</h1>
                  </div>
                </>
              );
            })}
          </div>
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
            : profile === 2
            ? SoulX.map((item, index) => {
                return (
                  <div key={index}>
                    <img
                      loading="lazy"
                      alt={item}
                      src={item}
                      onClick={() => {
                        setSXToggler(!sxToggler);
                        setLightbox(index);
                      }}
                    />
                  </div>
                );
              })
            : profile === 3
            ? Sexboy.map((item, index) => {
                return (
                  <div key={index}>
                    <img
                      loading="lazy"
                      alt={item}
                      src={item}
                      onClick={() => {
                        setSToggler(!sToggler);
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
        <FsLightbox
          toggler={sxToggler}
          sources={SoulX}
          sourceIndex={lightbox}
        />
        <FsLightbox
          toggler={sToggler}
          sources={Sexboy}
          sourceIndex={lightbox}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;

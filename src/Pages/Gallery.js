import React, { useState } from "react";
import "./Pages.scss";
import FsLightbox from "fslightbox-react";
import Footer from "../Components/Footer";
const Gallery = () => {
  const [toggler, setToggler] = useState(false);
  const [lightbox, setLightbox] = useState();

  const imageArray = [
    "https://dl.dropboxusercontent.com/s/bngav2i3fcl7trb/o_O.png",
    "https://dl.dropboxusercontent.com/s/is1jtbl4lybtzp1/o_O.png",
    "https://dl.dropboxusercontent.com/s/bngav2i3fcl7trb/o_O.png",
    "https://dl.dropboxusercontent.com/s/is1jtbl4lybtzp1/o_O.png",
    "https://dl.dropboxusercontent.com/s/bngav2i3fcl7trb/o_O.png",
    "https://dl.dropboxusercontent.com/s/is1jtbl4lybtzp1/o_O.png",
    "https://dl.dropboxusercontent.com/s/bngav2i3fcl7trb/o_O.png",
    "https://dl.dropboxusercontent.com/s/is1jtbl4lybtzp1/o_O.png",
    "https://dl.dropboxusercontent.com/s/bngav2i3fcl7trb/o_O.png",
    "https://dl.dropboxusercontent.com/s/is1jtbl4lybtzp1/o_O.png",
    "https://dl.dropboxusercontent.com/s/bngav2i3fcl7trb/o_O.png",
    "https://dl.dropboxusercontent.com/s/is1jtbl4lybtzp1/o_O.png",
    "https://dl.dropboxusercontent.com/s/bngav2i3fcl7trb/o_O.png",
    "https://dl.dropboxusercontent.com/s/is1jtbl4lybtzp1/o_O.png",
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
        <h1>The Gallery</h1>
      </div>
      <div className="bottomSection">
        {imageArray.map((item, index) => {
          return (
            <div key={index}>
              <img
                alt={item}
                src={item}
                onClick={() => {
                  setToggler(!toggler);
                  setLightbox(index);
                }}
              />
            </div>
          );
        })}
      </div>
      <FsLightbox
        toggler={toggler}
        sources={imageArray}
        sourceIndex={lightbox}
      />
      <Footer />
    </div>
  );
};

export default Gallery;

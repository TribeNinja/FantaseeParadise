import React, { useState } from "react";

const ShowMore = () => {
  return (
    <>
      <div className="showDesc">
        <h1>Name</h1>
      </div>
      <div className="showMore">
        <h1>Show More</h1>
      </div>
    </>
  );
};
const Gallery = () => {
  const [showMore, setShowMore] = useState(0);
  console.log(showMore);
  return (
    <div className="galleryContainer">
      <div className="topSection">
        <div className="textAndImageContainer">
          <div className="bannerText">
            <h1>Welcome</h1>
            <h1>To</h1>
            <h1>The</h1>
            <h1 style={{ color: "#82560c" }}>Exotic</h1>
            <h1>Gallery</h1>
          </div>
          <div className="imageContainer">
            <img src={process.env.PUBLIC_URL + "/Assets/GalleryBanner.png"} />
          </div>
        </div>
        <div className="heroText">
          <p>
            Get ready to be swept off your feet and transported to a world of
            exotic pleasure – meet our models today!
          </p>
        </div>
      </div>
      <div className="bottomSection">
        <div className="modelContainer">
          <div
            className="imgContainer"
            onMouseOver={() => {
              setShowMore(1);
            }}
            onMouseLeave={() => {
              setShowMore(0);
            }}
          >
            <img src={process.env.PUBLIC_URL + "/Assets/1.jpg"} />
            {showMore === 1 && <ShowMore />}
          </div>
          <div
            className="imgContainer"
            onMouseOver={() => {
              setShowMore(2);
            }}
            onMouseLeave={() => {
              setShowMore(0);
            }}
          >
            <img src={process.env.PUBLIC_URL + "/Assets/1.jpg"} />
            {showMore === 2 && <ShowMore />}
          </div>
          <div
            className="imgContainer"
            onMouseOver={() => {
              setShowMore(3);
            }}
            onMouseLeave={() => {
              setShowMore(0);
            }}
          >
            <img src={process.env.PUBLIC_URL + "/Assets/1.jpg"} />
            {showMore === 3 && <ShowMore />}
          </div>
          <div
            className="imgContainer"
            onMouseOver={() => {
              setShowMore(4);
            }}
            onMouseLeave={() => {
              setShowMore(0);
            }}
          >
            <img src={process.env.PUBLIC_URL + "/Assets/1.jpg"} />
            {showMore === 4 && <ShowMore />}
          </div>
          <div
            className="imgContainer"
            onMouseOver={() => {
              setShowMore(5);
            }}
            onMouseLeave={() => {
              setShowMore(0);
            }}
          >
            <img src={process.env.PUBLIC_URL + "/Assets/1.jpg"} />
            {showMore === 5 && <ShowMore />}
          </div>
          <div
            className="imgContainer"
            onMouseOver={() => {
              setShowMore(6);
            }}
            onMouseLeave={() => {
              setShowMore(0);
            }}
          >
            <img src={process.env.PUBLIC_URL + "/Assets/1.jpg"} />
            {showMore === 6 && <ShowMore />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

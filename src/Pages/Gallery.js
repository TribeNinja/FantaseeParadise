import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../Components/Client";
import Footer from "../Components/Footer";
import Store from "../store";
import { observer } from "mobx-react-lite";

const ShowMore = (props) => {
  return (
    <>
      <div className="showDesc">
        <h1>{props.name}</h1>
      </div>
      <div className="showMore">
        <h1>Show More</h1>
      </div>
    </>
  );
};
const Gallery = () => {
  const store = useContext(Store);
  const { showProfile, setShowProfile, setShowImage, showImage, setShowName } =
    store;

  const [showMore, setShowMore] = useState(null);

  // Sanity Connection
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "models"]{name,slug,image{asset->{_id,url}}}`)
      .then((data) => setPostData(data))
      .catch(console.error);
  }, [showProfile]);

  return (
    <div className="galleryContainer">
      <div className="topSection">
        <div className="textAndImageContainer">
          <div className="bannerText">
            <h1>Welcome</h1>
            <h1>To</h1>
            <h1>The</h1>
            <h1 style={{ color: "#82560c", backgroundColor: "#0d0d0d" }}>
              Exotic
            </h1>
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
          {postData &&
            postData.map((models, index) => {
              console.log(models);
              return (
                <div
                  className="imgContainer"
                  key={index}
                  onMouseEnter={() => {
                    setShowMore(index);
                  }}
                  onMouseLeave={() => {
                    setShowMore(null);
                  }}
                  onClick={() => {
                    setShowProfile(models.slug.current);
                    setShowImage(models.image.asset.url);
                    setShowName(models.name);
                    console.log(models.slug.current);
                  }}
                >
                  <>
                    <Link to={`/models/${models.slug.current}`}>
                      <img src={models.image.asset.url} />
                      {showMore === index && <ShowMore name={models.name} />}
                    </Link>
                  </>
                </div>
              );
            })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default observer(Gallery);

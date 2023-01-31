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
  // Store
  const store = useContext(Store);
  const {
    showProfile,
    showImageArray,
    setShowProfile,
    setShowImage,
    setShowImageArray,
    setShowName,
    setShowAge,
    setShowSex,
    setShowLink,
    setRefreshArray,
  } = store;

  const [showMore, setShowMore] = useState(null);

  // Sanity Connection
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "models"]{name,slug,image{asset->{_id,url}},imageArray[]{asset->{_id,url}},age,sex,link}`
      )
      .then((data) => setPostData(data))
      .catch(console.error);
  }, [showProfile]);

  return (
    <div className="galleryContainer">
      <div className="topSection">
        <div className="textAndImageContainer">
          <div className="bannerText">
            <h1 data-aos="zoom-in">Welcome</h1>
            <h1 data-aos="zoom-in" data-aos-delay="50">
              To
            </h1>
            <h1 data-aos="zoom-in" data-aos-delay="100">
              The
            </h1>
            <h1
              style={{ color: "#82560c", backgroundColor: "#0d0d0d" }}
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              Exotic
            </h1>
            <h1 data-aos="zoom-in" data-aos-delay="200">
              Gallery
            </h1>
          </div>
          <div className="imageContainer">
            <img
              src={process.env.PUBLIC_URL + "/Assets/GalleryBanner.png"}
              alt="Banner"
            />
          </div>
        </div>
        <div className="heroText">
          <p>
            <span data-aos="zoom-in" data-aos-delay="250">
              Get ready to be swept off your feet and transported to a world of
              exotic pleasure – meet our models today!
            </span>
          </p>
        </div>
      </div>
      <div className="bottomSection">
        <div className="modelContainer" data-aos="fade-in">
          {postData &&
            postData.map((models, index) => {
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
                    setShowSex(models.sex);
                    setShowAge(models.age);
                    setShowLink(models.link);
                    models.imageArray !== undefined &&
                      models.imageArray.map((item, idx) => {
                        setRefreshArray();
                        return (
                          <>
                            {}
                            {setShowImageArray([
                              showImageArray.push(item.asset.url),
                              ...showImageArray,
                            ])}
                          </>
                        );
                      });
                  }}
                >
                  <>
                    <Link to={`/models/${models.slug.current}`}>
                      <img src={models.image.asset.url} alt="models" />
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

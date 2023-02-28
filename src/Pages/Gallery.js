import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../Components/Client";
import Footer from "../Components/Footer";
import Store from "../store";
import { observer } from "mobx-react-lite";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTranslation } from "react-i18next";

const ShowMore = (props) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="showDesc">
        <h1>{props.name}</h1>
      </div>
      <div className="showMore">
        <h1>{t(`ShowMore.1`)}</h1>
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
  const { t } = useTranslation();

  const [showMore, setShowMore] = useState(null);

  // Sanity Connection
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `{
          "models": *[_type == "models"]{name,slug,image{asset->{_id,url}},imageArray[]{asset->{_id,url}},age,sex,link},
          "bg": *[_type == "homegallery"]{name,image{asset->{_id,url}}}
      }`
      )
      .then((data) => setPostData(data))
      .catch(console.error);
  }, [showProfile]);

  return (
    <div className="galleryContainer">
      {postData && (
        <>
          <div className="topSection">
            <div className="textAndImageContainer">
              <div className="bannerText">
                <h1 data-aos="fade-right">{t(`welcome.1`)}</h1>
                <h1 data-aos="fade-right" data-aos-delay="50">
                  {t(`to the.1`)}
                </h1>

                <h1
                  style={{
                    width: "100vw",
                  }}
                  data-aos="fade-right"
                  data-aos-delay="150"
                >
                  {t(`exotic.1`)}
                </h1>
                <h1 data-aos="fade-right" data-aos-delay="200">
                  {t(`Gallery.1`)}
                </h1>
              </div>
              <div className="imageContainer">
                <LazyLoadImage
                  src={postData.bg[0].image.asset.url}
                  // src={postData.homegallery.image.asset.url}
                  alt="Banner"
                  data-aos="fade-left"
                  placeholderSrc={
                    process.env.PUBLIC_URL + "/GalleryHeadPH.webp"
                  }
                  // data-aos="fade-left"
                />
              </div>
            </div>
            <div className="heroText">
              <p>
                <span data-aos="zoom-in" data-aos-delay="250">
                  {t(`galleryDesc.1`)}
                </span>
              </p>
            </div>
          </div>
          <div className="bottomSection">
            <div className="modelContainer" data-aos="fade-in">
              {postData &&
                postData.models.map((models, index) => {
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
                          {showMore === index && (
                            <ShowMore name={models.name} />
                          )}
                        </Link>
                      </>
                    </div>
                  );
                })}
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default observer(Gallery);

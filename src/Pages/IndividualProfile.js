import React, { useContext } from "react";
import "./Pages.scss";
import { observer } from "mobx-react-lite";
import Footer from "../Components/Footer";
import Store from "../store";
import { useNavigate } from "react-router-dom";

const IndividualProfile = (props) => {
  let navigate = useNavigate();
  // Store
  const store = useContext(Store);
  const { setRefreshArray, setPopUp, clicked, setClicked } = store;
  return (
    <div
      className={
        clicked ? "profileImageClicked profileContainer" : "profileContainer"
      }
    >
      <>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div
          className="backBtn"
          onClick={() => {
            setRefreshArray();
            navigate(-1);
          }}
          data-aos="fade-left"
        >
          <div className="arrow"></div>
        </div>
      </>
      <div className="profileTop">
        <div className="imgContainer" data-aos="fade-right">
          <img src={props.data} alt="profile" />
        </div>
        <div className="textContainer">
          <h1 data-aos="flip-up">Name: {props.name}</h1>
          <h1 data-aos="flip-up" data-aos-delay="50">
            Age:
          </h1>
          <h1 data-aos="flip-up" data-aos-delay="100">
            Sex:
          </h1>
          <h1 data-aos="flip-up" data-aos-delay="150">
            Description:
          </h1>
        </div>
      </div>
      <div className="profileBody" data-aos="fade-up">
        {props.imageArray.map((item, index) => {
          return (
            <>
              {index > 0 && (
                <div key={index}>
                  <img
                    src={item}
                    alt="items"
                    onClick={() => {
                      setPopUp(item);
                      setClicked(true);
                    }}
                  />
                </div>
              )}
            </>
          );
        })}
      </div>
      <div className="footerContainer">
        <Footer />
      </div>
    </div>
  );
};

export default observer(IndividualProfile);

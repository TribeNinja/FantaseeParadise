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
  const { setRefreshArray } = store;
  return (
    <div className="profileContainer">
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
        >
          <div className="arrow"></div>
        </div>
      </>
      <div className="profileTop">
        <div className="imgContainer">
          <img src={props.data} />
        </div>
        <div className="textContainer">
          <h1>Name: {props.name}</h1>
          <h1>Age: </h1>
          <h1>Sex: </h1>
          <h1>Name: </h1>
        </div>
      </div>
      <div className="profileBody">
        {props.imageArray.map((item, index) => {
          return (
            <>
              {index > 0 && (
                <div key={index}>
                  <img src={item} />
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

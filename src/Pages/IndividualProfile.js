import React from "react";
import "./Pages.scss";
import { observer } from "mobx-react-lite";

const IndividualProfile = (props) => {
  return (
    <div className="profileContainer">
      <>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
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
    </div>
  );
};

export default observer(IndividualProfile);

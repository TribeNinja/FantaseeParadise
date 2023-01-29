import React, { useContext } from "react";
import Store from "../store";
import "./components.scss";
const ImagePopUp = () => {
  // Store
  const store = useContext(Store);
  const { popUp, clicked, setClicked } = store;
  return (
    <>
      {clicked && (
        <div
          className="popUpContainer"
          onClick={() => {
            setClicked(false);
          }}
        >
          <img src={popUp} alt="popUp" />
        </div>
      )}
    </>
  );
};

export default ImagePopUp;

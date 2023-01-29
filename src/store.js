import { makeAutoObservable } from "mobx";
import { createContext } from "react";

class Store {
  drawer = false;
  showProfile = null;
  showImage = null;
  showName = null;
  showImageArray = [];
  popUp = null;
  clicked = false;

  constructor() {
    makeAutoObservable(this);
  }

  setFalse = () => {
    this.drawer = false;
  };

  setDrawer = (drawer) => {
    this.drawer = drawer;
  };

  setShowProfile = (showProfile) => {
    this.showProfile = showProfile;
  };

  setShowImage = (showImage) => {
    this.showImage = showImage;
  };

  setShowName = (showName) => {
    this.showName = showName;
  };

  setShowImageArray = (imageArray) => {
    this.showImageArray = imageArray;
  };
  setRefreshArray = () => {
    this.showImageArray.length = 0;
  };

  setPopUp = (popUp) => {
    this.popUp = popUp;
  };
  setClicked = () => {
    this.clicked = !this.clicked;
  };
}

export default createContext(new Store());

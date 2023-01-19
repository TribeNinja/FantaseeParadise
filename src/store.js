import { makeAutoObservable } from "mobx";
import { createContext } from "react";

class Store {
  drawer = false;
  showProfile = null;
  showImage = null;
  showName = null;
  showImageArray = [];

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
    this.showImageArray = [];
  };
}

export default createContext(new Store());

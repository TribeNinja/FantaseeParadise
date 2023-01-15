import { makeAutoObservable } from "mobx";
import { createContext } from "react";

class Store {
  drawer = false;

  constructor() {
    makeAutoObservable(this);
  }

  setFalse = () => {
    this.drawer = false;
  };

  setDrawer = (drawer) => {
    this.drawer = drawer;
  };
}

export default createContext(new Store());

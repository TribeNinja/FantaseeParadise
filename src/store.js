import { makeAutoObservable } from "mobx";
import { createContext } from "react";

class Store {
  show = false;

  constructor() {
    makeAutoObservable(this);
  }

  setShow = () => {
    this.show = !this.show;
  };
  setFalse = () => {
    this.show = false;
  };
}

export default createContext(new Store());

import React from "react";
import { AiFillInstagram, AiFillMail } from "react-icons/ai";
import logo from "../Assets/paradise_white.png";
const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="items">
        <div className="social">
          <img src={logo} alt={""} />
        </div>
      </div>
      <div className="items">
        <div className="social">
          <AiFillInstagram size={30} color="#cd9706" />
          <p>@fantaseeparadise</p>
        </div>
      </div>
      <div className="items">
        <div className="social">
          <AiFillMail size={30} color="#cd9706" />
          <p>fantaseeparadise@gmail.com</p>
        </div>
      </div>
      <div className="items">
        <div className="social">
          <p>© All rights reserved</p>
          <p> Fantasee Paradise 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

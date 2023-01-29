import React from "react";
import { AiFillInstagram, AiFillMail } from "react-icons/ai";
import logo from "../Assets/paradise_white.png";
const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="items borderItem">
        <div className="social">
          <img src={logo} alt={""} />
        </div>
      </div>
      <div className="items">
        <div className="social">
          <AiFillInstagram size={30} color="#cd9706" />
          <AiFillMail size={30} color="#cd9706" />
          <div>
            <h4>About us</h4>
          </div>
          <div>
            <h4>Contact</h4>
          </div>
        </div>
      </div>

      <div className="items">
        <div className="social">
          <p>© All rights reserved Fantasee Paradise 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

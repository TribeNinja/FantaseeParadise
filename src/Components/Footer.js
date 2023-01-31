import React from "react";
import { AiFillInstagram, AiFillMail } from "react-icons/ai";
import logo from "../Assets/paradise_white.png";
import { HashLink } from "react-router-hash-link";
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
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/fantaseeparadise/"
          >
            <AiFillInstagram size={30} color="#cd9706" />
          </a>
          <a
            href="mailto: fantaseeparadise@gmail.com"
            style={{ textDecoration: "none", color: "#cd9706" }}
          >
            <AiFillMail size={30} color="#cd9706" />
          </a>
          <div>
            <HashLink to="/#about" smooth style={{ textDecoration: "none" }}>
              <h4>About us</h4>
            </HashLink>
          </div>
          <div>
            <h4>
              <a
                href="mailto: fantaseeparadise@gmail.com"
                style={{ textDecoration: "none", color: "#cd9706" }}
              >
                Contact
              </a>
            </h4>
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

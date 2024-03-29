import React from "react";
import { AiFillInstagram, AiFillMail } from "react-icons/ai";
import logo from "../Assets/paradise_white.png";
import { HashLink } from "react-router-hash-link";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
  const mailnotify = () => toast("Email Copied to clipboard !");
  return (
    <div className="footerContainer">
      <div className="items borderItem">
        <div className="social">
          <img src={logo} alt={""} height="100%" width="50%" />
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
            onClick={(e) => {
              mailnotify();
              e.preventDefault();
              navigator.clipboard.writeText("fantaseeparadise@gmail.com");
            }}
            href="mailto: fantaseeparadise@gmail.com"
            style={{ textDecoration: "none", color: "#cd9706" }}
          >
            <AiFillMail size={30} color="#cd9706" />
          </a>
          <div>
            <HashLink to="/#about" smooth style={{ textDecoration: "none" }}>
              <h4>{t(`About Us.1`)}</h4>
            </HashLink>
          </div>
        </div>
      </div>

      <div className="items">
        <div className="social">
          <p>© {t(`copyright.1`)}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

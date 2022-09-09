import "./App.scss";
import Navbar from "./Components/Navbar";
import { Translator, T, Config } from "react-translator-component";

import Topbar from "./Components/Topbar";

Config.default = "en";

Config.list = {
  en: {
    text: "English",
    icon: "./flags/en.svg",
    file: require("./locale/en"),
  },
  es: {
    text: "Español",
    icon: "./flags/es.svg",
    file: require("./locale/es"),
  },
};

function TranslatorApp() {
  return (
    <Translator>
      <App />
    </Translator>
  );
}
function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="MainContainer">
        <section
          className="section1"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/Assets/section1.jpg"
            })`,
          }}
        >
          <p>{T("See your FantaSees come to life")}</p>
        </section>
        <section
          className="section2"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/Assets/section2.jpg"
            })`,
          }}
        >
          <div className="textContainer">
            <div className="title">
              <h2>{T("About Us")}</h2>
              <div className="line"></div>
            </div>
            <p>
              {T(
                "Fantasee Paradise will help you live all your fantasies. We are here to deliver your wildest dreams and help you make money while you live your best life. We have a collection of the most exotic models with a very loyal fan base. We pride ourselves in empowering models across the world to achieve their dreams via our platform. Our mission is to help you grow, while bringing all your fantasies to life! Our Management team is rated one of the best in the industry and we are here to not only help you build your brand as a top model, but also build your business so you can grow and bring other fantasies to life. We have a great team of individuals to guide you through the challenges of opening or studio or being a top rated model. Contact us so we can help turn your wildest fantasies into a reality!"
              )}
            </p>
          </div>
        </section>
        <section
          className="section3"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/Assets/section3.jpg"
            })`,
          }}
        ></section>
        <section className="section4"></section>
      </div>
    </>
  );
}

export default TranslatorApp;

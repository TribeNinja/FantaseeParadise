import "./App.scss";
import Navbar from "./Components/Navbar";
import { Translator, T, Config } from "react-translator-component";
import Topbar from "./Components/Topbar";
import Collage from "./Components/Collage";
import Testimonial from "./Components/Testimonial";

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
  var firstsec = document.getElementById("f");
  var secondsec = document.getElementById("s");
  var lastScrollTop = 0;
  window.onscroll = function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      secondsec.scrollIntoView({ behavior: "smooth" });
    } else {
      firstsec.scrollIntoView({ behavior: "smooth" });
    }
    lastScrollTop = st <= 0 ? 0 : st;
  };

  return (
    <>
      <Topbar />
      <Navbar />
      <div
        className="MainContainer"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/Assets/section2.jpg"
          })`,
        }}
      >
        <section id="f" className="section1">
          <p>{T("See your FantaSees come to life")}</p>
        </section>
        <section
          id="s"
          className="section2"
          // style={{
          //   backgroundImage: `url(${
          //     process.env.PUBLIC_URL + "/Assets/section2.jpg"
          //   })`,
          // }}
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
              process.env.PUBLIC_URL + "/Assets/section3b.jpg"
            })`,
          }}
        >
          <div className="section3Wrapper">
            <div className="writing">
              <h1>{T("Total Model Management")}</h1>
              <p>
                {T(
                  "Are you a model who needs management. Whether you work remotely or would like to work at one of our studios, we provide a complete setup, photoshoots, education, and promotions. We manage OnlyFans, Webcams, Influencers, and Reality Stars."
                )}
              </p>
              <p className="section3Button">
                {T("Join us to live your FantaSee life")}
              </p>
            </div>
          </div>
          <div className="">
            {" "}
            <Collage />{" "}
          </div>
        </section>
        <section
          className="section4"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/Assets/section4.jpg"
            })`,
          }}
        >
          <Testimonial />
        </section>
        <section
          className="section5"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/Assets/fparty.png"
            })`,
          }}
        >
          <div class="comingSoon">
            <b>
              <span>Where</span>-FantaSee-<span>becomes</span>-reality
            </b>
            <p>Coming Soon</p>
          </div>
        </section>
      </div>
    </>
  );
}

export default TranslatorApp;

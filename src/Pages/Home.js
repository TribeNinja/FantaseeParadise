import "./Pages.scss";
import Navbar from "../Components/Navbar";
import { Translator, T, Config } from "react-translator-component";
import Topbar from "../Components/Topbar";
import Testimonial from "../Components/Testimonial";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";
import Forms from "../Components/Forms";
import Collage from "../Components/Collage";

Config.default = "en";

Config.list = {
  en: {
    text: "English",
    icon: "../flags/en.svg",
    file: require("../locale/en"),
  },
  es: {
    text: "Español",
    icon: "../flags/es.svg",
    file: require("../locale/es"),
  },
};

function TranslatorApp() {
  return (
    <Translator>
      <Home />
    </Translator>
  );
}

function Home() {
  const [modelManage, setModelManage] = useState(false);
  useEffect(() => {
    var imageControl = function (event) {
      var fromTop = window.scrollTop(),
        url = null;
      console.log(fromTop);

      if (fromTop < 100) {
        url = "http://i.hizliresim.com/KdrGVV.png";
      } else if (fromTop > 500) {
        url =
          "http://4.bp.blogspot.com/-mHaVHhUegKs/UjHp6DruPeI/AAAAAAAAGx8/m_je_crr1v0/s1600/wp+cortana+screenshot+mashup.jpg";
      }

      "body".css("background-image", "url(" + url + ")");
    };
    window.scroll(imageControl);
  });
  return (
    <>
      <div className="MainContainer">
        <section
          className="section0"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/Assets/section1.jpg"
            })`,
          }}
        >
          {/* Section 1 */}
          <section className="section1">
            <p>{T("See your FantaSees come to life")}</p>
          </section>
          {/* Section 2 */}
          <section className="section2">
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
        </section>
        {/* Section 3 */}
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
              <p
                className="section3Button"
                onClick={() => {
                  setModelManage(!modelManage);
                }}
              >
                {T("Join us to live your FantaSee life")}
              </p>
            </div>
          </div>
          {modelManage ? <Forms /> : <Collage clicked={modelManage} />}
        </section>
        {/* Section 4 */}
        {/* <section
          className="section4"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/Assets/section4.jpg"
            })`,
          }}
        >
          <Testimonial />
        </section> */}
        {/* Section 5 */}
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
        <Footer />
      </div>
    </>
  );
}

export default TranslatorApp;

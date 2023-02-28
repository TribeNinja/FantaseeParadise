import "./Pages.scss";
import Footer from "../Components/Footer";
import { useEffect, useState, useContext } from "react";
import Forms from "../Components/Forms";
import { toast } from "react-toastify";
import { observer } from "mobx-react-lite";
import HomeSlide from "../Components/HomeSlide";
import { useTranslation } from "react-i18next";
// import Store from "../store";

function Home() {
  const mailnotify = () => toast("Email Copied to clipboard !");
  const { t } = useTranslation();

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
  }, [modelManage]);

  const [showPopUp, setPopUp] = useState(true);

  // Age prompt store in localstorage
  const [minor, setMinor] = useState(false);
  useEffect(() => {
    const data = window.localStorage.getItem("MY_APP_STATE");
    if (data !== null) setPopUp(JSON.parse(data));
  }, []);
  useEffect(() => {
    window.localStorage.setItem("MY_APP_STATE", JSON.stringify(showPopUp));
  }, [showPopUp]);

  //
  return (
    <>
      {minor && (
        <div className="minorContainer">
          <h1>You need to be above 18 years to enter.</h1>
        </div>
      )}
      {showPopUp && (
        <div className={"popUpContainer"}>
          <div className="popUp">
            <h1>Are you 18 years or above?</h1>
            <div>
              <h3
                onClick={() => {
                  setPopUp(false);
                }}
              >
                Yes
              </h3>
              <h3
                onClick={() => {
                  setMinor(true);
                  setPopUp(false);
                }}
              >
                No
              </h3>
            </div>
          </div>
        </div>
      )}
      <div className="MainContainer">
        <section className="section0">
          {/* Section 1 */}
          <section className="section1" id="section1">
            <p data-aos="zoom-in">{t(`HomeTop.1`)}</p>
          </section>

          {/* Section 2 */}
          <section className="section2" id="about">
            <div className="textContainer" data-aos="fade-up">
              <div className="title">
                <h1>{t(`About Us.1`)}</h1>
                <div className="line"></div>
              </div>
              <p>
                {t(`About1.1`)}
                <a
                  target="_top"
                  href="mailto:fantaseeparadise@gmail.com"
                  style={{ color: "#cd9706" }}
                  onClick={() => {
                    navigator.clipboard.writeText(this.state.textToCopy);
                    mailnotify();
                  }}
                >
                  Contact us
                </a>
                {t(`About2.1`)}
              </p>
            </div>
            <video
              data-aos="fade-up"
              className="video"
              src={process.env.PUBLIC_URL + "/Assets/homeVideo.mp4"}
              muted
              autoPlay
              loop
            />
          </section>
        </section>
        {/* Total Model Management */}
        <section
          className="section3"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/Assets/section3b.jpg"
            })`,
          }}
        >
          <div className="section3Wrapper">
            <div className="writing" data-aos="fade-up">
              <h1>{t(`ModelMgmt.1`)}</h1>
              <p>{t(`ModelDesc.1`)} </p>
              <p
                className="section3Button"
                onClick={() => {
                  setModelManage(!modelManage);
                }}
              >
                {modelManage ? `${t(`ModelBtn1.1`)}` : `${t(`ModelBtn2.1`)}`}
              </p>
            </div>
          </div>
          {modelManage ? <Forms /> : <HomeSlide />}
        </section>
        <section
          className="section5"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/Assets/fparty.png"
            })`,
          }}
          id="section5"
        >
          <div class="comingSoon">
            <b data-aos="fade-down">Where FantaSee becomes reality</b>
            <p data-aos="fade-down" data-aos-delay="50">
              Coming Soon
            </p>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default observer(Home);

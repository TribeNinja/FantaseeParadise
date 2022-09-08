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
          <h1>{T("See your FantaSees come to life")}</h1>
        </section>
        <section className="section2"></section>
        <section className="section3"></section>
        <section className="section4"></section>
      </div>
    </>
  );
}

export default TranslatorApp;

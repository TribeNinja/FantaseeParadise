import { observer } from "mobx-react-lite";
import React from "react";
import Footer from "../Components/Footer";
import "./Pages.scss";
import { Translator, T, Config } from "react-translator-component";
function TranslatorApplication() {
  return (
    <Translator>
      <Application />
    </Translator>
  );
}

const Application = () => {
  return (
    <>
      <div className="FormContainer">
        <div className="FormTitle">
          <h1>{T("Application Form")}</h1>
        </div>
        <div className="formContents">
          <form>
            <label>
              <p>Name</p>
              <input type="text" />
            </label>
            <label>
              <p>Address</p>
              <input type="text" />
            </label>
            <label>
              <p>City/State</p>
              <input type="text" />
            </label>
            <label>
              <p>Date of Birth</p>
              <input type="date" color="#c5c5c5" />
            </label>
            <div>
              <p>Sex</p>
              <div className="sex" aria-required>
                <label className="radioContainer">
                  <p>Female</p>
                  <input type="radio" name="test" />
                </label>
                <label className="radioContainer">
                  <p>Male</p>
                  <input type="radio" name="test" />
                </label>
                <label className="radioContainer">
                  <p>Other</p>
                  <input type="radio" name="test" />
                </label>
              </div>
            </div>
            <label>
              <p>Phone Number</p>
              <input type="tel" />
            </label>
            <label>
              <p>Email</p>
              <input type="email" required />
            </label>
            <label>
              <p>Emergency Contact Number</p>
              <input type="tel" />
            </label>
            <label className="subInput">
              <div>
                <p>Measurements: </p>
                <input placeholder="Chest" type="number" />
                <input placeholder="Waist" type="number" />
                <input placeholder="Hip" type="number" />
                <input placeholder="Inseam" type="number" />
                <input placeholder="Height" type="number" />
              </div>
              <div>
                <p>Size: </p>
                <input placeholder="Top" type="number" />
                <input placeholder="Bottom" type="number" />
              </div>
            </label>
            <input type="submit" />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default observer(TranslatorApplication);

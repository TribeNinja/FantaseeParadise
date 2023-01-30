import { observer } from "mobx-react-lite";
import React, { useRef } from "react";
import Footer from "../Components/Footer";
import "./Pages.scss";
import { Translator, T } from "react-translator-component";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TranslatorApplication() {
  return (
    <Translator>
      <Application />
    </Translator>
  );
}

const Application = () => {
  const notify = () => toast("Wow so easy !");
  const form = useRef();
  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_t0fquzt",
        "template_s3cmdac",
        form.current,
        "fDnRGjXsxGgVpe5x3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.preventDefault();
    e.target.reset();
    notify();
  };
  return (
    <>
      <ToastContainer />
      <div className="FormContainer">
        <div className="FormTitle">
          <h1>{T("Application Form")}</h1>
        </div>
        <div className="formContents">
          <form ref={form} onSubmit={sendEmail}>
            <label>
              <p>Name</p>
              <input type="text" name="name" />
            </label>
            <label>
              <p>City/State</p>
              <input type="text" name="state" />
            </label>
            <label>
              <p>Date of Birth</p>
              <input type="date" color="#c5c5c5" name="dob" />
            </label>
            <div>
              <p>Sex</p>
              <div className="sex" aria-required>
                <label className="radioContainer">
                  <p>Female</p>
                  <input type="radio" name="sex" />
                </label>
                <label className="radioContainer">
                  <p>Male</p>
                  <input type="radio" name="sex" />
                </label>
                <label className="radioContainer">
                  <p>Other</p>
                  <input type="radio" name="sex" />
                </label>
              </div>
            </div>
            <label>
              <p>Phone Number</p>
              <input type="tel" name="tel" />
            </label>
            <label>
              <p>Email</p>
              <input type="email" name="email" required />
            </label>
            <label>
              <p>Images</p>
              <input type="file" name="file" />
            </label>
            <label>
              <p>Comments</p>
              <input type="text" name="comments" />
            </label>
            <label>
              <p>Social Media (Separate links by commas)</p>
              <input type="text" name="social" />
            </label>
            <label className="subInput">
              <div>
                <p>Measurements: </p>
                <input placeholder="Chest" type="number" name="chest" />
                <input placeholder="T" type="number" name="waist" />
                <input placeholder="Hip" type="number" name="hip" />
                <input placeholder="Inseam" type="number" name="inseam" />
                <input placeholder="Height" type="number" name="height" />
              </div>
              <div>
                <p>Size: </p>
                <input placeholder="Top" type="number" name="top" />
                <input placeholder="Bottom" type="number" name="bottom" />
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

import { observer } from "mobx-react-lite";
import React, { useRef, useState, useEffect } from "react";
import Footer from "../Components/Footer";
import "./Pages.scss";
import { Translator, T } from "react-translator-component";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import sanityClient from "../Components/Client";

function TranslatorApplication() {
  return (
    <Translator>
      <Application />
    </Translator>
  );
}

const Application = () => {
  // Auto Handle Age
  const [minDate, setMinDate] = useState();
  const handleChange_age = (event) => {
    console.log("DOB:", event.target.value);
    var age_latest = { age_latest: calculate_age(event.target.value) };
    setMinDate(age_latest);
    console.log(minDate);
  };
  const calculate_age = (dob1) => {
    var today = new Date();
    var birthDate = new Date(dob1); // create a date object directly from `dob1` argument
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }
    return age_now;
  };

  const navigate = useNavigate();
  const notify = () => toast("Form Submitted !");
  const notifyminors = () => toast("You must be above 18 years old to submit.");
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
    navigate("/");
  };

  const [data, setData] = useState();
  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "applications"]{imageApplication}`)
      .then((data) => setData(data))
      .catch(console.error);
  }, []);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const asset = await sanityClient.assets.upload("image", file, {
      filename: file.name,
      extension: file.name.split(".").pop(),
    });
    console.log("Uploaded image asset: ", asset);
  };
  return (
    <>
      <div className="FormContainer">
        <div className="FormTitle">
          <h1>{T("Application Form")}</h1>
        </div>
        <div className="formContents">
          <form ref={form} onSubmit={minDate > 17 ? sendEmail : notifyminors()}>
            <label className="zIndex">
              <p>Name</p>
              <input type="text" name="name" required />
            </label>
            <label className="zIndex">
              <p>City/State</p>
              <input type="text" name="state" required maxLength={2} />
            </label>
            <label>
              <p>Date of Birth</p>
              <input
                onChange={handleChange_age}
                type="date"
                color="#c5c5c5"
                name="dob"
                required
              />
            </label>
            <div className="zIndex">
              <p>Sex</p>
              <div className="sex" aria-required>
                <label className="radioContainer">
                  <p>Female</p>
                  <input type="radio" name="sex" value="Female" />
                </label>
                <label className="radioContainer">
                  <p>Male</p>
                  <input type="radio" name="sex" value="Male" />
                </label>
                <label className="radioContainer">
                  <p>Other</p>
                  <input type="radio" name="sex" value="Other" />
                </label>
              </div>
            </div>
            <label className="zIndex">
              <p>Phone Number</p>
              <input type="tel" name="tel" required />
            </label>
            <label className="zIndex">
              <p>Email</p>
              <input type="email" name="email" required />
            </label>
            <label>
              <p>Images</p>
              <div className="imageUpload">
                <input type="file" name="file" onClick={handleImageUpload} />
              </div>
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

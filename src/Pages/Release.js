import React from "react";
import "./Pages.scss";
import Footer from "../Components/Footer";
const Release = () => {
  return (
    <>
      <div className="FormContainer2">
        <div className="FormTitle">
          <h1>Release Form</h1>
          <p>
            For valuable consideration received, I grant to Earn to Burn LLC and
            Fantasee Paradise the absolute and irrevocable right and
            unrestricted permission concerning any photographs that he/she has
            taken or may take of me or in which I may be included with others,
            to use, reuse, publish, and republish the photographs in whole or in
            part, individually or in connection with other material, in any and
            all media now or hereafter known, including the internet, and for
            any purpose whatsoever, specifically including illustration,
            promotion, art, editorial, advertising, and trade, without
            restriction as to alteration. I release and discharge Earn to Burn
            LLC and Fantasee Paradise from any and all claims and demands that
            may arise out of or in connection with the use of the photographs,
            including without limitation any and all claims for libel or
            violation of any right of publicity or privacy. This authorization
            and release shall also insure to the benefit of the heirs, legal
            representatives, licensees, and assigns of Earn to Burn LLC and
            Fantasee Paradise, as well as the person(s) for whom he/she took the
            photographs. I am a legally competent adult and have the right to
            contract in my own name. I have read this document and fully
            understand its contents. This release shall be binding upon me and
            my heirs, legal representatives, and assigns.
          </p>
        </div>
        <div className="formContents">
          <form>
            <label>
              <p>Name</p>
              <input type="text" />
            </label>
            <label>
              <p>Signature</p>
              <input type="text" />
            </label>
            <label>
              <p>Date </p>
              <input type="date" color="#c5c5c5" />
            </label>

            <input type="submit" />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Release;

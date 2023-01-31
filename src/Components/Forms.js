import { observer } from "mobx-react-lite";
import React from "react";
import "./components.scss";
import { Link } from "react-router-dom";
const Forms = () => {
  const formList = [
    {
      title: "Application Form",
      link: "apply-now",
    },
    { title: "Release Form", link: "release-form" },
  ];
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <h1>Forms</h1>
        <div className="formList">
          {formList.map((item, index) => {
            return (
              <>
                <Link to={item.link} style={{ textDecoration: "none" }}>
                  <h1 key={index}>{item.title}</h1>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default observer(Forms);

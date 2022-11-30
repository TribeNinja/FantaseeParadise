import { observer } from "mobx-react-lite";
import React from "react";
import "./components.scss";
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
                <a
                  href={item.link}
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  <h1 key={index}>{item.title}</h1>
                </a>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default observer(Forms);

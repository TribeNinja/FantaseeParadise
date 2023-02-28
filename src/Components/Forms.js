import { observer } from "mobx-react-lite";
import React from "react";
import "./components.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Forms = () => {
  const formList = [
    {
      title: "Application Form",
      link: "apply-now",
    },
    { title: "Release Form", link: "release-form" },
  ];
  const { t } = useTranslation();
  return (
    <div className="formContainer" data-aos="fade-in">
      <div className="formWrapper">
        <h1>{t(`Forms.1`)}</h1>
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

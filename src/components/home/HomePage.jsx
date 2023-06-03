import React from "react";
import RightImg from "../icons/Right-img";
import { useTranslation } from "next-i18next";

const HomePage = (props) => {
  const { t } = useTranslation("common");

  const { banner } = props;

  return (
    <div className="relative1">
      <div
        className="home"
        style={{
          backgroundImage: `url(${banner.src})`,
        }}
      >
        <div className="home-text">
          <p>{t(banner.text, { ns: "common" })}</p>
          <span>
            <RightImg />
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

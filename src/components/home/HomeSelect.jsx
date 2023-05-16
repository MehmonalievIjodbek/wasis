import React from "react";
import Link from "next/link";
import RightIcon from "@components/icons/Right-icon";
import { useTranslation } from "next-i18next";

// import HomeButton from "../HomeButton";

const HomeSelect = () => {
  const { t } = useTranslation("common");

  const dataSelect = [
    {
      id: 1,
      text: "pipelines",
      to: "/pipelines/",
    },
    {
      id: 2,
      text: "refining",
      to: "/refining/",
    },
    {
      id: 3,
      text: "tankFarms",
      to: "/tankfarms/",
    },
    {
      id: 4,
      text: "underground",
      to: "/underground/",
    },
    {
      id: 5,
      text: "upstream",
      to: "/upstream/",
    },
    {
      id: 6,
      text: "chemicals",
      to: "/chemicals/",
    },
  ];

  const selectText = {
    text: "home-banner",
    label: "home-text",
    description: "home-desc",
    selectText: "home-page",
  };
  return (
    <div className="container">
      {/* <HomeButton /> */}
      <div className="homeSelect">
        <div className="homeSelect-left">
          <h2>{t(selectText.text, { ns: "common" })}</h2>
          <p>{t(selectText.label, { ns: "common" })}</p>
          <h6>{t(selectText.description, { ns: "common" })}</h6>
        </div>
        <div className="homeSelect-right">
          <h3>{t(selectText.selectText, { ns: "common" })}</h3>
          <div>
            {dataSelect.map((item) => (
              <Link href={item.to}>
                <div className="homeSelect-right__container" key={item.id}>
                  <div
                    style={{ cursor: "pointer" }}
                    className="homeSelect-right__container-link"
                  >
                    <p>{t(item.text, { ns: "common" })}</p>
                    <span>
                      <RightIcon />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSelect;

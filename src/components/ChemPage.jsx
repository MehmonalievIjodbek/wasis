import React from "react";
import GreenIcons from "./icons/Green-icons";
import { useTranslation } from "next-i18next";

const ChemPage = (props) => {
  const { t } = useTranslation("common", "menu");

  const { items, chemicals } = props;
  return (
    <div className="container">
      <div className="chemicals">
        <div className="chemicals-left">
          <h2>{t(chemicals.text, { ns: "common" })}</h2>
          <p>{t(chemicals.label, { ns: "common" })}</p>
          <h6>{chemicals.description}</h6>
        </div>
        <div className="chemicals-right">
          <h3>{t(chemicals.selectText, { ns: "common" })}</h3>
          <div>
            {items.map((item) => (
              <div className="chemicals-right__container" key={item.id}>
                <div className="chemicals-right__container-link">
                  <span>
                    <GreenIcons />
                  </span>
                  <p>{t(item.text, { ns: "common" })}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChemPage;

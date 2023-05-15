import React from "react";
import GreenIcons from "./icons/Green-icons";

const ChemPage = (props) => {
  const { items, chemicals } = props;
  return (
    <div className="container">
      <div className="chemicals">
        <div className="chemicals-left">
          <h2>{chemicals.text}</h2>
          <p>{chemicals.label}</p>
          <h6>{chemicals.description}</h6>
        </div>
        <div className="chemicals-right">
          <h3>{chemicals.selectText}</h3>
          <div>
            {items.map((item) => (
              <div className="chemicals-right__container" key={item.id}>
                <div className="chemicals-right__container-link">
                  <span>
                    <GreenIcons />
                  </span>
                  <p>{item.text}</p>
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

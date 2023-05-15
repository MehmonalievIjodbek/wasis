import React from "react";
import RightImg from "../icons/Right-img";
const HomePage = (props) => {
  const { banner } = props;

  console.log("banner.src", banner.src);

  return (
    <div className="relative1">
      <div
        className="home"
        style={{
          backgroundImage: `url(${banner.src})`,
        }}
      >
        <div className="home-text">
          <p>{banner.text}</p>
          <span>
            <RightImg />
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

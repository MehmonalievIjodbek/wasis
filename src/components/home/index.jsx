import React from "react";
import HomePage from "@components/home/HomePage";
import HomeSelect from "@components/home/HomeSelect";

const HomeIndex = () => {
  const banner = {
    src: "/assets/images/home.jpg",
    text: "OIL, GAS & INDUSTRIAL",
  };

  return (
    <>
      <HomePage banner={banner} />
      <HomeSelect />
    </>
  );
};

export default HomeIndex;

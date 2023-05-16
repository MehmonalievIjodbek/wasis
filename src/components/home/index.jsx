import React from "react";
import HomePage from "@components/home/HomePage";
import HomeSelect from "@components/home/HomeSelect";
import { useTranslation } from "next-i18next";

const HomeIndex = () => {
  const { t } = useTranslation("common");

  const banner = {
    src: "/assets/images/home.jpg",
    text: "home-banner",
  };

  return (
    <>
      <HomePage banner={banner} />
      <HomeSelect />
    </>
  );
};

export default HomeIndex;

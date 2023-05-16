import React from "react";
import Link from "next/link";
import HomeIcons from "./icons/Home-icons";
import { useTranslation } from "next-i18next";

const HomeButton = () => {
  const { t } = useTranslation("common");

  return (
    <div className="home-button">
      <Link href="/">
        <button className="home-button__link">
          <HomeIcons /> {t("home-button")}
        </button>
      </Link>
    </div>
  );
};

export default HomeButton;

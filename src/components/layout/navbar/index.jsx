import React from "react";
import Link from "next/link";
import LanguageSwitcher from "@components/ui/language-switcher";
import { useTranslation } from "next-i18next";
import OpenModal from "../../../components/OpenModal";

const index = () => {
  const { t } = useTranslation("common", "menu");
  const navbar = [
    {
      id: 1,
      text: "menu-project",
      to: "/our-project/",
    },
    {
      id: 2,
      text: "menu-industrial",
      to: "/industrial/",
    },
    {
      id: 3,
      text: "menu-mining",
      to: "/mining/",
    },
    {
      id: 4,
      text: "menu-contacts",
      to: "/contact/",
    },
  ];
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-navbar">
          <div className="header-img">
            <Link href="/">
              <img src="/assets/images/log.png" alt="" />
            </Link>
          </div>
          <div className="header-nav">
            {navbar.map((item) => (
              <div key={item.id}>
                <Link href={item.to}>
                  <p>{t(item.text, { ns: "menu" })}</p>
                </Link>
              </div>
            ))}
          </div>
          <LanguageSwitcher />
          <OpenModal />
        </div>
      </div>
    </div>
  );
};

export default index;

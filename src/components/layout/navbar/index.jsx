import React from "react";
import Link from "next/link";
import LanguageSwitcher from "@components/ui/language-switcher";

const index = () => {
  const navbar = [
    {
      id: 1,
      text: "Our Project",
      to: "/our-project/",
    },
    {
      id: 2,
      text: "Industrial",
      to: "/industrial/",
    },
    {
      id: 3,
      text: "Liquefied Natural Gas (LNG)",
      to: "/liquefied-natural-gas-lng/",
    },
    {
      id: 4,
      text: "Mining",
      to: "/mining/",
    },
    {
      id: 5,
      text: "Contact",
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
                  <p>{item.text}</p>
                </Link>
              </div>
            ))}
          </div>
          <LanguageSwitcher />
          {/* <OpenModal /> */}
        </div>
      </div>
    </div>
  );
};

export default index;

import React from "react";
import Link from "next/link";
import HomeIcons from "./icons/Home-icons";

const HomeButton = () => {
  return (
    <div className="home-button">
      <Link href="/">
        <button className="home-button__link">
          <HomeIcons /> Home
        </button>
      </Link>
    </div>
  );
};

export default HomeButton;

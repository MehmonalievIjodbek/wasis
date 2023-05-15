import React from "react";
import Link from "next/link";
import RightIcon from "@components/icons/Right-icon";

// import HomeButton from "../HomeButton";

const dataSelect = [
  {
    id: 1,
    text: "Pipelines",
    to: "/pipelines/",
  },
  {
    id: 2,
    text: "Refining",
    to: "/refining/",
  },
  {
    id: 3,
    text: "Tank Farms & Terminals",
    to: "/tankfarms/",
  },
  {
    id: 4,
    text: "Underground Storage",
    to: "/underground/",
  },
  {
    id: 5,
    text: "Upstream",
    to: "/upstream/",
  },
  {
    id: 6,
    text: "Chemicals & Petrochemicals",
    to: "/chemicals/",
  },
];

const selectText = {
  text: "Oil, Gas & Industrial",
  label: "We are optimizing production processes! ",
  description:
    "NSI uses the expertise gained from successful oil and gas projects to reduce emissions and increase efficiency across all sectors. In doing so, we are following the path towards a carbon-free circular economy in order to ensure a good quality of life for future generations.",
  selectText: "NSI focuses on the following business areas:",
};

const HomeSelect = () => {
  return (
    <div className="container">
      {/* <HomeButton /> */}
      <div className="homeSelect">
        <div className="homeSelect-left">
          <h2>{selectText.text}</h2>
          <p>{selectText.label}</p>
          <h6>{selectText.description}</h6>
        </div>
        <div className="homeSelect-right">
          <h3>{selectText.selectText}</h3>
          <div>
            {dataSelect.map((item) => (
              <Link href={item.to}>
                <div className="homeSelect-right__container" key={item.id}>
                  <div className="homeSelect-right__container-link">
                    <p>{item.text}</p>
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

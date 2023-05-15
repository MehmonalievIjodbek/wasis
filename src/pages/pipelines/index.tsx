import React from "react";
import HomePage from "@components/home/HomePage";
import HomeButton from "../../components/HomeButton";
import ChemPage from "../../components/ChemPage";
import Layout from "@components/layout/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const chemicals = {
  text: "Pipelines",
  description: (
    <div>
      <p>
        For years, NSI has been among the top ten international engineering
        companies for large pipeline systems both onshore and offshore,
        including pumping stations, compressor stations, storage, and loading
        facilities. NSI has designed some of the largest pipeline systems in the
        world and provided project management services throughout their
        implementation.
      </p>

      <p>
        NSI offers all the required technical disciplines and project management
        services in house.
      </p>
    </div>
  ),
  selectText: "Fields of Expertise:",
};

const items = [
  {
    id: 1,
    text: "All types of pipeline systems and stations (both new construction and rehabilitation)",
  },
];

const banner = {
  src: "/assets/images/pipelines.jpg",
  text: "PIPELINES",
};

export default function index(){
  return (
    <div>
      <div>
        <HomePage banner={banner} />
      </div>
      <div className="container">
        <HomeButton />
      </div>
      <div>
        <ChemPage chemicals={chemicals} items={items} />
      </div>
    </div>
  );
};

index.Layout = Layout

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common', 'menu'])),
    },
    revalidate: 60,
  }
}

import React from "react";
import HomePage from "@components/home/HomePage";
import HomeButton from "../../components/HomeButton";
import ChemPage from "../../components/ChemPage";
import Layout from "@components/layout/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const chemicals = {
  text: "Refining",
  description: (
    <div>
      <p>
        The world we live in today has been shaped by crude oil, a natural
        resource. Being an economical primary energy carrier with high energy
        density, it has improved wealth and provided accessibility to energy
        intensive products at reasonable prices. Looking to the future, refinery
        operators will have to prepare for challenges, such as crude oil
        feedstocks with a more complex composition, growing market requests for
        clean fuels, increased demand for energy efficiency by regulators and,
        current role and impact of digitalization and climate change.
      </p>

      <p>
        Refineries of the future will have to adapt to their customers’ needs
        and gain public acceptance. It is imperative that refiners place their
        focus on high-value products produced through sophisticated and
        energy-efficient processes, being environmentally compliant with the
        lowest possible carbon footprint.
      </p>
      <p>
        As an independent consultant with a strong engineering backbone, NSI
        helps its clients to provide sustainable, value creating hydrocarbons
        that allow mankind to prepare for the future and also generate wealth.
      </p>
    </div>
  ),
  selectText: "Fields of Expertise:",
};

const items = [
  {
    id: 1,
    text: "Crude oil distillation plants",
  },
  {
    id: 2,
    text: "Naphtha treatment plants",
  },
  {
    id: 3,
    text: "Gas treatment plants",
  },
  {
    id: 4,
    text: "Flue gas treatment plants",
  },
  {
    id: 5,
    text: "Feedstock and product logistics facilities",
  },
];

const banner = {
  src: "/assets/images/refineries.jpg",
  text: "REFINING",
};

export default function index() {
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


import React from "react";
import HomePage from "@components/home/HomePage";
import HomeButton from "../../components/HomeButton";
import ChemPage from "../../components/ChemPage";
import Layout from "@components/layout/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const chemicals = {
  text: "Liquefied Natural Gas (LNG)",
  description: (
    <div>
      <p>
        More and more investors of new power and industry projects are
        considering natural gas or LNG as a possible source of energy supply.
        LNG has become a world commodity energy source, making it readily
        available. Governments worldwide promote the use of LNG for the future
        power mix and intend to install new and refurbish existing LNG plants.
      </p>

      <p>
        This approach using low emission fuels will allow us to cope with the
        ambitious targets set for the reduction of greenhouse gases and other
        emissions while supporting a steady and healthy growth of the worldwide
        economy. NSI actively helps shape this expansion by managing customized
        projects of any type and size. In the last 20 years NSI has successfully
        designed and managed more than 50 projects around the world with
        capacities of up to 10 MTPA.
      </p>
      <p>
        NSI provides integrated, interdisciplinary services for LNG projects
        from the initial study, through the design and tender phase to
        commissioning and start-up. Emphasis is always placed on developing
        individual solutions that take complex framework conditions into
        account.
      </p>
    </div>
  ),
  selectText: "Fields of Expertise:",
};

const items = [
  {
    id: 1,
    text: "Liquefaction technologies",
  },
  {
    id: 2,
    text: "Regasification technologies",
  },
  {
    id: 3,
    text: "Small-scale LNG (SSLNG)",
  },
  {
    id: 4,
    text: "Bunkering solutions",
  },
  {
    id: 5,
    text: "Distribution solutions including loading and unloading",
  },
  {
    id: 6,
    text: "Integrated gas-to-power solutions",
  },
  {
    id: 7,
    text: "Storage tanks (cryogenic technologies)",
  },
  {
    id: 8,
    text: "Jetties and single point moorings (SPMs)",
  },
  {
    id: 9,
    text: "Mooring and berthing solutions",
  },
];

const banner = {
  src: "/assets/images/liquefied.jpg",
  text: "LIQUEFIED NATURAL GAS (LNG)",
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

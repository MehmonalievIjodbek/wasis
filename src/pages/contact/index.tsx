import React from "react";
import HomePage from "@components/home/HomePage";
import HomeButton from "../../components/HomeButton";
import ChemPage from "../../components/ChemPage";
import MessageEmail from "../../components/icons/Message";
import CallIcon from "../../components/icons/Call-icons";
import Location from "../../components/icons/Location";
import Layout from "@components/layout/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const chemicals = {
  text: "Your direct contact to NSI",
  description: (
    <div>
      <p>
        It is of great importance to NSI to be responsive to its clients and to
        persons interested in NSI.
      </p>
    </div>
  ),
};

const items = [
  {
    id: 1,
    text: "Connect with us",
  },
];

const banner = {
  src: "/assets/images/contact.jpg",
  text: "Contact",
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
      <div className="container">
        <div className="contact">
          <h2>Your contact for Oil, Gas & Industrial</h2>
          <p>
            Executive Vice President (EVP), Group Director Oil, Gas & Industrial
          </p>
          <div className="contact-card">
            {/* <img src="/img/avatar.png" alt="" /> */}
            <div>
              {/* <h3>Christian Heinz</h3> */}
              <div className="contact-card__number">
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <MessageEmail />
                  <span>E-mail</span>
                </div>
                <a href="mailto: info@nsi-capital.com">info@nsi-capital.com</a>
              </div>
              <div className="contact-card__number">
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <CallIcon />
                  <span>Mobile</span>
                </div>
                <a href="tel: +86922108">8692 2108</a>
              </div>
              <div className="contact-card__number">
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <CallIcon />
                  <span>Office tel</span>
                </div>
                <a href="tel: +66767785">66767785</a>
              </div>
              <div className="contact-card__number">
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <Location />
                  <span>
                    93 DAWSON ROAD #16-36 <br /> SKYTERRACE @ DAWSON SINGAPORE
                    (142093)
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h4
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  fontFamily: "Poppins",
                  marginBottom: "24px",
                  color: "#00845e",
                }}
              >
                Representative in <span style={{ color: "red" }}>Germany</span>{" "}
                . Mr. Delzer Sergei
              </h4>
              <div className="contact-card__number">
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <CallIcon />
                  <span>Phone</span>
                </div>
                <a href="tel: +4915755749306">+49 15755749306</a>
              </div>
            </div>
            <div>
              <h4
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  fontFamily: "Poppins",
                  marginBottom: "24px",
                  color: "#00845e",
                }}
              >
                Representative in{" "}
                <span style={{ color: "red" }}>Uzbekistan</span> . Mr. Knoroz
                Damir
              </h4>
              <div className="contact-card__number">
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <CallIcon />
                  <span>Phone</span>
                </div>
                <a href="tel: +998977784847">+998977784847</a>
              </div>
            </div>
          </div>
        </div>
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

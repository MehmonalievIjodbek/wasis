import React from "react";
import Link from "next/link";
import SendIcon from "./icons/Telegram-icons";
import { useTranslation } from "next-i18next";

const ContactButton = () => {
  const { t } = useTranslation("common");

  return (
    <div
      className="home-button"
      style={{ display: "flex", justifyContent: "end" }}
    >
      <Link href="/contact">
        <button className="home-button__link">
          <SendIcon /> {t("contact-button")}
        </button>
      </Link>
    </div>
  );
};

export default ContactButton;

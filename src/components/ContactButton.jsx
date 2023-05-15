import React from "react";
import Link from "next/link";
import SendIcon from "./icons/Telegram-icons";

const ContactButton = () => {
  return (
    <div
      className="home-button"
      style={{ display: "flex", justifyContent: "end" }}
    >
      <Link href="/contact">
        <button className="home-button__link">
          <SendIcon /> Contact
        </button>
      </Link>
    </div>
  );
};

export default ContactButton;

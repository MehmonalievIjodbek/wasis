import React from "react";
import {useTranslation} from "next-i18next";
import NewsCard from "@components/news/newsCard";

const HomeIndex = () => {
    const {t} = useTranslation("common");

    return (
        // <div className="relative1">
        <div className="container">
            <div className="relative1">
                <div className="main-page">
                    <h1>{t("main-page-h1")}</h1>
                </div>
                <div>
                    <NewsCard/>
                </div>
            </div>
        </div>
        // </div>
    );
};

export default HomeIndex;

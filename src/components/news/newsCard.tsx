import React from 'react';
import Link from "next/link";
import items from "@framework/static/data";
import {useTranslation} from "next-i18next";

const NewsCard = () => {
    const {t} = useTranslation('common')

    return (
            <div className="news-cards">
                {items?.map((item) => (
                    <Link href={`/news/${item.id}`}>
                        <div className="news-card">
                            <img  src={item?.src} alt=""/>
                            <p>{t(item?.text, {ns: 'common'}).substring(0, 214)} ...</p>
                        </div>
                    </Link>
                ))}
            </div>
    );
};

export default NewsCard;
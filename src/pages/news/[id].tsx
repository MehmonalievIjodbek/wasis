import Layout from "@components/layout/layout";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import items from "@framework/static/data";
import {useTranslation} from "next-i18next";
import React from "react";
import Link from "next/link";
import LeftIcon from "../../../public/icons/left-icon";


export default function Item({item}: any) {
    const {t} = useTranslation('common')


    if (!item) {
        return <div>Item not found</div>;
    }

    return (
        <div className="container">
            <div className="relative1">
                <Link href="/news">
                    <div className="back-news" style={{display: 'flex', alignItems: 'center', gap: "20px"}}>
                        <LeftIcon/>
                        <span>{t("back")}</span>
                    </div>
                </Link>
                <div className="news-card__id">
                    <div className="news-card__idimg">
                        <img src={item?.src} alt=""/></div>
                    <p>{items?.map((item) => (
                        <p>{t(item?.text, {ns: 'common'})}</p>
                    ))}</p>
                </div>
            </div>
        </div>
    );
}

Item.Layout = Layout

// export async function getStaticPaths( { locale }: any) {
//     const paths = items.map((item) => ({
//         params: {id: item.id.toString()},
//         locale
//     }));
//
//     return {paths, fallback: false};
// }

export async function getStaticPaths({locales}: { locales: string[] }) {
    const paths = items.flatMap((_project) => {
        return locales.map((locale) => {
            return {
                params: {id: _project.id.toString()},
                locale: locale,
            };
        });
    });

    return {
        paths,
        fallback: true,
    };
}

export async function getStaticProps({params, locale}: any) {
    const item = items.find((item) => item.id.toString() === params.id);

    return {
        props: {
            item,
            ...(await serverSideTranslations(locale!, ['common', 'menu'])),
        },
        revalidate: 60,
    }
}

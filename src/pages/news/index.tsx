import React from 'react'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import Layout from '@components/layout/layout'
import {useTranslation} from 'next-i18next'
import items from "@framework/static/data";
import Link from "next/link";

export default function index() {
    const {t} = useTranslation('common')

    console.log("t", t)

    return (
        <div className="container">
            <div className="relative1">
                <p className="news-cards__tex">{t("news")}</p>

                <div className="news-cards">
                    {items?.map((item) => (
                        <Link href={`/news/${item.id}`}>
                            <div className="news-card">
                                <img src={item?.src} alt=""/>
                                <p>{t(item?.text, {ns: 'common'}).substring(0, 214)} ...</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

index.Layout = Layout

export async function getStaticProps({locale}: any) {
    return {
        props: {
            ...(await serverSideTranslations(locale!, ['common', 'menu'])),
        },
        revalidate: 60,
    }
}

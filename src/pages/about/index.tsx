import React from 'react'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import Layout from '@components/layout/layout'
import {useTranslation} from 'next-i18next'

export default function index() {
    const {t} = useTranslation('common')
    console.log(t)

    return (
        <div className="container">
            <div className="relative1">
                <h2 className="about-page__text">{t("menu-project")}</h2>
                <div className="about-page">
                    <p>{t("about")}</p>
                    <p>{t("about1")}</p>
                    <p>{t("about2")}</p>
                    <p>{t("about3")}</p>
                    <p>{t("about4")}</p>
                </div>

            </div>
            {/*<div>*/}
            {/*    <HomePage banner={banner} />*/}
            {/*</div>*/}
            {/*<div className="container">*/}
            {/*    <HomeButton />*/}
            {/*</div>*/}
            {/*<div className="container">*/}
            {/*    <ChemPage chemicals={chemicals} items={items} />*/}
            {/*</div>*/}
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

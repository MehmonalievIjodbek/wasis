import React from 'react'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import Layout from '@components/layout/layout'
import {useTranslation} from 'next-i18next'



export default function index() {
    const {t} = useTranslation('common')


    return (
        <div className="container">
            <div className="relative1">
                <div className="announcements">
                    <h3>{t("announcements")}</h3>

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

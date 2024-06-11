import React from 'react'
import Layout from '@components/layout/layout'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from 'next-i18next'

export default function index() {
    const {t} = useTranslation('common')


    return (
        <div>
            <div className="container">
                <div className="relative1">
                    <div className="contact">
                        <span>{t("email")}:</span>
                        <a href="mailto:wasissupport@wasis.uz">wasissupport@wasis.uz</a>

                        <iframe
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3A6ceb39580daaa27c8969c6bb11b4defb024dbfad74c1ef82d90a07c943e3804b&amp;source=constructor"
                            width="100%" height="600" style={{marginTop: "40px"}} frameBorder="0"></iframe>
                    </div>
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

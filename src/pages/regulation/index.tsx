import React from 'react'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import Layout from '@components/layout/layout'
import {useTranslation} from 'next-i18next'
import DownloadIcon from "../../../public/icons/download-icons";

export const files = [
    {
        id: 1,
        text: "file1",
        file: "/assets/pdf/ISR.pdf"
    },
    {
        id: 1,
        text: "file2",
        file: "/assets/pdf/ПП-159.pdf"
    },
    {
        id: 1,
        text: "file3",
        file: "/assets/pdf/WASIS%20information.pdf"
    }
]

export default function index() {
    const {t} = useTranslation('common')
    console.log(t)

    return (
        <div className="container">
            <div className="relative1">
                <div className="regulation">
                    {files?.map((item) => (
                        <div className="regulation-cards">
                            {t(item?.text, {ns: 'common'})}
                            <a className="regulation-card" href={item?.file}>
                                <DownloadIcon/>
                            </a>
                        </div>
                    ))}
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

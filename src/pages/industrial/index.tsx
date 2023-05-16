import React from 'react'
import HomePage from '@components/home/HomePage'
import HomeButton from '../../components/HomeButton'
import ChemPage from '../../components/ChemPage'
import Layout from '@components/layout/layout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
// import Chemicals from "../../components/chemicals";

export default function index() {
  const { t } = useTranslation('common')

  // {t(, { ns: 'common' })}

  const chemicals = {
    text: 'industrial-banner',
    description: (
      <div>
        <p>{t('chemicals-dec1')}</p>

        <p>{t('chemicals-dec2')}</p>

        <p>{t('chemicals-dec3')}</p>
      </div>
    ),
    selectText: 'selectText',
  }

  const items = [
    {
      id: 1,
      text: 'items-text1',
    },
    {
      id: 2,
      text: 'items-text2',
    },
    {
      id: 3,
      text: 'items-text3',
    },
    {
      id: 4,
      text: 'items-text4',
    },
    {
      id: 5,
      text: 'items-text5',
    },
    {
      id: 6,
      text: 'items-text6',
    },
    {
      id: 7,
      text: 'items-text7',
    },
    {
      id: 8,
      text: 'items-text8',
    },
    {
      id: 9,
      text: 'items-text9',
    },
  ]

  const banner = {
    src: '/assets/images/industrial.jpg',
    text: 'industrial-banner',
  }
  return (
    <div>
      <div>
        <HomePage banner={banner} />
      </div>
      <div className="container">
        <HomeButton />
      </div>
      <div className="container">
        <ChemPage chemicals={chemicals} items={items} />
      </div>
    </div>
  )
}

index.Layout = Layout

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common', 'menu'])),
    },
    revalidate: 60,
  }
}

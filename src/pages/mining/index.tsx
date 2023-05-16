import React from 'react'
import HomePage from '@components/home/HomePage'
import HomeButton from '../../components/HomeButton'
import ChemPage from '../../components/ChemPage'
import Layout from '@components/layout/layout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export default function index() {
  const { t } = useTranslation('common')
  const chemicals = {
    text: 'mining-banner',
    description: (
      <div>
        <p>{t('mining-dec1')}</p>

        <p>{t('mining-dec2')}</p>

        <p>{t('mining-dec3')}</p>
      </div>
    ),
    selectText: 'selectText',
  }

  const items = [
    {
      id: 1,
      text: 'items-mining-text1',
    },
    {
      id: 2,
      text: 'items-mining-text2',
    },
    {
      id: 3,
      text: 'items-mining-text3',
    },
    {
      id: 4,
      text: 'items-mining-text4',
    },
    {
      id: 5,
      text: 'items-mining-text5',
    },
    {
      id: 6,
      text: 'items-mining-text6',
    },
    {
      id: 7,
      text: 'items-mining-text7',
    },
    {
      id: 8,
      text: 'items-mining-text8',
    },
    {
      id: 9,
      text: 'items-mining-text9',
    },
  ]
  const banner = {
    src: '/assets/images/mining.jpg',
    text: 'mining-banner',
  }
  return (
    <div>
      <div>
        <HomePage banner={banner} />
      </div>
      <div className="container">
        <HomeButton />
      </div>
      <div>
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

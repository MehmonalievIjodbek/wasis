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
    text: 'underground-banner',
    description: (
      <div>
        <p>{t('underground-desc1')}</p>

        <p>{t('underground-desc2')}</p>
      </div>
    ),
    selectText: 'selectText',
  }

  const items = [
    {
      id: 1,
      text: 'underground-text1',
    },
    {
      id: 2,
      text: 'underground-text2',
    },
    {
      id: 3,
      text: 'underground-text3',
    },
    {
      id: 4,
      text: 'underground-text4',
    },
  ]
  const banner = {
    src: '/assets/images/underground.jpg',
    text: 'underground-banner',
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

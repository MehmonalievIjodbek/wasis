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
    text: 'upstream-banner',
    description: (
      <div>
        <p>{t('upstream-desc1')}</p>

        <p>{t('upstream-desc2')}</p>
      </div>
    ),
    selectText: 'selectText',
  }

  const items = [
    {
      id: 1,
      text: 'upstream-text1',
    },
    {
      id: 2,
      text: 'upstream-text2',
    },
    {
      id: 3,
      text: 'upstream-text3',
    },
    {
      id: 4,
      text: 'upstream-text4',
    },
    {
      id: 5,
      text: 'upstream-text5',
    },
  ]
  const banner = {
    src: '/assets/images/upstream.jpg',
    text: 'upstream-banner',
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

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
    text: 'tank-banner',
    description: (
      <div>
        <p>{t('tank-desc1')}</p>

        <p>{t('tank-desc2')}</p>
      </div>
    ),
    selectText: 'selectText',
  }

  const items = [
    {
      id: 1,
      text: 'tank-text1',
    },
    {
      id: 2,
      text: 'tank-text2',
    },
    {
      id: 3,
      text: 'tank-text3',
    },
    {
      id: 4,
      text: 'tank-text4',
    },
    {
      id: 5,
      text: 'tank-text5',
    },
    {
      id: 6,
      text: 'tank-text6',
    },
    {
      id: 7,
      text: 'tank-text7',
    },
  ]
  const banner = {
    src: '/assets/images/tankfarms.jpg',
    text: 'tank-banner',
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

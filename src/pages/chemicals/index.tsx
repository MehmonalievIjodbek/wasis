import React from 'react'
import HomePage from '@components/home/HomePage'
import HomeButton from '../../components/HomeButton'
import ChemPage from '../../components/ChemPage'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Layout from '@components/layout/layout'
import { useTranslation } from 'next-i18next'

export default function index() {
  const { t } = useTranslation('common')

  const chemicals = {
    text: 'chemicals-banner',
    description: (
      <div>
        <p>{t('chemicals-descr1')}</p>

        <p>{t('chemicals-descr2')}</p>

        <p>{t('chemicals-descr3')}</p>
      </div>
    ),
    selectText: 'selectText',
  }

  const items = [
    {
      id: 1,
      text: 'chemicals-text1',
    },
    {
      id: 2,
      text: 'chemicals-text2',
    },
    {
      id: 3,
      text: 'chemicals-text3',
    },
    {
      id: 4,
      text: 'chemicals-text4',
    },
    {
      id: 5,
      text: 'chemicals-text5',
    },
    {
      id: 6,
      text: 'chemicals-text6',
    },
  ]

  const banner = {
    src: '/assets/images/chemicals.jpg',
    text: 'chemicals-banner',
  }

  return (
    <>
      <div>
        <HomePage banner={banner} />
      </div>
      <div className="container">
        <HomeButton />
      </div>
      <div className="container">
        <ChemPage chemicals={chemicals} items={items} />
      </div>
    </>
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

import React from 'react'
import HomePage from '@components/home/HomePage'
import HomeButton from '../../components/HomeButton'
import ChemPage from '../../components/ChemPage'
import Layout from '@components/layout/layout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const chemicals = {
  text: 'Upstream',
  description: (
    <div>
      <p>
        The efficient, safe, and environmentally compatible production and
        treatment of oil and gas are critical in industry.
      </p>

      <p>
        NSI offers a complete spectrum of design and project management services
        for production facilities, both onshore and offshore. NSI has
        demonstrated its ability to successfully implement such complex tasks
        through its completion of multiple projects around the world under
        challenging site conditions.
      </p>
    </div>
  ),
  selectText: 'Fields of Expertise:',
}

const items = [
  {
    id: 1,
    text: 'Onshore/offshore oil and gas production systems including:    ',
  },
  {
    id: 2,
    text: 'Field gathering and distribution systems',
  },
  {
    id: 3,
    text: 'Central processing facilities',
  },
  {
    id: 4,
    text: 'Utilities and offsites',
  },
  {
    id: 5,
    text: 'Export systems',
  },
]
const banner = {
  src: '/assets/images/upstream.jpg',
  text: 'Upstream',
}

export default function index() {
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

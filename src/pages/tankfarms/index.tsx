import React from 'react'
import HomePage from '@components/home/HomePage'
import HomeButton from '../../components/HomeButton'
import ChemPage from '../../components/ChemPage'
import Layout from '@components/layout/layout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const chemicals = {
  text: 'Tank Farms & Terminals',
  description: (
    <div>
      <p>
        Consulting services, design, project management, and site supervision
        for the construction of tank farms and terminals comprise an important
        market segment for NSI.
      </p>

      <p>
        In prestigious international projects in this sector, NSI has made a
        name for itself among investors, owners, EPC contractors, and public and
        private banks.
      </p>
    </div>
  ),
  selectText: 'Fields of Expertise:',
}

const items = [
  {
    id: 1,
    text: 'Storage tanks for crude oil and chemicals',
  },
  {
    id: 2,
    text: 'Finished products',
  },
  {
    id: 3,
    text: 'LPG and LNG',
  },
  {
    id: 4,
    text: 'Bio fuels, chemicals, and additives',
  },
  {
    id: 5,
    text:
      'Loading and unloading facilities for railcars, trucks, VLCC, and barges',
  },
  {
    id: 6,
    text: 'Jetties',
  },
  {
    id: 7,
    text: 'Single point moorings (SPM), etc.',
  },
]
const banner = {
  src: '/assets/images/tankfarms.jpg',
  text: 'TANK FARMS & TERMINALS',
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

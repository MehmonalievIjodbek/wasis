import React from 'react'
import HomePage from '@components/home/HomePage'
import HomeButton from '../../components/HomeButton'
import ChemPage from '../../components/ChemPage'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Layout from '@components/layout/layout'

const chemicals = {
  text: 'Chemicals & Petrochemicals',
  description: (
    <div>
      <p>
        Chemicals and petrochemicals have enabled the creation of novel
        materials and products in countless manufacturing industries and other
        fields such as agriculture, communication, and transportation.
        Petrochemicals are the foundation of virtually every modern industry and
        form a vital part of our lives. Objects, which make life easy and
        comfortable – such as cars, computers, cell phones, children’s toys,
        household cleaning products, fertilizers and pharmaceutical drugs – are
        derived from petrochemicals.
      </p>

      <p>
        NSI guides its clients in developing new, innovative solutions for value
        creating hydrocarbons that can be integrated into proven engineering
        concepts.
      </p>
      <p>
        Finding ways to convert the precious hydrocarbon resource into a
        sustainable value chain loop for further generations is one of NSI’s
        strongest ambitions.
      </p>
    </div>
  ),
  selectText: 'Fiels of Expertise:',
}

const items = [
  {
    id: 1,
    text: 'Polyolefin plants',
  },
  {
    id: 2,
    text: 'PET and polyester plants',
  },
  {
    id: 3,
    text: 'Ammonia, urea and fertilizer plants',
  },
  {
    id: 4,
    text: 'Gas to petrochemicals complexes',
  },
  {
    id: 5,
    text: 'Xylenes to polymers complexes',
  },
]

const banner = {
  src: '/assets/images/chemicals.jpg',
  text: 'Chemicals & Petrochemicals',
}

export default function index() {
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

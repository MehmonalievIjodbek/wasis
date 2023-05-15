import React from 'react'
import HomePage from '@components/home/HomePage'
import HomeButton from '../../components/HomeButton'
import ChemPage from '../../components/ChemPage'
import Layout from '@components/layout/layout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const chemicals = {
  text: 'Mining',
  description: (
    <div>
      <p>
        Iron, ferroalloys and non-ferrous metals are needed in most industrial
        and consumer products today. Whether it be for iron, nickel, copper,
        lithium or other elements, NSI provides a number of tailor-made
        solutions for extraction which are both socially and environmentally
        acceptable.
      </p>

      <p>
        Whilst planning these solutions, NSI focuses especially on optimized
        operation and maintenance, and making efficient use of energy and water.
        Good water management, one of NSI’s key competencies, is of utmost
        importance in mining. Together with partners, NSI is also able to
        deliver all the engineering services required for the mining industry.
      </p>
      <p>
        NSI provides integrated, interdisciplinary services for LNG projects
        from the initial study, through the design and tender phase to
        commissioning and start-up. Emphasis is always placed on developing
        individual solutions that take complex framework conditions into
        account.
      </p>
    </div>
  ),
  selectText: 'Fields of Expertise:',
}

const items = [
  {
    id: 1,
    text: 'Desalination plants',
  },
  {
    id: 2,
    text: 'Water transport systems',
  },
  {
    id: 3,
    text: 'Slurry and tailings transport, and management',
  },
  {
    id: 4,
    text: 'Rail systems',
  },
  {
    id: 5,
    text: 'Ports',
  },
  {
    id: 6,
    text: 'Infrastructure',
  },
  {
    id: 7,
    text: 'Dams',
  },
  {
    id: 8,
    text: 'Tunnels',
  },
  {
    id: 9,
    text: 'Logistics',
  },
]
const banner = {
  src: '/assets/images/mining.jpg',
  text: 'Mining',
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

import React from 'react'
import HomePage from '@components/home/HomePage'
import HomeButton from '../../components/HomeButton'
import ChemPage from '../../components/ChemPage'
import Layout from '@components/layout/layout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const chemicals = {
  text: 'Underground Storage',
  description: (
    <div>
      <p>
        In the energy industry, the storage of natural gas is important both to
        provide strategic reserves and to meet peak load demands.
      </p>

      <p>
        The simulation of all injection and withdrawal processes involved in the
        operation of gas storage facilities, the optimization of all plant
        components, the implementation of short switching and ramp-up times, and
        the installation of fully remote controlled systems are all part of the
        core competencies of NSI. Underground storage facilities are also used
        for mineral oil and mineral oil products.
      </p>
    </div>
  ),
  selectText: 'Fields of Expertise:',
}

const items = [
  {
    id: 1,
    text: 'Peak shaving plants',
  },
  {
    id: 2,
    text: 'Seasonal storage plants',
  },
  {
    id: 3,
    text: 'Storage caverns',
  },
  {
    id: 4,
    text: 'Facilities for depleted oil and gas fields',
  },
]
const banner = {
  src: '/assets/images/underground.jpg',
  text: 'Underground Storage',
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

import React from 'react'
import HomePage from '@components/home/HomePage'
import GreenIcons from '../../components/icons/Green-icons'
import ContactButton from '../../components/ContactButton'
import Layout from '../../components/layout/layout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function index() {
  const chemicals = {
    text:
      'Representatives of our company have been involved in the engineering and construction of large projects in many countries, in particular:    ',
    selectText:
      'An engineering company specializing in the provision of engineering and technical services. Our company provides full management and support of technical projects:',
  }

  const projectCard = [
    {
      id: 1,
      title: 'ABB Lummus Global GmbH. Germany - Uzbekistan.',
      text: '2002 -1998',
      desc:
        'Shurtan gas-chemical complex. Production of ethylene and polyethylene for Uzbekneftegaz.',
    },
    {
      id: 2,
      title: 'NIPIGASPERERABOTKA. Япония – Россия.',
      text: '2004 -2002',
      desc: 'Factory LNG (Sakhalin-II) for Shell Global Solution.      ',
    },
    {
      id: 3,
      title: 'ILF Consulting Engineers. Türkiye.',
      text: '2005-2004',
      desc: 'BTC oil pipeline project for BP.',
    },
    {
      id: 4,
      title: 'LURGI GmbH Germany. ',
      text: '2010 -2005      ',
      desc: 'Methanol project in Russia and China; Melamine project.  ',
    },
    {
      id: 5,
      title: 'AIR LIQUIDE GLOBAL E&C SOLUTION / LURGI GmbH. Germany. ',
      text: '2013- 2010',
      desc: 'Melamine project.',
    },
    {
      id: 6,
      title: ' Linde AG. Germany.',
      text: '2017 -2013',
      desc: 'Assembly of steel factory production in Russia. ',
    },
  ]

  const items = [
    {
      id: 1,
      text: 'Planning a place for placing objects',
    },
    {
      id: 2,
      text:
        'Legal and actual actions on issues related to the placement of objects',
    },
    {
      id: 3,
      text: 'Engineering surveys',
    },
    {
      id: 4,
      text: 'Design',
    },
    {
      id: 5,
      text: 'PorConstructionts',
    },
    {
      id: 6,
      text:
        'Legal and actual actions on the issues of object legalization (expertise) ',
    },
    {
      id: 7,
      text: 'Supply and maintenance of equipment',
    },
    {
      id: 8,
      text: 'Commissioning',
    },
  ]

  const banner = {
    src: '/assets/images/ourProjects.jpg',
    text: 'Our Project',
  }
  return (
    <div>
      <div>
        <HomePage banner={banner} />
      </div>
      <div className="container">
        {/* <div>
          <HomeButton />
        </div> */}
        <div className="ourProjects">
          <div>
            <h1>
              Representative office of the engineering company NSI-Capital PTE
              LTD (Singapore) in Uzbekistan.
            </h1>
            <h2>
              NSI-Capital PTE LTD provides engineering services and supply of
              modern technological equipment to enterprises of the Republic of
              Uzbekistan. The company has been successfully operating in the
              fields of oil and gas, petrochemical, metallurgical industries,
              mechanical engineering and energy for many years, specializing in
              research and the search for non-standard, effective solutions.
            </h2>
          </div>
          <div>
            <div className="chemicals">
              <div className="chemicals-left">
                <h2>{chemicals.text}</h2>
                <div className="chemicals__left-cards">
                  {projectCard.map((item) => (
                    <div key={item.id} className="chemicals__left-card">
                      <h5>{item.title}</h5>
                      <p>{item.text}</p>
                      <h6>{item.desc}</h6>
                    </div>
                  ))}
                </div>
              </div>
              <div className="chemicals-right">
                <h3>{chemicals.selectText}</h3>
                <div>
                  {items.map((item) => (
                    <div className="chemicals-right__container" key={item.id}>
                      <div className="chemicals-right__container-link">
                        <span>
                          <GreenIcons />
                        </span>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="ourProject-text">
            <h4>
              The dynamics of the development of engineering services in
              Uzbekistan predetermined NSI-Capital PTE LTD the feasibility of
              creating a separate independent unit of the company to conduct
              business in this region, to ensure close cooperation with
              industrial enterprises of Uzbekistan and promptly resolve emerging
              production issues and service the supplied equipment.
            </h4>
            <h5>
              The representative office of the engineering NSI-Capital PTE LTD
              in Uzbekistan is ready, at the request of the Customers, to
              participate in the implementation of global projects for the
              development of the enterprise / industry, as well as the design of
              individual units of installations, technological units and
              individual devices, select technological parameters, link and
              design study of units at the production site, carry out by its own
              specialists or with the involvement of specialists from the
              equipment manufacturer, installation supervision, commissioning of
              equipment, warranty and service maintenance.
            </h5>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <ContactButton />
        </div>
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

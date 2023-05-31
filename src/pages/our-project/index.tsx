import React from 'react'
import HomePage from '@components/home/HomePage'
import GreenIcons from '../../components/icons/Green-icons'
import ContactButton from '../../components/ContactButton'
import Layout from '../../components/layout/layout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export default function index() {
  const { t } = useTranslation('common')

  const chemicals = {
    text: 'chemicals-text',
    selectText: 'chemicals-selectText',
  }

  const projectCard = [
    {
      id: 1,
      title: 'project-title1',
      text: '2002 -1998',
      desc: 'project-desc1',
    },
    {
      id: 2,
      title: 'project-title2',
      text: '2004 -2002',
      desc: 'project-desc2',
    },
    {
      id: 3,
      title: 'project-title3',
      text: '2005-2004',
      desc: 'project-desc3',
    },
    {
      id: 4,
      title: 'project-title4',
      text: '2010 -2005      ',
      desc: 'project-desc4',
    },
    {
      id: 5,
      title: 'project-title5 ',
      text: '2013- 2010',
      desc: 'project-desc5',
    },
    {
      id: 6,
      title: 'project-title6',
      text: '2017 -2013',
      desc: 'project-desc6',
    },
  ]

  const items = [
    {
      id: 1,
      text: 'our-items-text1',
    },
    {
      id: 2,
      text: 'our-items-text2',
    },
    {
      id: 3,
      text: 'our-items-text3',
    },
    {
      id: 4,
      text: 'our-items-text4',
    },
    {
      id: 5,
      text: 'our-items-text5',
    },
    {
      id: 6,
      text: 'our-items-text6',
    },
    {
      id: 7,
      text: 'our-items-text7',
    },
    {
      id: 8,
      text: 'our-items-text8',
    },
  ]

  const banner = {
    src: '/assets/images/ourProjects.jpg',
    text: 'our-banner',
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
            <h1>{t('our-projects-h1')}</h1>
            <h2>{t('our-projects-h2')}</h2>
          </div>
          <div>
            <div className="chemicals">
              <div className="chemicals-left">
                <h2>{t(chemicals.text, { ns: 'common' })}</h2>
                <div className="chemicals__left-cards">
                  {projectCard.map((item) => (
                    <div key={item.id} className="chemicals__left-card">
                      <h5>{t(item.title, { ns: 'common' })}</h5>
                      <p>{t(item.text, { ns: 'common' })}</p>
                      <h6>{t(item.desc, { ns: 'common' })}</h6>
                    </div>
                  ))}
                </div>
              </div>
              <div className="chemicals-right">
                <h3>{t(chemicals.selectText, { ns: 'common' })}</h3>
                <div>
                  {items.map((item) => (
                    <div className="chemicals-right__container" key={item.id}>
                      <div className="chemicals-right__container-link">
                        <span>
                          <GreenIcons />
                        </span>
                        <p>{t(item.text, { ns: 'common' })}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="ourProject-text">
            <h4>{t('ourProject-text-h4')}</h4>
            <h5>{t('ourProject-text-h5')}</h5>
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

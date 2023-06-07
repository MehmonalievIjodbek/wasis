import React, { useState } from 'react'
import HomePage from '@components/home/HomePage'
import GreenIcons from '../../components/icons/Green-icons'
import ContactButton from '../../components/ContactButton'
import Layout from '../../components/layout/layout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import HomeButton from '../../components/HomeButton'
import parse from 'html-react-parser'
import { Image } from 'antd'

export default function index() {
  const { t } = useTranslation('common')
  const [selectedProject, setSelectedProject] = useState(null)

  const chemicals = {
    text: 'chemicals-text',
    selectText: 'chemicals-selectText',
  }

  const projectCard = [
    {
      id: 1,
      title: 'project-title1',
      // text: '1998 - 2002',
      desc: 'project-desc1',
      imd: '/assets/images/4.jpg',
    },
    {
      id: 2,
      title: 'project-title2',
      // text: '2002 - 2004',
      desc: 'project-desc2',
      imd: '/assets/images/5.jpg',
    },
    {
      id: 3,
      title: 'project-title3',
      // text: '2004 - 2005',
      desc: 'project-desc3',
      imd: '/assets/images/3.jpg',
    },
    {
      id: 4,
      title: 'project-title4',
      // text: '2005 - 2010',
      desc: 'project-desc4',
      imd: '/assets/images/2.jpg',
    },
    {
      id: 5,
      title: 'project-title5',
      // text: '2010 - 2013',
      desc: 'project-desc5',
      imd: false,
    },
    {
      id: 6,
      title: 'project-title6',
      // text: '2013 - 2017',
      desc: 'project-desc6',
      imd: false,
    },
  ]
  const [visible, setVisible] = useState(false)

  const handleProjectClick = (projectId: any) => {
    setVisible(true)
    const project = projectCard.find((p) => p.id === projectId)
    setSelectedProject(project)
  }

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
        <HomeButton />
      </div>
      <div className="container">
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
                  {projectCard.map((project) => (
                    <>
                      <div key={project.id} className="chemicals__left-card">
                        <h5>{parse(t(project.title, { ns: 'common' }))}</h5>
                        {/* <p>{t(project.text, { ns: 'common' })}</p> */}
                        <h6>{parse(t(project.desc, { ns: 'common' }))}</h6>
                        <div className="chemicals-button__card">
                          <button
                            key={project.id}
                            onClick={() => handleProjectClick(project.id)}
                          >
                            {t('see-image')}
                          </button>
                        </div>
                      </div>
                    </>
                  ))}

                  {selectedProject && (
                    <div>
                      <Image
                        width={200}
                        style={{
                          display: 'none',
                        }}
                        src={selectedProject?.imd}
                        preview={{
                          visible,
                          onVisibleChange: (value) => {
                            setVisible(value)
                          },
                        }}
                      />
                    </div>
                  )}
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

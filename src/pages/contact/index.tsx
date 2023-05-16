import React from 'react'
import HomePage from '@components/home/HomePage'
import HomeButton from '../../components/HomeButton'
import ChemPage from '../../components/ChemPage'
import MessageEmail from '../../components/icons/Message'
import CallIcon from '../../components/icons/Call-icons'
import Location from '../../components/icons/Location'
import Layout from '@components/layout/layout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export default function index() {
  const { t } = useTranslation('common')

  const chemicals = {
    text: 'contact-chtext',
    description: (
      <div>
        <p>{t('contact-chdesc')}</p>
      </div>
    ),
  }

  const items = [
    {
      id: 1,
      text: 'contact-text',
    },
  ]

  const banner = {
    src: '/assets/images/contact.jpg',
    text: 'contact-banner',
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
      <div className="container">
        <div className="contact">
          <h2>{t('contact-chtext')}</h2>
          <p>{t('contact-p')}</p>
          <div className="contact-card">
            {/* <img src="/img/avatar.png" alt="" /> */}
            <div>
              {/* <h3>Christian Heinz</h3> */}
              <div className="contact-card__number">
                <div
                  style={{ display: 'flex', gap: '10px', alignItems: 'center' }}
                >
                  <MessageEmail />
                  <span>{t('contact-email')}</span>
                </div>
                <a href="mailto: info@nsi-capital.com">info@nsi-capital.com</a>
              </div>
              <div className="contact-card__number">
                <div
                  style={{ display: 'flex', gap: '10px', alignItems: 'center' }}
                >
                  <CallIcon />
                  <span>{t('contact-mobile')}</span>
                </div>
                <a href="tel: +86922108">8692 2108</a>
              </div>
              <div className="contact-card__number">
                <div
                  style={{ display: 'flex', gap: '10px', alignItems: 'center' }}
                >
                  <CallIcon />
                  <span>{t('contact-officeTel')}</span>
                </div>
                <a href="tel: +66767785">66767785</a>
              </div>
              <div className="contact-card__number">
                <div
                  style={{ display: 'flex', gap: '10px', alignItems: 'center' }}
                >
                  <Location />
                  <span>
                    93 DAWSON ROAD #16-36 <br /> SKYTERRACE @ DAWSON SINGAPORE
                    (142093)
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h4
                style={{
                  fontSize: '16px',
                  fontWeight: '400',
                  fontFamily: 'Poppins',
                  marginBottom: '24px',
                  color: '#00845e',
                }}
              >
                {t('contact-h41')}{' '}
                <span style={{ color: 'red' }}>{t('contact-span')}</span>
                {t('contact-h42')}
              </h4>
              <div className="contact-card__number">
                <div
                  style={{ display: 'flex', gap: '10px', alignItems: 'center' }}
                >
                  <CallIcon />
                  <span>{t('contact-phone')}</span>
                </div>
                <a href="tel: +4915755749306">+49 15755749306</a>
              </div>
            </div>
            <div>
              <h4
                style={{
                  fontSize: '16px',
                  fontWeight: '400',
                  fontFamily: 'Poppins',
                  marginBottom: '24px',
                  color: '#00845e',
                }}
              >
                {t('contact-h51')}{' '}
                <span style={{ color: 'red' }}>{t('contact-span1')}</span>
                {t('contact-h52')}
              </h4>
              <div className="contact-card__number">
                <div
                  style={{ display: 'flex', gap: '10px', alignItems: 'center' }}
                >
                  <CallIcon />
                  <span>{t('contact-phone')}</span>
                </div>
                <a href="tel: +998977784847">+998977784847</a>
              </div>
            </div>
          </div>
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

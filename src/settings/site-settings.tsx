import EngIcon from '@components/icons/language-eng-icon'
import RuIcon from '@components/icons/language-ru-icon'

export const siteSettings = {
  name: 'Wasis',
  description: 'description',
  author: {
    name: 'PSS, Company.',
    websiteUrl: 'https://pss-it.uz',
    address: '',
  },
  logo: {
    url: '/assets/images/log.jpg',
    alt: 'Infokredit',
    href: '/',
    width: 95,
    height: 30,
  },
  defaultLanguage: 'en',
  currencyCode: 'USD',
  site_header: {
    menu: [
      {
        id: 1,
        path: '/',
        label: 'menu-home',
        subMenu: [
          {
            id: 1,
            path: '/',
            label: 'menu-modern',
          },
        ],
      },
      {
        id: 2,
        path: '/about',
        label: 'menu-about',
      },
      {
        id: 3,
        path: '/services',
        label: 'menu-services',
      },
      {
        id: 4,
        path: '/news',
        label: 'menu-news',
      },
      {
        id: 5,
        path: '/contact-us',
        label: 'menu-contacts',
      },
    ],
    mobileMenu: [
      {
        id: 1,
        path: '/',
        label: 'menu-home',
        subMenu: [
          {
            id: 1,
            path: '/about',
            label: 'menu-about',
          },
        ],
      },
      {
        id: 2,
        path: '/services',
        label: 'menu-services',
      },
      {
        id: 3,
        path: '/news',
        label: 'menu-news',
      },
      {
        id: 4,
        path: '/contact-us',
        label: 'menu-contacts',
      },
    ],
    languageMenu: [
      {
        id: 'en',
        name: 'EN',
        value: 'en',
        icon: <EngIcon />,
      },
      {
        id: 'ru',
        name: 'RU',
        value: 'ru',
        icon: <RuIcon />,
      },
      // {
      //   id: 'uz',
      //   name: 'UZ',
      //   value: 'uz',
      // },
    ],
  },
}

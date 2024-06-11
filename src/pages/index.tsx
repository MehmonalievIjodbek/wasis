import Container from '@components/ui/container'
import HeroSlider from '@containers/hero-slider'
import Layout from '@components/layout/layout'
import { GetStaticProps } from 'next'
import { QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { homeContemporaryHeroSlider as banners } from '@framework/static/banner'
import { useTranslation } from 'next-i18next'
import HomeIndex from '@components/home/index'

export default function Home() {
  const { t } = useTranslation('menu')
  return (
    <>
      <Container className="border-b-2 border[#E6E6E6]">
        {/* <h2>{t('menu-home')}</h2> */}
        <HomeIndex />\

      </Container>
    </>
  )
}

Home.Layout = Layout
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const queryClient = new QueryClient()

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      ...(await serverSideTranslations(locale!, [
        'common',
        'forms',
        'menu',
        'footer',
      ])),
    },
    revalidate: 60,
  }
}

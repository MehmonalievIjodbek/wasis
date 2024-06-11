import Container from '@components/ui/container'
import Layout from '@components/layout/layout'
import {GetStaticProps} from 'next'
import {QueryClient} from 'react-query'
import {dehydrate} from 'react-query/hydration'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import HomeIndex from '@components/home/index'

export default function Home() {
    return (
        <>
            <Container className="border-b-2 border[#E6E6E6]">
                <HomeIndex/>
            </Container>
        </>
    )
}

Home.Layout = Layout
export const getStaticProps: GetStaticProps = async ({locale}) => {
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

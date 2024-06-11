// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import type {AppProps} from 'next/app'
import {useRouter} from 'next/router'
import {ManagedUIContext} from '@contexts/ui.context'
import ManagedDrawer from '@components/common/drawer/managed-drawer'
import {useRef} from 'react'
import {QueryClient, QueryClientProvider} from 'react-query'
import {Hydrate} from 'react-query/hydration'
import {appWithTranslation} from 'next-i18next'
import {DefaultSeo} from '@components/common/default-seo'

import '@styles/style.scss'
import '@styles/style-mobile.scss'

function handleExitComplete() {
    if (typeof window !== 'undefined') {
        window.scrollTo({top: 0})
    }
}

const Noop: React.FC = ({children}) => <>{children}</>

const CustomApp = ({Component, pageProps}: AppProps) => {
    const queryClientRef = useRef<any>()
    if (!queryClientRef.current) {
        queryClientRef.current = new QueryClient()
    }
    const router = useRouter()
    const Layout = (Component as any).Layout || Noop

    return (
        <>
            <QueryClientProvider client={queryClientRef.current}>
                <Hydrate state={pageProps.dehydratedState}>
                    <ManagedUIContext>
                        <Layout pageProps={pageProps}>
                            <DefaultSeo/>
                            <Component {...pageProps} key={router.route}/>
                        </Layout>
                        <ManagedDrawer/>
                    </ManagedUIContext>
                </Hydrate>
            </QueryClientProvider>
        </>
    )
}

export default appWithTranslation(CustomApp)



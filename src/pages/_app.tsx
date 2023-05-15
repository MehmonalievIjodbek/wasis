// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'
import { ManagedUIContext } from '@contexts/ui.context'
import ManagedDrawer from '@components/common/drawer/managed-drawer'
import { useRef } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Hydrate } from 'react-query/hydration'
import { ToastContainer } from 'react-toastify'
// import { ReactQueryDevtools } from "react-query/devtools";
import { appWithTranslation } from 'next-i18next'
import { DefaultSeo } from '@components/common/default-seo'
// Load Open Sans and satisfy typeface font
import '@fontsource/open-sans'
import '@fontsource/open-sans/600.css'
import '@fontsource/open-sans/700.css'
import '@fontsource/satisfy'
// external
import 'react-toastify/dist/ReactToastify.css'
// base css file
// import "@styles/scrollbar.css";
// import "@styles/swiper-carousel.css";
// import "@styles/custom-plugins.css";
// import "@styles/tailwind.css";
import '@styles/style.scss'
import '@styles/style-mobile.scss'

function handleExitComplete() {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 })
  }
}

const Noop: React.FC = ({ children }) => <>{children}</>

const CustomApp = ({ Component, pageProps }: AppProps) => {
  const queryClientRef = useRef<any>()
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient()
  }
  const router = useRouter()
  const Layout = (Component as any).Layout || Noop

  return (
    <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
      <QueryClientProvider client={queryClientRef.current}>
        <Hydrate state={pageProps.dehydratedState}>
          <ManagedUIContext>
            <Layout pageProps={pageProps}>
              <DefaultSeo />
              <Component {...pageProps} key={router.route} />
              <ToastContainer />
            </Layout>

            <ManagedDrawer />
          </ManagedUIContext>
        </Hydrate>
        {/* <ReactQueryDevtools /> */}
      </QueryClientProvider>
    </AnimatePresence>
  )
}

export default appWithTranslation(CustomApp)

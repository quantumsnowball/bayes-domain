import '../styles/globals.css'
import type { AppProps } from 'next/app'
import App from '../components/App'
import Head from 'next/head'


function NextApp({ Component, pageProps }: AppProps) {
  // the frame component for every page
  // `Component` is the react component return by each path in pages/
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Bayes" />
        <meta name="keywords" content="Bayes Theorem" />
        <title>Bayes</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/favicon.ico"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/icon-512.png"></link>
        <meta name="theme-color" content="#303030" />
        <meta name="robots" content="all" />
      </Head>
      <App>
        <Component {...pageProps} />
      </App>
    </>
  )
}


export default NextApp

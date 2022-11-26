import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  // the root component for every page
  return <Component {...pageProps} />
}

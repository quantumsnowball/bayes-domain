import '../styles/globals.css'
import type { AppProps } from 'next/app'
import App from '../components/App'

function NextApp({ Component, pageProps }: AppProps) {
  // the frame component for every page
  // `Component` is the react component return by each path in pages/
  return (
    <App>
      <Component {...pageProps} />
    </App>
  )
}


export default NextApp

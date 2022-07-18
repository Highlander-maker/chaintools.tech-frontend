import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  <img className="object-cover mix-blend-saturation" src="/background.svg" alt="" />
  return <Component {...pageProps} />
}

export default MyApp

import '@/styles/globals.css'
import { IconBrandVercel } from '@tabler/icons'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (<>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Component {...pageProps} />
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer external"
        >
          <span className="mr-1">Powered by{" "}</span>
          <span className='sr-only'>Vercel</span>
          <IconBrandVercel strokeWidth={1.2} />
        </a>
        <span className="mx-2">•</span>
        <a
          className="flex items-center justify-center"
          href="https://shie1bi.hu"
          target="_blank"
          rel="noopener noreferrer external"
        >
          shie1bi.hu
        </a>
      </footer>
    </div>
  </>)
}

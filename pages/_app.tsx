import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider, Container } from "@mantine/core"
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (<MantineProvider withGlobalStyles withNormalizeCSS theme={{
    colorScheme: 'dark',
    primaryColor: 'violet',
  }}>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <div style={{ display: 'flex', alignItems: 'center', minHeight: '100vh' }}>
      <Container sx={(theme) => ({ boxShadow: `0px 0px 5px 2px ${theme.fn.rgba(theme.colors.dark[7], .6)}`, backgroundColor: theme.fn.rgba(theme.colors.dark[7], .6) })} p="md">
        <Component {...pageProps} />
      </Container>
    </div>
  </MantineProvider>)
}

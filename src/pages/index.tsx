import Head from 'next/head'
import { Inter } from '@next/font/google'
import { Main } from '@/components/Main/Main'
import { Footer } from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Victor - Balogun </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Main />
        {/* <Footer /> */}
      </main>
    </>
  )
}

import { Inter } from '@next/font/google';
import Head from 'next/head';

import { Button } from '@/components/Button/Button';
import Layout from '@/layout';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Victor Balogun Portfolio - Frontend Developer</title>
      </Head>
      <main>
        <Layout>
          <Button variant="primary">Learn more</Button>
          <h2>Girloy TEXT Italics</h2>
          <p>I&apos;m a frontend developer</p>
        </Layout>
      </main>
    </>
  );
}

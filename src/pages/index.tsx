import { Inter } from '@next/font/google';
import Head from 'next/head';

import { Button } from '@/components/Button/Button';
import Layout from '@/Layout';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Victor Balogun Portfolio - Frontend Developer</title>
      </Head>
      <main>
        <Layout>
          <Button size="md" variant="primary">
            Learn more
          </Button>
        </Layout>
      </main>
    </>
  );
}

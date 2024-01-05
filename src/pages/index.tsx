import { ReactElement } from 'react';
import Head from 'next/head';

import { Layout } from '@/layout';

import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Victor Balogun Portfolio - Frontend Developer</title>
      </Head>
      <main>
        <h1>Victor Balogun Portfolio - Frontend Developer</h1>
      </main>
    </>
  );
};

Home.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Home;

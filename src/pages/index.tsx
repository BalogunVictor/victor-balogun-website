import { useState } from 'react';
import { Inter } from '@next/font/google';
import Head from 'next/head';

import { Button } from '@/components/Button/Button';
import { FadeInStagger } from '@/components/FadeIn';
import Navigation from '@/components/Navigation/Navigation';
import Layout from '@/layout';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [expanded, setExpanded] = useState(false);

  const handleExpanded = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <>
      <Head>
        <title>Victor Balogun Portfolio - Frontend Developer</title>
      </Head>
      <main>
        <Layout>
          <h1>testing</h1>
        </Layout>
      </main>
      x
    </>
  );
}

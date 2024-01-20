import React from 'react';
import Head from 'next/head';

import { Container } from '@/components/Container';
import { PageIntro } from '@/components/PageIntro';

const about = () => {
  return (
    <>
      <Head>
        <title>Victor Balogun Portfolio - Software Developer</title>
      </Head>
      <Container className="mt-16 max-w-6xl sm:mt-32">
        <PageIntro eyebrow="About me" title="I'm Idris Agboola">
          <p>
            I love using my skill set to simplify work for enterprises.I also
            like sharing content related to the stuff that I have learned over a
            long time in software development so it can offer assistance to
            other individuals in the Dev Community.
          </p>
        </PageIntro>{' '}
      </Container>
    </>
  );
};

export default about;

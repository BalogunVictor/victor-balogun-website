import React, { ReactElement } from 'react';
import Head from 'next/head';

import Card from '@/components/card';
import { Container } from '@/components/Container';
import { FadeIn } from '@/components/FadeIn';
import { PageIntro } from '@/components/PageIntro';
import { Layout } from '@/layout/Layout';

import { NextPageWithLayout } from './_app';

const Portfolio = [
  {
    description: `An e-commerce application.
   Showcasing Tech Solutions Services rendered, along side products which are available to customers`,
    image: '/oneflareSolution.png',
    title: 'Oneflare Tech Solution',
    url: 'https://www.oneflaretechsolutions.com/',
  },
  {
    description: `An inventory application, That keeps track of sales,Transaction and Expenses e.t.c`,
    image: '/oneflarePos.png',
    title: 'Oneflare Pos',
    url: 'https://pos.oneflaretech.com/',
  },
];

const Works: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Victor Balogun Works - Software Developer</title>
      </Head>
      <Container>
        <FadeIn>
          <Container>
            <PageIntro
              eyebrow="Works"
              title="My journey in the realm of Software Development">
              <p>
                My works provides an overview of projects that I have worked on,
                to get a glimpse of my professional journey.
              </p>
            </PageIntro>
            <Container className="py-24">
              <FadeIn>
                {Portfolio.map((portfolio, index) => (
                  <Card
                    description={portfolio.description}
                    key={index}
                    src={portfolio.image}
                    title={portfolio.title}
                    url={portfolio.url}
                  />
                ))}
              </FadeIn>
            </Container>
          </Container>
        </FadeIn>
      </Container>
    </>
  );
};

Works.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Works;

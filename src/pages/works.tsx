import React, { ReactElement } from 'react';

import Card from '@/components/card';
import { Container } from '@/components/Container';
import { FadeIn } from '@/components/FadeIn';
import { PageIntro } from '@/components/PageIntro';
import { Layout } from '@/layout';

const Portfolio = [
  {
    description: `An e-commerce application.
   Showcasing Tech Solutions Services rendered, along side products which are available to customers`,
    image: '/oneflareSolution.png',
    title: 'Oneflare Tech Solution',
    url: 'https://www.oneflaretechsolutions.com/',
  },
  {
    description: `An inventory application.
   keeping track of sales,`,
    image: '/oneflarePos.png',
    title: 'Oneflare Pos',
    url: 'https://pos.oneflaretech.com/',
  },
];

const Works = () => {
  return (
    <>
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
              {Portfolio.map((portfolio, index) => (
                <Card
                  description={portfolio.description}
                  key={index}
                  src={portfolio.image}
                  title={portfolio.title}
                  url={portfolio.url}
                />
              ))}
            </Container>
          </Container>
        </FadeIn>
      </Container>
    </>
  );
};

Works.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Works;

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
    description: `This e-commerce application serves as a 
    comprehensive platform showcasing the array of tech solutions offered by Oneflare Tech Solutions. 
    It seamlessly integrates services provided with available products, 
    catering to the diverse needs of our customers.`,
    image: '/oneflareSolution.png',
    title: 'Oneflare Tech Solution',
    url: 'https://www.oneflaretechsolutions.com/',
  },
  {
    description: `Our inventory application stands as a sophisticated 
    system meticulously designed to manage sales, transactions, expenses, and more. 
    It offers a streamlined approach to inventory management, ensuring efficiency and
     accuracy in tracking various aspects of business operations.`,
    image: '/oneflarePos.png',
    title: 'Oneflare Pos',
    url: 'https://pos.oneflaretech.com/',
  },
  {
    description: `A robust MERN stack application 
    dedicated to authentication processes. 
    This personal project encompasses essential authentication features such as protected routes, 
    password management functionalities like forgot and reset password options, 
    seamless login and signup processes, all complemented with meticulous error handling for an unparalleled user experience.
`,
    image: '/auth.png',
    title: 'Authentication App',
    url: 'https://login-app-frontend-peach.vercel.app/',
  },
  {
    description: `This E-commerce application, akin to Shopify, is built using ReactJS and encompasses a comprehensive suite of features:

Seamless registration and login processes, augmented with Google authentication.
Intuitive navigation facilitating smooth transitions between categories and products.
Efficient shopping cart management system to enhance user experience.
Implementation of secure payment gateways for seamless transactions.
Through the development of this project, I delved deeply into various facets of web application development using React and Redux, gaining valuable insights and honing my skills in crafting robust digital solutions.
`,
    image: '/royalClothing.png',
    title: 'Royal Clothing App',
    url: 'https://live-royal-clothing.netlify.app/',
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

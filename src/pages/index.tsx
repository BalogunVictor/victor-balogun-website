import { ReactElement } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/Button/Button';
import { Container } from '@/components/Container';
import { FadeIn } from '@/components/FadeIn';
import { Layout } from '@/layout';

import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Victor Balogun Portfolio - Frontend Developer</title>
      </Head>
      <main>
        <FadeIn>
          <Container className="mt-24 sm:mt-40">
            <div className="flex flex-col items-center justify-center gap-5 sm:flex-row lg:gap-10">
              <Image
                alt="victorImage"
                height={500}
                src="/victor-balogun.png"
                width={250}
              />
              <div className="max-w-5xl">
                <h2 className="text-white">
                  {' '}
                  I’m a seasoned Software Engineer based in Lagos, Nigeria.
                </h2>
                <p className="py-6">
                  {' '}
                  I’m victor, I am experienced in developing secure and dynamic
                  applications. I love using my skill set to simplify work for
                  enterprises and improve the lives of people around me.
                </p>
                <Link href="/works">
                  <Button>Works</Button>
                </Link>
              </div>
            </div>
          </Container>
        </FadeIn>
      </main>
    </>
  );
};

Home.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Home;

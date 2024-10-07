import { ReactElement } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { landingImage } from '@/assets/images';
import { Button } from '@/components/Button/Button';
import { Container } from '@/components/Container';
import { FadeIn } from '@/components/FadeIn';
import { Layout } from '@/layout/Layout';

import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Victor Balogun Portfolio - Software Developer</title>
      </Head>
      <main>
        <FadeIn>
          <Container>
            <div className="mx-auto my-8 max-w-6xl">
              <div className="flex flex-wrap items-center justify-between">
                <div className="flex min-w-[300px] flex-1 items-center justify-center">
                  <Image
                    alt="image"
                    className="h-[350px] w-[350px] sm:h-[400px] sm:w-[450px]"
                    height={728}
                    src={landingImage}
                    width={603}
                  />
                </div>
                <div className="min-w-[300px] flex-1">
                  <h1 className="text-4xl">
                    Software Engineer
                    <br />
                    <span className="text-[#97979b]">
                      based in
                      <br /> Lagos, Nigeria.
                    </span>
                  </h1>
                  <div className="flex max-w-lg items-center justify-center gap-8 py-4">
                    <p>
                      I’m victor, I am experienced in developing secure and
                      dynamic applications. I love using my skill set to
                      simplify work for enterprises and improve the lives of
                      people around me.
                    </p>
                  </div>
                  <Link href="/projects">
                    <Button>Projects</Button>
                  </Link>
                </div>
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

import { ReactElement } from 'react';
import Head from 'next/head';

import { Container } from '@/components/Container';
import { FadeIn } from '@/components/FadeIn';
import { PageIntro } from '@/components/PageIntro';
import { PdfPreview } from '@/components/pdf-preview';
import { Layout } from '@/layout';

import { NextPageWithLayout } from './_app';

const resume_url = process.env.NEXT_PUBLIC_URL + '/VICTOR-BALOGUN-CV.pdf';

const Resume: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Victor Balogun Resume - Software Developer</title>
      </Head>
      <Container className="mt-16 sm:mt-32">
        <FadeIn>
          <Container>
            <PageIntro eyebrow="Resume" title="My resume reflects me.">
              <p>
                My resume provides a comprehensive overview of my skills,
                experience, and qualifications.
              </p>
            </PageIntro>
            <div className="mt-24 ">
              <PdfPreview src={resume_url} />
            </div>
          </Container>
        </FadeIn>
      </Container>
    </>
  );
};

Resume.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Resume;

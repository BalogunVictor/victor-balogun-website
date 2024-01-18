import { ReactElement } from 'react';

import { Container } from '@/components/Container';
import { PageIntro } from '@/components/PageIntro';
import { PdfPreview } from '@/components/pdf-preview';
import { Layout } from '@/layout';

const resume_url = process.env.NEXT_PUBLIC_URL + '/VICTOR-BALOGUN-CV.pdf';

const Resume = () => {
  return (
    <>
      <Container className="mt-16 sm:mt-32">
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
    </>
  );
};

Resume.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Resume;

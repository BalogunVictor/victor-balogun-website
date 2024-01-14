import { ReactElement } from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
// Import the main component
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import { Container } from '@/components/Container';
import { PageIntro } from '@/components/PageIntro';
import { Layout } from '@/layout';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// style={{ height: '750px',  width: '750px'}}

const Resume = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <PageIntro eyebrow="Resume" title="My resume reflects me.">
          <p>
            My resume provides a comprehensive overview of my skills,
            experience, and qualifications.
          </p>
        </PageIntro>
      </Container>
    </>
  );
};

Resume.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Resume;

import { ReactElement, useState } from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
// Import the main component
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import { Button } from '@/components/Button/Button';
import { Container } from '@/components/Container';
import { Modal } from '@/components/modal';
import { PageIntro } from '@/components/PageIntro';
import { Layout } from '@/layout';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// style={{ height: '750px',  width: '750px'}}

const Resume = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <PageIntro eyebrow="Resume" title="My resume reflects me.">
          <p>
            My resume provides a comprehensive overview of my skills,
            experience, and qualifications.
          </p>
        </PageIntro>
        <Modal
          onClose={() => setOpenModal(false)}
          open={openModal}
          title="Share my resume">
          <h1>Testing Modal</h1>
        </Modal>
        <Button onClick={() => setOpenModal(true)}>modal</Button>
      </Container>
    </>
  );
};

Resume.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Resume;

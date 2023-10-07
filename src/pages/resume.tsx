import { Viewer, Worker } from '@react-pdf-viewer/core';
// Import the main component
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import Layout from '@/Layout';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// style={{ height: '750px',  width: '750px'}}

const resume = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-16">
        <h1>Resumé</h1>

        <div className="h-[750px] w-[750px]">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
            <Viewer
              fileUrl="/assets/resume/VICTOR BALOGUN-CV.pdf"
              plugins={[defaultLayoutPluginInstance]}
            />
          </Worker>
        </div>
      </div>
    </Layout>
  );
};

export default resume;

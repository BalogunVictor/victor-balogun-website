import style from "../styles/title.module.scss";
import { Worker } from "@react-pdf-viewer/core";
// Import the main component
import { Viewer } from "@react-pdf-viewer/core";
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import Layout from "@/Layout";

// style={{ height: '750px',  width: '750px'}}

const resume = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <Layout>
      <div className="py-16 flex flex-col justify-center items-center">
        <h1 className={style.Title}>Resumé</h1>

        <div className="w-[750px] h-[750px]">
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

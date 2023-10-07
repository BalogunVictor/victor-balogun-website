import type { AppProps } from 'next/app';
import NextProgress from 'nextjs-progressbar';

// Import the styles provided by the react-pdf-viewer packages
import '@/styles/globals.css';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextProgress color="#0d9488" options={{ showSpinner: false }} />
      <Component {...pageProps} />
    </>
  );
}

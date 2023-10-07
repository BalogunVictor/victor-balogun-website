import { Toaster } from 'react-hot-toast';
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
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          error: {
            className: '!bg-rose-700 w-82 text-sm font-bold !text-white',
          },
          success: {
            className: '!bg-lime-900 w-82 text-sm font-bold !text-white',
          },
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

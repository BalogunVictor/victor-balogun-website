import { ReactElement, ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import NextProgress from 'nextjs-progressbar';

// Import the styles provided by the react-pdf-viewer packages
import '@/styles/globals.css';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <NextProgress color="#fff" options={{ showSpinner: false }} />
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
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

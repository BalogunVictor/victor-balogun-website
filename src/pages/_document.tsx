import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          content="Balogun Moyinoluwa - A skilled software developer based in Lagos, Nigeria with expertise in React, Typescript, Nextjs, Javascript, and Tailwindcss.Check out my portfolio to see my latest projects."
          name="description"
        />
        <meta
          content="best software developer, best javascript developer, frontend developer, best react developer, best software developer portfolio, HTML, CSS, Javascript, React, Tailwindcss, web developer porfolio"
          name="keywords"
        />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="/favicon.ico" rel="icon" />

        <meta content="Victor Balogun - Portfolio" property="og:title" />
        <meta content="article" property="og:type" />
        <meta
          content="Victor Balogun - A skilled software developer based in Lagos, Nigeria with expertise in React, Typescript, Nextjs, Javascript, and Tailwindcss.Check out my portfolio to see my latest projects."
          property="og:description"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

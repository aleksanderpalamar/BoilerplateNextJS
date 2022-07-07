import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,700;1,300;1,900&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="logo.svg" type="image/svg" />
          <link rel="apple-touch-icon" href="/logo.svg"></link>
          <meta name="theme-color" content="#8257e5" />
          <meta
            name="description"
            content="NextJS Boilerplate with Chakra UI"
          />
          <meta
            name="keywords"
            content="Boilerplate, NextJS, Chakra UI, React, Next.js, Next, NextJS, NextJS Boilerplate, NextJS Boilerplate with Chakra UI, NextJS Boilerplate with Chakra UI Next, NextJS Boilerplate with Chakra UI Next.js, NextJS Boilerplate with Chakra UI Next.js Boilerplate, NextJS Boilerplate with Chakra UI Next.js Boilerplate with Chakra UI"
          />
          <meta name="author" content="Palamar" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Aleksander Palamar" />
          <meta
            property="og:description"
            content="NextJS Boilerplate with Chakra UI"
          />
          <meta
            property="og:image"
            content="https://boilerplate.vercel.app/images/vscode.png"
          />
          <meta
            property="og:url"
            content="https://boilerplate.vercel.app/"
          />
          <meta property="og:site_name" content="Web developer" />
          <meta property="og:locale" content="pt_BR" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

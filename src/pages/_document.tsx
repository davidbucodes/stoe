import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <style>
          {`
          html,
          body,
          #__next {
            height: 100%;
            width: 100%;
            max-height: 100%;
            max-width: 100%;
            margin: 0;
            display: flex;
            flex-grow: 1;
            overflow: hidden;
          }
            `}
        </style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

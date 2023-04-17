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
            min-height: 100%;
            min-width: 100%;
            margin: 0;
            display: flex;
            flex: 1;
            flex-grow: 1;
            overflow: hidden;
          }

          ::-webkit-scrollbar {
            width: 0.7em;
          }
           
          ::-webkit-scrollbar-track {
            box-shadow: inset 0 0 0.1em rgba(0, 0, 0, 0.3);
            border-radius: 10px;
          }
           
          ::-webkit-scrollbar-thumb {
            background-color: lightgrey;
            outline: 1px solid darkgray;
            border-radius: 10px;
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

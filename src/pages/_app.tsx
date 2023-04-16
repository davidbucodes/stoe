import Layout from "@component/components/layout";
import { store } from "@component/store/store";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

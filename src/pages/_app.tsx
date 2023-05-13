import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyle from '@/styles/global';
import theme from '@/styles/theme';

import { ThemeProvider } from 'styled-components';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>title</title>
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;

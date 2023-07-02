import Layout from '@/components/layout';
import ClientOnly from '@/components/layout/clientOnly';
import { ChakraProvider } from '@chakra-ui/react';
// import '@fontsource/josefin-sans/700.css';
import { AppProps } from 'next/app';


const App = ({ Component, pageProps }: AppProps) => {
  return (
      <ChakraProvider>
        <ClientOnly>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ClientOnly>
      </ChakraProvider>
  );
};

export default App;

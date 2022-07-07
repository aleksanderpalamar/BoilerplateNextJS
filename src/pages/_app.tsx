import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { Header } from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header 
        title="Boilerplate Next.js with Chakra UI"        
        img="/logo.svg"
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

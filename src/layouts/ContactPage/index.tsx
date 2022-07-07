import { Box } from "@chakra-ui/react";
import Head from "next/head";

interface ContactPageProps {
  children: React.ReactNode;
}

export default function Contact({ children }: ContactPageProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <Box minH="100vh" display="flex" flexDirection="row" alignItems="center">
        <Box
          w="full"
          maxW="1100px"
          display={["block", "flex"]}
          padding={["4", "0"]}
          alignItems="center"
          justifyContent="space-between"         
          mx="auto"
          gap="20"
        >
          {children}
        </Box>          
      </Box>
    </>
  );
}

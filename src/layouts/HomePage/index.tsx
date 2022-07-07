import { Box, Container, Img } from "@chakra-ui/react";
import Head from "next/head";
import { GithubLogo } from "phosphor-react";
import { Button } from "../../components/Button";

interface HomePageProps {
  children: React.ReactNode;
  img?: string;
  title: string;
  alt?: string;
}

export default function HomePage({ children, img, title, alt }: HomePageProps ): JSX.Element {
  return (
    <>
      <Head>
        <title>NextJS Boilerplate with Chakra UI</title>
      </Head>      
      <Box
        minH="100vh"
        display="flex"        
        flexDirection="column"
        alignItems="center"
      >
        <Box
          w="full"
          maxW="1100px"
          display={["block", "flex"]}
          padding={["4", "0"]}
          alignItems="center"
          justifyContent="space-between"
          mt={["5", "20"]}
          mx="auto"
        >
          {children}
          <Button title="Github" icon={<GithubLogo size="24" />} url="https://github.com/sponsors/aleksanderpalamar"/>          
        </Box>
        <Img src={img} mt="20" title={title} alt={title}/>
      </Box>
    </>
  );
}

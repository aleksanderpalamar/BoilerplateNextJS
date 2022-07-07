import Head from "next/head";
import { Text } from "@chakra-ui/react";

import AboutPage from "../../layouts/AboutPage";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <AboutPage src="https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80">
        <Text as="h1" fontSize="3xl" fontWeight="bold">
          About
          <Text as="p" fontSize="lg" fontWeight="normal" color="gray.300">
            lore ipsum dolor sit amet consectetur adipisicing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </Text>
      </AboutPage>      
    </>
  );
}

import { Box, Img, Text } from "@chakra-ui/react";
import { Contato } from "../../components/FormContact";

import ContactPage from "../../layouts/ContactPage";

export default function Contact() {
  return (
    <>
      <ContactPage>        
        <Img
          src="https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80"
          w="100%"
          h="calc(4rem + 60px)"
          borderRadius={4}
          objectFit="cover"
          objectPosition="center"
          alt="Profile image"
        />
        <Contato />
      </ContactPage>
    </>
  );
}

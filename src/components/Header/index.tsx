import { Box, Img, Text } from "@chakra-ui/react";
import { Navbar } from "../Navbar";

interface HeaderProps {
  title?: string;
  img?: string;
}

export function Header(props: HeaderProps) {
  return (
    <Box
      as="header"
      w="full"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderBottom="1px solid #202024"
    >
      {props && (
        <>
          <Text
            as="h1"            
            fontSize={["sm", "md"]}
            fontWeight="bold"
            display="flex"
            gap="2"            
            alignItems="center"
            padding="4"
          >
            {props.img && <Img src={props.img} h="2.5rem" title={props.title} alt="Logotipo" />}
            {props.title}
          </Text>          
        </>
      )}
      <Navbar />
    </Box>
  );
}

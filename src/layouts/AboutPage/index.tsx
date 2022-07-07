import { Box, Img } from "@chakra-ui/react";

export interface AboutPageProps {
  children: React.ReactNode;  
  src?: string;
}

export default function AboutPage({ children, src }: AboutPageProps) {
  return (
    <>
      <Box
        minH="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt="20"
      >
        <Box
          w="full"
          maxW="1100px"
          display={["block", "flex"]}
          padding={["4", "0"]}
          alignItems="flex-start"
          justifyContent="space-between"
          mt={["5", "20"]}
          mx="auto"
          gap="20"
        >
          {children}
          <Box
            display="flex"
            flexDirection="column"
            mt={["2", "0"]}
            alignItems="center"
          >
            <Img
              src={src}
              borderRadius={8}
              border="4px solid #202024"
              outline="2px solid #8257e5"
              objectFit="cover"
              alt="image"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}

import { Box } from "@chakra-ui/react";

export function NavbarContainer(props: React.PropsWithChildren<{}>) {
  return (
    <Box
      as="nav"
      position="relative"
      display="flex"
      alignItems="center"
      borderLeft="1px solid #202024"
      gap="2"
      ml="auto"           
    >
      {props.children}
    </Box>
  );
}
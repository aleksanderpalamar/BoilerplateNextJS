import { Box } from "@chakra-ui/react";

export function NavbarItem(props: React.PropsWithChildren<{}>) {
  return (
    <Box
      as="li"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px="4"
      py="1"
      gap="2"      
      {...props}
    >
      {props.children}
    </Box>
  );
}
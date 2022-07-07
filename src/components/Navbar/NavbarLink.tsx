import { Box } from "@chakra-ui/react";

interface NavbarLinkProps {
  href: string;
}

export function NavbarLink(
  props: React.PropsWithChildren<{
    href: NavbarLinkProps["href"];
  }>
) {
  return (
    <Box
      as="a"
      _hover={{
        color: "purple.500",
        filter: "brightness(0.8)",
        transition: "all 0.4s ease-in-out",
      }}
      _active={{
        color: "purple.500",
        filter: "brightness(0.8)",
        transition: "all 0.4s ease-in-out",
      }}
      _focus={{
        color: "purple.500",
        filter: "brightness(0.8)",
        transition: "all 0.4s ease-in-out",
      }}
      {...props}
    >
      {props.children}
    </Box>
  );
}

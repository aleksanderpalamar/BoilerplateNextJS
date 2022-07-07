import { Box } from "@chakra-ui/react";

interface ButtonProps {  
  onClick?: () => void;
  title: string;
  icon?: React.ReactElement;
  url?: string;
}

export function Button({ title, icon, url }: ButtonProps): JSX.Element {
  function handleClick() {    
    window.open(`${url}`);
  }

  return (
    <Box
      as="button"
      type="button"
      padding="4"      
      mt={["4", "0"]}
      onClick={handleClick}
      color="purple.500"
      rounded="sm"
      outline="1px solid #8257e5"
      gap="2"
      display="flex"
      _hover={{
        bg: "purple.500",
        color: "gray.900",
        transition: "all 0.2s ease-in-out",
      }}      
    >      
      {icon && <Box>{icon}</Box>}
      {title}
    </Box>
  );
}

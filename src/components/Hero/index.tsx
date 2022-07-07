import { Text } from "@chakra-ui/react";

interface HeroProps {
  alt?: string;
  h1?: string;
  h2?: string;
  span?: string;
  img?: string;
}

export function Hero(props: HeroProps) {
  return (
    <Text as="h1" fontSize="3xl" fontWeight="bold" display="block" gap="2" title={props.alt}>
      {props.h1}{" "}
      <Text as="span" color="purple.500" display="flex" gap="2">
        {props.h2}{" "}
        <Text as="span" color="purple.500">
          {props.span}
        </Text>
      </Text>
    </Text>
  );
}

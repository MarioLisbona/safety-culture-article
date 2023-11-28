import { Flex, Image } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex w={"100%"} direction={"column"}>
      <Flex
        w={"100%"}
        h={"200px"}
        justify={"center"}
        align={"center"}
        borderTop={"1px solid gray"}
      >
        <Flex
          justify={"center"}
          align={"center"}
          border={"1px solid black"}
          borderRadius={12}
          px={4}
          py={6}
        >
          <Image
            src={"logos/sc-logo-color.svg"}
            alt="SafetyCulture Logo"
            h={"30px"}
            px={2}
          />
          <Image
            src={"logos/app-store.svg"}
            alt="SafetyCulture Logo"
            h={"30px"}
            px={2}
          />
          <Image
            src={"logos/google-play-store.svg"}
            alt="SafetyCulture Logo"
            h={"30px"}
            px={2}
          />
        </Flex>
      </Flex>
      <Flex
        w={"100%"}
        h={"100px"}
        justify={"space-around"}
        align={"center"}
        borderTop={"1px solid gray"}
        bg={"red"}
      >
        <Flex></Flex>
        <Flex></Flex>
      </Flex>
    </Flex>
  );
}

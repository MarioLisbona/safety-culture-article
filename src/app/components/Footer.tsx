import { Flex } from "@chakra-ui/react";
import React from "react";

export default function Footer() {
  return (
    <Flex w={"100%"} direction={"column"}>
      <Flex
        w={"100%"}
        h={"200px"}
        justify={"center"}
        align={"center"}
        borderTop={"1px solid gray"}
        bg={"grey"}
      >
        <Flex></Flex>
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

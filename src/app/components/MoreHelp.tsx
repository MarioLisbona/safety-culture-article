import React from "react";
import CardComponent from "./CardComponent";
import { Button, Flex, Text } from "@chakra-ui/react";

export default function MoreHelp() {
  return (
    <CardComponent border="2px solid" borderColor="link">
      <Flex w={"100%"} justify={"center"} align={"center"} direction={"column"}>
        <Flex w={"100%"} justify={"flex-start"} align={"center"} pb={4}>
          <Text textStyle={"smHeading"}>Need More Help?</Text>
        </Flex>
        <Flex w={"100%"} justify={"flex-start"} align={"center"}>
          <Button variant={"cardBtnPurple"}>Live Chat</Button>
          <Button variant={"cardBtnPurple"}>Email</Button>
          <Button variant={"cardBtnPurple"}>Phone</Button>
          <Button variant={"cardBtnClear"}>Ask the community</Button>
        </Flex>
      </Flex>
    </CardComponent>
  );
}

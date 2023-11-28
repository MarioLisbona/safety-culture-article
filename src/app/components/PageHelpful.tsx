import React from "react";
import CardComponent from "./CardComponent";
import { Button, Flex, Text } from "@chakra-ui/react";
import { MdOutlineThumbDownOffAlt } from "react-icons/md";
import { MdOutlineThumbUpOffAlt } from "react-icons/md";
import Link from "next/link";

export default function PageHelpful() {
  return (
    <CardComponent bg="purple" w={"75%"}>
      <Flex justify={"center"} align={"center"}>
        <Text textStyle={"body"}>{`Was this page helpful? {US}`}</Text>
        <Link href={"#"}>
          <Button variant={"navBtnWhite"}>
            <MdOutlineThumbUpOffAlt />
            <Text px={1} textStyle={"body"} color={"link"}>{`Yes {US}`}</Text>
          </Button>
        </Link>
        <Link href={"#"}>
          <Button variant={"navBtnWhite"}>
            <Text px={1} textStyle={"body"} color={"link"}>{`No {US}`}</Text>
            <MdOutlineThumbDownOffAlt />
          </Button>
        </Link>
        <Link href={"#"}>
          <Button variant={"navBtnClear"}>
            <Text
              textStyle={"smHeading"}
              color={"link"}
            >{`Contact us {US}`}</Text>
          </Button>
        </Link>
      </Flex>
    </CardComponent>
  );
}

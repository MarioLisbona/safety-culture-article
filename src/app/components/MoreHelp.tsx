import React from "react";
import CardComponent from "./CardComponent";
import { Button, Flex, Text } from "@chakra-ui/react";

import { BsChatLeft } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { GoPeople } from "react-icons/go";
import Link from "next/link";

export default function MoreHelp() {
  return (
    <CardComponent border="2px solid" borderColor="link">
      <Flex w={"100%"} justify={"center"} align={"center"} direction={"column"}>
        <Flex w={"100%"} justify={"flex-start"} align={"center"} pb={4}>
          <Text textStyle={"smHeading"}>Need More Help?</Text>
        </Flex>
        <Flex w={"100%"} justify={"flex-start"} align={"center"}>
          <Link href={"#"}>
            <Flex justify={"center"} align={"center"}>
              <Button variant={"cardBtnPurple"}>
                <BsChatLeft />
                <Text textStyle={"body"} color={"white"} ms={2}>
                  Live Chat
                </Text>
              </Button>
            </Flex>
          </Link>
          <Link href={"#"}>
            <Flex justify={"center"} align={"center"}>
              <Button variant={"cardBtnPurple"}>
                <MdOutlineMailOutline />
                <Text textStyle={"body"} color={"white"} ms={2}>
                  Email
                </Text>
              </Button>
            </Flex>
          </Link>
          <Link href={"#"}>
            <Flex justify={"center"} align={"center"}>
              <Button variant={"cardBtnPurple"}>
                <FiPhone />
                <Text textStyle={"body"} color={"white"} ms={2}>
                  Phone
                </Text>
              </Button>
            </Flex>
          </Link>
          <Link href={"#"}>
            <Flex justify={"center"} align={"center"}>
              <Button variant={"cardBtnClear"}>
                <GoPeople />
                <Text textStyle={"body"} color={"link"} ms={2}>
                  Ask the community
                </Text>
              </Button>
            </Flex>
          </Link>
        </Flex>
      </Flex>
    </CardComponent>
  );
}
"use client";
import { Text, Flex, GridItem, Icon, IconButton } from "@chakra-ui/react";
import Link from "next/link";
import { IoMdHome } from "react-icons/io";

const breadCrumbs = [
  { page: "SafetyCulture Knowledge Base", href: "#", active: false },
  { page: "Using SafetyCulture", href: "#", active: false },
  { page: "Actions", href: "#", active: false },
  { page: "Assign actions to users and groups", href: "#", active: true },
];

export default function BreadCrumb() {
  return (
    <Flex justify={"flex-start"} align={"center"} pb={8}>
      <Icon as={IoMdHome} color={"gray"} me={2} />
      {breadCrumbs.map((item, idx) => (
        <Link key={idx} href={item.href}>
          <Text textStyle={item.active ? "breadCrumbActive" : "breadCrumb"}>
            {`${item.page}  /  `}
          </Text>
        </Link>
      ))}
    </Flex>
  );
}

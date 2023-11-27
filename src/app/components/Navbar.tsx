import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import scLogo from "@/logos/sc-logo-color.svg";

export default function Navbar() {
  return (
    <Flex
      display={{ base: "none", sm: "flex" }}
      align={"center"}
      height={4}
      justify={"space-around"}
      bg={"purple"}
      p={"3rem"}
    >
      <Link href={"/"}>
        <Flex w={"200px"} height={"40px"}>
          <Image src={scLogo} alt="SafetyCulture Logo" />
        </Flex>
      </Link>
    </Flex>
  );
}

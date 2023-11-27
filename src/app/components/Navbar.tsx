import {
  Flex,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import scLogo from "@/logos/sc-logo-color.svg";
import { CiSearch } from "react-icons/ci";
import { TfiWorld } from "react-icons/tfi";
import { HiOutlineChevronDown } from "react-icons/hi";
import { IoIosLogIn } from "react-icons/io";

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
      <InputGroup w={"30%"} bg={"white"} size={"lg"}>
        <Input placeholder="Search anything...(e.g. devices)" />
        <InputRightElement>
          <Link href={"#"}>
            <CiSearch />
          </Link>
        </InputRightElement>
      </InputGroup>
      <Flex justify={"center"} align={"center"}>
        <Flex justify={"center"} align={"center"}>
          <TfiWorld />
          <Button variant={"navBtnclear"} p={1}>
            English US
          </Button>
          <HiOutlineChevronDown />
        </Flex>
        <Button variant={"navBtnWhite"}>
          <IoIosLogIn />
          <Text ms={2}>Login</Text>
        </Button>
        <Button>Contact Us</Button>
      </Flex>
    </Flex>
  );
}

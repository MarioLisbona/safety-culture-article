import {
  Flex,
  InputGroup,
  Input,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import scLogo from "@/logos/sc-logo-color.svg";
import { CiSearch } from "react-icons/ci";

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
        <Button>English US</Button>
        <Button>Login</Button>
        <Button>Contact Us</Button>
      </Flex>
    </Flex>
  );
}

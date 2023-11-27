"use client";
import {
  Flex,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Text,
  useBreakpointValue,
  Box,
  Stack,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import scLogo from "@/logos/sc-logo-color.svg";
import { CiSearch } from "react-icons/ci";
import { TfiWorld } from "react-icons/tfi";
import { HiOutlineChevronDown } from "react-icons/hi";
import { IoIosLogIn } from "react-icons/io";

export default function Navbar() {
  const searchBarPlaceHolder = useBreakpointValue({
    base: "Search",
    lg: "Search anything...(e.g. devices)",
  });
  return (
    <>
      <Flex
        display={{ base: "none", sm: "flex" }}
        align={"center"}
        height={4}
        justify={"space-around"}
        bg={"purple"}
        p={"3rem"}
      >
        {/* Desktop Navbar */}
        <Link href={"/"}>
          <Flex w={"200px"} height={"40px"}>
            <Image src={scLogo} alt="SafetyCulture Logo" />
          </Flex>
        </Link>
        <InputGroup w={"30%"} bg={"white"} size={"lg"}>
          <Input placeholder={searchBarPlaceHolder} />
          <InputRightElement>
            <Link href={"#"}>
              <CiSearch />
            </Link>
          </InputRightElement>
        </InputGroup>
        <Flex justify={"center"} align={"center"}>
          <Link href={"#"}>
            <Flex justify={"center"} align={"center"}>
              <TfiWorld />
              <Button variant={"navBtnclear"} p={1}>
                English US
              </Button>
              <HiOutlineChevronDown />
            </Flex>
          </Link>
          <Link href={"#"}>
            <Button variant={"navBtnWhite"}>
              <IoIosLogIn />
              <Text ms={2}>Login</Text>
            </Button>
          </Link>
          <Link href={"#"}>
            <Button variant={"navBtnPurple"}>Contact Us</Button>
          </Link>
        </Flex>
      </Flex>

      {/* Mobile Navbar */}
      <Box display={{ base: "flex", md: "none" }}>
        <Stack w={"100%"} as={"nav"}>
          <Flex
            bg={"purple"}
            justify={"space-between"}
            align={"center"}
            py={2}
            px={4}
            borderBottom={"1px solid lightgray"}
            h={"50px"}
          ></Flex>
        </Stack>
      </Box>
    </>
  );
}

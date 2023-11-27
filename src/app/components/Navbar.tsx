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
  IconButton,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import scLogo from "@/logos/sc-logo-color.svg";
import { CiSearch } from "react-icons/ci";
import { TfiWorld } from "react-icons/tfi";
import { HiOutlineChevronDown } from "react-icons/hi";
import { IoIosLogIn } from "react-icons/io";
import { data } from "../data/articleData";

export default function Navbar() {
  const mobileMenu = data.pageProps.mobileMenu;
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
      <Box pb={2} display={{ base: "flex", sm: "none" }}>
        <Stack w={"100%"} as="nav" spacing={0}>
          <Flex
            bg={"purple"}
            justify={"space-between"}
            align={"center"}
            py={2}
            px={4}
            borderBottom={"1px solid lightgray"}
          >
            <Link href={"#"}>
              <Flex w={"100px"} height={"20px"}>
                <Image src={scLogo} alt="SafetfyCulture logo" />
              </Flex>
            </Link>
            <Flex justify={"center"} align={"center"}>
              <Link href={"#"}>
                <IconButton aria-label="Search database" icon={<CiSearch />} />
              </Link>
            </Flex>
          </Flex>
          {/* mapping over JSON for mobile menu options */}
          {mobileMenu.map((item, idx) => (
            <Link key={idx} href={`/${item.slug}`}>
              <Flex
                justify={"flex-start"}
                align={"center"}
                py={2}
                px={4}
                bg={"purple"}
              >
                {item.title}
              </Flex>
            </Link>
          ))}
        </Stack>
      </Box>
    </>
  );
}

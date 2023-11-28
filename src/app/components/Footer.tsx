import { Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

const footerLinks = [
  { page: "Status", href: "/status", active: false },
  { page: "Privacy SafetyCulture", href: "/privacy", active: false },
  { page: "Terms and Conditions", href: "/tac", active: false },
  { page: "Security", href: "/security", active: false },
];

export default function Footer() {
  return (
    <Flex w={"100%"} direction={"column"}>
      <Flex
        w={"100%"}
        h={"200px"}
        justify={"center"}
        align={"center"}
        borderTop={"1px solid gray"}
      >
        <Flex
          justify={"center"}
          align={"center"}
          border={"1px solid black"}
          borderRadius={12}
          px={4}
          py={6}
        >
          <Image
            src={"logos/sc-logo-color.svg"}
            alt="SafetyCulture Logo"
            h={"30px"}
            px={2}
          />
          <Image
            src={"logos/app-store.svg"}
            alt="SafetyCulture Logo"
            h={"30px"}
            px={2}
          />
          <Image
            src={"logos/google-play-store.svg"}
            alt="SafetyCulture Logo"
            h={"30px"}
            px={2}
          />
        </Flex>
      </Flex>
      <Flex
        w={"100%"}
        h={"100px"}
        justify={"space-around"}
        align={"center"}
        bg={"purple"}
      >
        <Flex>
          {footerLinks.map((item, idx) => (
            <Link key={idx} href={item.href}>
              <Flex borderRight={"1px solid black"}>
                <Text textStyle={"body"} px={4}>
                  {item.page}
                </Text>
              </Flex>
            </Link>
          ))}
          <Text px={4} textStyle={"body"}>
            &copy; SafetyCulture 2023
          </Text>
        </Flex>
        <Flex justify={"center"} align={"center"}>
          <Link href={"#"}>
            <Image src="icons/instagram.svg" alt="instagram logo" px={1} />
          </Link>
          <Link href={"#"}>
            <Image src="icons/twitter.svg" alt="twitter logo" px={1} />
          </Link>
          <Link href={"#"}>
            <Image src="icons/linkedin.svg" alt="linkedin logo" px={1} />
          </Link>
          <Link href={"#"}>
            <Image src="icons/youtube.svg" alt="youtube logo" px={1} />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}

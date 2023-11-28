import { Flex } from "@chakra-ui/react";

export default function CardComponent({
  children,
  border,
  borderColor,
  bg,
}: {
  children: React.ReactNode;
  border?: string;
  borderColor?: string;
  bg?: string;
}) {
  return (
    <Flex
      justify={"center"}
      align={"center"}
      px={4}
      py={8}
      my={16}
      border={border ? border : "none"}
      borderColor={borderColor ? borderColor : "none"}
      bg={bg ? bg : "none"}
      borderRadius={12}
    >
      {children}
    </Flex>
  );
}

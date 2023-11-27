import { Button, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Text textStyle={"heading"} color={"link"}>
        This is some text testing the theme as a heading
      </Text>
      <Text textStyle={"body"} color={"link"}>
        This is some text testing the theme as a the body
      </Text>
      <Button variant={"navBtnClear"}>Click me</Button>
    </>
  );
}

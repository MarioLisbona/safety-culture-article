import { Button, Text } from "@chakra-ui/react";
import SectionContainer from "./components/SectionContainer";
import Article from "./components/Article";

export default function Home() {
  return (
    <>
      <Article />
      {/* <SectionContainer>
        <Text textStyle={"heading"}>
          This is some text testing the theme as a heading
        </Text>
        <Text textStyle={"body"}>
          This is some text testing the theme as a the body
        </Text>
        <Text textStyle={"link"}>
          This is some text testing the theme as a the body
        </Text>
        <Button variant={"navBtnClear"}>Click me</Button>
      </SectionContainer> */}
    </>
  );
}

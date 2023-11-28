import { Button, Text } from "@chakra-ui/react";
import SectionContainer from "./components/SectionContainer";
import Article from "./components/Article";
import { data } from "./data/articleData";
import { Content } from "next/font/google";

const fields = data.pageProps.items.content.map((item) => {
  return item.fields.body?.content.map((item) => {
    item.content.map((content) => {
      content.nodeType;
    });
  });
});

export default function Home() {
  console.log("fields", fields);
  return (
    <>
      <Article />
    </>
  );
}

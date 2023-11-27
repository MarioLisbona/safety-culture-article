import React from "react";
import SectionContainer from "./SectionContainer";
import { Grid, GridItem, Text } from "@chakra-ui/react";

export default function Article() {
  return (
    <SectionContainer>
      <article>
        <Grid templateColumns="repeat(4, 1fr)" gap={4}>
          <GridItem colSpan={3} bg="tomato">
            <Text textStyle={"heading"}>
              This is some text testing the theme as a heading
            </Text>
            <Text textStyle={"body"}>
              This is some text testing the theme as a the body
            </Text>
          </GridItem>
          <GridItem colStart={4} colEnd={4} bg="papayawhip">
            <Text textStyle={"link"}>
              This is some text testing the theme as a the body
            </Text>
          </GridItem>
        </Grid>
      </article>
    </SectionContainer>
  );
}

import React from "react";
import SectionContainer from "./SectionContainer";
import { Grid, GridItem, Text } from "@chakra-ui/react";
import BreadCrumb from "./BreadCrumb";
import MoreHelp from "./MoreHelp";
import PageHelpful from "./PageHelpful";

export default function Article() {
  return (
    <SectionContainer>
      <article>
        <BreadCrumb />
        <Grid templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap={4}>
          <GridItem colSpan={{ base: 1, md: 3 }}>
            <Text textStyle={"heading"}>
              This is some text testing the theme as a heading
            </Text>
            <Text textStyle={"body"}>
              This is some text testing the theme as a the body
            </Text>
            <MoreHelp />
            <PageHelpful />
          </GridItem>
          <GridItem colStart={{ base: 1, md: 4 }} colEnd={{ base: 1, md: 4 }}>
            <Text textStyle={"link"}>
              This is some text testing the theme as a the body
            </Text>
          </GridItem>
        </Grid>
      </article>
    </SectionContainer>
  );
}

import React from "react";
import SectionContainer from "./SectionContainer";
import {
  Button,
  Flex,
  Grid,
  GridItem,
  Text,
  List,
  ListItem,
} from "@chakra-ui/react";
import BreadCrumb from "./BreadCrumb";
import MoreHelp from "./MoreHelp";
import PageHelpful from "./PageHelpful";
import Link from "next/link";

export default function Article() {
  return (
    <SectionContainer>
      <article>
        <BreadCrumb />

        <Grid templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap={4}>
          <GridItem colSpan={{ base: 1, md: 3 }}>
            <Flex justify={"flex-start"} align={"center"} mb={10}>
              <Link href={"#"}>
                <Button variant={"actionBtn"}>Actions</Button>
              </Link>
              <Text display={"inline"} textStyle={"body"} color={"gray"}>
                Last updated:{" "}
              </Text>
              <Text display={"inline"} textStyle={"body"}>
                {" "}
                January 24, 2023
              </Text>
            </Flex>
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
            <Text textStyle={"smHeading"}>In this article</Text>
            <List>
              <Link href={"#"}>
                <ListItem py={3} ps={2}>
                  <Text textStyle={"link"}>
                    Why assign actions to users and groups?
                  </Text>
                </ListItem>
              </Link>
              <Link href={"#"}>
                <ListItem py={3} ps={2}>
                  <Text textStyle={"link"}>What you'll need</Text>
                </ListItem>
              </Link>
              <Link href={"#"}>
                <ListItem py={3} ps={2}>
                  <Text textStyle={"link"}>Take note</Text>
                </ListItem>
              </Link>
              <Link href={"#"}>
                <ListItem py={3} ps={2}>
                  <Text textStyle={"link"}>
                    Assign and action to users and groups
                  </Text>
                </ListItem>
              </Link>
            </List>
          </GridItem>
        </Grid>
      </article>
    </SectionContainer>
  );
}

"use client";
import { Box, Container, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

const SectionContainer = ({
  children,
  my,
  mt,
}: {
  children: React.ReactNode;
  my?: any;
  mt?: any;
}) => {
  const px = useBreakpointValue({
    base: "16px",
    sm: "20px",
    md: "30px",
    lg: "60px",
  });
  const py = useBreakpointValue({
    base: "5px",
    lg: "10px",
  });

  return (
    <Box w={"100wv"} px={px} py={py} mt={mt}>
      <Container maxW="1300px" p={"0"} my={my}>
        {children}
      </Container>
    </Box>
  );
};

export default SectionContainer;

import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const navBtnPurple = defineStyle({
  mx: "0.5",
  background: "link",
  color: "white",
  borderRadius: ".5rem",
});

export const appButton = defineStyleConfig({
  variants: {
    navBtnPurple,
  },
});

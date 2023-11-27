import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const navBtnPurple = defineStyle({
  mx: "0.5",
  background: "link",
  color: "white",
  borderRadius: ".5rem",
});

const navBtnWhite = defineStyle({
  mx: "0.5rem",
  background: "white",
  color: "link",
  borderRadius: ".5rem",
});

const navBtnClear = defineStyle({
  color: "text",
});

export const appButton = defineStyleConfig({
  variants: {
    navBtnPurple,
    navBtnWhite,
    navBtnClear,
  },
});

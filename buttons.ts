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

const cardBtnPurple = defineStyle({
  mx: "0.5",
  background: "link",
  color: "white",
  borderRadius: ".5rem",
  px: "4rem",
  py: "1rem",
});
const cardBtnClear = defineStyle({
  mx: "0.5",
  color: "link",
  borderRadius: ".5rem",
  px: "4rem",
  py: "1rem",
});
const actionBtn = defineStyle({
  me: "1rem",
  background: "white",
  color: "text",
  borderRadius: "5rem",
  border: "2px solid",
  borderColor: "link",
});

export const appButton = defineStyleConfig({
  variants: {
    navBtnPurple,
    navBtnWhite,
    navBtnClear,
    cardBtnPurple,
    cardBtnClear,
    actionBtn,
  },
});

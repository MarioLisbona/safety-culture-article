import { extendTheme } from "@chakra-ui/react";
import { appButton } from "./buttons";

const theme = extendTheme({
  colors: {
    link: "#6559FF",
    text: "#293745",
    grey: "#F3F6FB",
    purple: "#F0F0FF",
    white: "#FFFFFF",
  },
  components: { Button: appButton },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'NotoSans', sans-serif`,
  },
  textStyles: {
    heading: {
      fontFamily: "heading",
      fontSize: ["38px", "42px", "45px"],
    },
    body: {
      fontFamily: "body",
      fontSize: ["18px", "26px", "28px"],
    },
  },
});

export default theme;

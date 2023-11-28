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
      fontWeight: "700",
      lineHeight: "125%",
      color: "text",
    },
    body: {
      fontFamily: "body",
      fontSize: ["18px"],
      fontWeight: "400",
      color: "text",
    },
    smHeading: {
      fontFamily: "body",
      fontSize: ["18px"],
      fontWeight: "700",
      color: "text",
    },
    breadCrumbActive: {
      fontFamily: "body",
      fontSize: ["12px"],
      fontWeight: "200",
      color: "text",
    },
    breadCrumb: {
      fontFamily: "body",
      fontSize: ["12px"],
      fontWeight: "200",
      color: "gray",
    },
    link: {
      fontFamily: "body",
      fontSize: ["12px"],
      fontWeight: "200",
      color: "link",
    },
  },
});

export default theme;

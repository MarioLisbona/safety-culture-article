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
});

export default theme;

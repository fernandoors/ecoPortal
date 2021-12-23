import { css } from "@emotion/react";
import { primary } from "styles/colors";

export const styles = {
  navBar: css({
    background: primary,
    height: 50,
    display: "flex",
    alignSelf: "stretch",
    alignItems: "center",
    padding: 16,
    borderRadius: 0,
    p: {
      color: "white",
      marginLeft: 10,
      cursor: "pointer",
    },
  }),
  icon: css({
    background: "#ffffff10",
    cursor: "pointer",
  }),
};

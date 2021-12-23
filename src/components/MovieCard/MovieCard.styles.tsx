import { css } from "@emotion/react";

export const styles = {
  root: css({
    border: "1px solid #00000052",
    cursor: "pointer",
    margin: "20px 0",
    maxWidth: "50%",
    minWidth: 300,
    "&:hover": {
      boxShadow: "1px 3px 5px 2px #00000033",
      transition: ".5s",
    },
  }),
  content: css({
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  }),
  description: css({
    display: "flex",
    justifyContent: "space-between",
  }),
  alignCenter: css({
    display: "flex",
    alignContent: "center",
    svg: {
      position: "relative",
      bottom: 2,
      right: 3,
    },
  }),
};

import { css } from "@emotion/react";

export const styles = {
  title: css({
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
  editIcon: css({
    marginTop: 10,
    display: "flex",
    justifyContent: "flex-end",
    span: {
      display: "inline-block",
      cursor: "pointer",
      "&:hover": {
        background: "#85858537 !important",
        transition: ".3s",
      },
    },
  }),
};

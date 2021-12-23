import { css } from "@emotion/react";

export const styles = {
  form: css({
    width: "100%",
  }),
  textArea: css({
    margin: "15px 0",
    width: "100%",
  }),
  ratings: css({
    display: "flex",
    margin: "10px 0",
    justifyContent: "space-around",
    svg: {
      cursor: "pointer",
      "&:hover": {
        color: "#ffc107 !important",
      },
    },
  }),
  buttons: css({
    display: "flex",
    justifyContent: "flex-end",
    marginTop: 15,
    button: {
      marginLeft: 20,
    },
  }),
};

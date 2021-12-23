import { css } from "@emotion/react";

export const styles = {
  root: css({
    padding: 10,
    border: "1px solid #00000052",
    margin: "20px auto",
    width: "50%",
    minWidth: 300,
    "&:hover": {
      boxShadow: "1px 3px 5px 2px #00000033",
      transition: ".5s",
    },
  }),
  preview: {
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
  },
  editing: {
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
  },
};

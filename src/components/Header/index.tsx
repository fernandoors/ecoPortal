import React from "react";
import { useRouter } from "next/router";
import { Paper, Typography } from "@mui/material";
import Image from "next/image";
import logoIcon from "../../../public/favicon.ico";
import { styles } from "./Header.styles";

export default function Header() {
  const router = useRouter();
  function redirect() {
    router.push("/reviews");
  }
  return (
    <Paper elevation={3} css={styles.navBar} role="header">
      <Image
        role="logo"
        css={styles.icon}
        src={logoIcon}
        onClick={redirect}
        alt="Logo"
        width="32"
        height="32"
      />
      <Typography onClick={redirect}>{"Cool Movies"}</Typography>
    </Paper>
  );
}

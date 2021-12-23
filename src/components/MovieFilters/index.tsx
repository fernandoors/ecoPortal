import React from "react";
import { TextField } from "@mui/material";

import { styles } from "./MovieFilters.styles";

type MovieFiltersProps = {
  value: string;
  onChange(e: string): void;
};

export default function MovieFilters(props: MovieFiltersProps) {
  const { value, onChange } = props;
  return (
    <div css={styles.movieFilters}>
      <TextField
        label="Search Movie's Title or Director's Name"
        value={value}
        sx={{ width: "300px" }}
        onChange={(e) => onChange(e.target.value)}
        InputProps={{
          type: "search",
        }}
      />
    </div>
  );
}

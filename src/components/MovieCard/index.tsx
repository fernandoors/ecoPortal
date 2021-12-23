import React from "react";
import { Card, Typography, CardContent } from "@mui/material";
import { TMovie } from "@reduxjs/toolkit";
import Link from "next/link";

import StarIcon from "@mui/icons-material/Star";
import { styles } from "./MovieCard.styles";
import { convertRattingToAverage } from "utils/convertRattingToAverage";

type MovieCardProps = {
  movie: TMovie;
};

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <Link href={`/reviews/${movie.id}`} passHref>
      <Card css={styles.root}>
        <CardContent css={styles.content}>
          <Typography gutterBottom variant="h5" component="div">
            {movie.title}
          </Typography>
          <div>
            <Typography variant="body1" color="text.secondary">
              Released: <strong>{movie.releaseDate}</strong>
            </Typography>
          </div>
          <div css={styles.description}>
            <Typography variant="body1" color="text.secondary">
              Directed by:{" "}
              <strong>{movie.movieDirectorByMovieDirectorId.name}</strong>
            </Typography>
            <Typography css={styles.alignCenter}>
              <StarIcon />{" "}
              {!!movie?.movieReviewsByMovieId?.nodes?.length
                ? convertRattingToAverage(movie.movieReviewsByMovieId.nodes)
                : null}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default MovieCard;

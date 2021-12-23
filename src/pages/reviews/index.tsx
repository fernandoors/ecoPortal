import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import { css } from "@emotion/react";
import { CircularProgress, Typography, Grid } from "@mui/material";

import MovieCard from "components/MovieCard";
import MovieFilters from "components/MovieFilters";

import {
  movieActions,
  useAppDispatch,
  useAppSelector,
  MoviewState,
  TMovie,
} from "../../redux";


const Reviews: NextPage = () => {
  const [movies, setMovies] = useState<TMovie[]>();
  const [moviesFilters, setMoviesFilters] = useState("");
  const dispatch = useAppDispatch();
  const movieState: MoviewState = useAppSelector((state) => state.movie);

  useEffect(() => {
    dispatch(movieActions.fetch());
  }, [dispatch]);

  useEffect(() => {
    if (!!movieState.movies?.allMovies.nodes) {
      setMovies(movieState.movies.allMovies.nodes);
    }
  }, [movieState.movies]);

  function handleMovieFilter(searchText: string): void {
    const moviesFiltered = movieState?.movies?.allMovies.nodes.filter(
      (movie) => {
        if (movie.title.toLowerCase().includes(searchText)) {
          return true;
        }
        if (
          movie.movieDirectorByMovieDirectorId.name
            .toLowerCase()
            .includes(searchText)
        ) {
          return true;
        }
        return false;
      }
    );
    setMoviesFilters(searchText);
    setMovies(moviesFiltered);
  }

  return (
    <div css={styles.root}>
      <section css={styles.contentSection}>
        <Typography variant={"h4"}>{"Movies Reviewed"}</Typography>
        {!movieState.movies ? (
          <CircularProgress />
        ) : (
          <>
            <MovieFilters value={moviesFilters} onChange={handleMovieFilter} />
            <Grid container item gap={3} justifyContent="center">
              {!!movies?.length ? (
                movies.map((movie: TMovie) => (
                  <MovieCard movie={movie} key={movie.id} />
                ))
              ) : (
                <Typography variant={"body1"}>{"Not Found"}</Typography>
              )}
            </Grid>
          </>
        )}
      </section>
    </div>
  );
};

const styles = {
  root: css({
    height: "100vh",
    width: "100%",
  }),
  contentSection: css({
    padding: 20,
  }),
};

export default Reviews;

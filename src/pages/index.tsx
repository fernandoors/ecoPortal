import { css } from "@emotion/react";
import { Button, Paper, TextField, Typography, Zoom } from "@mui/material";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import MovieCard from "../components/MovieCard";
import {
  movieActions,
  useAppDispatch,
  useAppSelector,
  MoviewState,
  TMovie,
} from "../redux";

const primary = "#5ea94c";
/**
 *  PAGE REDIRECT TO REVIEW BY NEXT CONFIG
 *
 */

const Home: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/reviews");
  }, [router]);
  const dispatch = useAppDispatch();
  const movieState: MoviewState = useAppSelector((state) => state.movie);
  return (
    <div css={styles.root}>
      <Paper elevation={3} css={styles.navBar}>
        <Typography>{"EcoPortal"}</Typography>
      </Paper>

      <div css={styles.body}>
        <Typography variant={"h1"} css={styles.heading}>
          {"EcoPortal Coolmovies Test"}
        </Typography>
        <Typography variant={"subtitle1"} css={styles.subtitle}>
          {`Thank you for taking the time to take our test. We really appreciate it. 
        All the information on what is required can be found in the README at the root of this repo. 
        Please dont spend ages on this and just get through as much of it as you can. 
        Good luck! :) `}
        </Typography>

        <div css={styles.mainControls}>
          <Button
            variant={"outlined"}
            onClick={() => {
              dispatch(
                movieState.movies
                  ? movieActions.clearData()
                  : movieActions.fetch()
              );
            }}
          >
            {movieState.movies ? "Hide some data" : "Fetch some data"}
          </Button>
        </div>

        {movieState.movies &&
          movieState.movies.allMovies.nodes.map((movie: TMovie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        <Zoom in={Boolean(movieState.movies)} unmountOnExit mountOnEnter>
          <TextField
            css={styles.dataInput}
            multiline
            label={"Some Data"}
            defaultValue={JSON.stringify(movieState.movies)}
          />
        </Zoom>
      </div>
    </div>
  );
};

const styles = {
  root: css({
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }),
  navBar: css({
    background: primary,
    height: 50,
    alignSelf: "stretch",
    display: "flex",
    alignItems: "center",
    padding: 16,
    borderRadius: 0,
    p: {
      color: "white",
    },
  }),
  body: css({
    alignSelf: "stretch",
    padding: 32,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }),
  heading: css({ marginTop: 16, fontSize: "2.75rem", textAlign: "center" }),
  subtitle: css({
    fontWeight: 300,
    textAlign: "center",
    maxWidth: 600,
    margin: "24px 0",
    color: "rgba(0, 0, 0, 0.6)",
  }),
  mainControls: css({
    display: "flex",
    alignItems: "center",
    button: { marginRight: 16 },
  }),
  dataInput: css({
    alignSelf: "stretch",
    margin: "32px 0",
  }),
};

export default Home;

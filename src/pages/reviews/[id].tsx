import { useEffect } from "react";
import { useRouter } from "next/router";
import { css } from "@emotion/react";
import {
  reviewActions,
  useAppDispatch,
  useAppSelector,
  ReviewState,
  TMovie,
} from "../../redux";
import ReviewMessage from "components/ReviewMessage";
import MovieCard from "components/MovieCard";
import { Typography } from "@mui/material";
import { primary } from "styles/colors";

export default function Review() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const reviewState: ReviewState = useAppSelector((state) => state.review);
  useEffect(() => {
    if (!!router?.query?.id) {
      dispatch(reviewActions.fetch({ id: router.query.id as string }));
    }
  }, [router, dispatch]);
  return (
    <div css={styles.root}>
      <section css={styles.content}>
        {!!reviewState.reviews && (
          <div css={styles.movie}>
            <Typography variant="h4">Movie:</Typography>
            <MovieCard movie={reviewState.reviews.movieById as TMovie} />
          </div>
        )}
        <Typography variant="h5" color="text.secondary">
          Reviews:
        </Typography>
        {!!reviewState.reviews &&
          reviewState.reviews.movieById.movieReviewsByMovieId.nodes.map(
            (review) => (
              <ReviewMessage
                key={review.id}
                review={review}
                load={reviewState.reviewsFetching}
              />
            )
          )}
      </section>
    </div>
  );
}

const styles = {
  root: css({}),
  content: css({
    padding: 20,
    display: "flex",
    flexDirection: "column",
  }),
  movie: css({
    width: "100%",
    "> div": {
      margin: "0 auto",
      borderColor: primary,
      width: "50%",
    },
  }),
};

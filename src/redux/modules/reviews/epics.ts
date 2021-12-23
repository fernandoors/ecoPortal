import { Epic, StateObservable } from "redux-observable";
import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";
import { RootState } from "../../store";
import { EpicDependencies } from "../../types";
import { GET_REVIEW_BY_MOVIE_ID, UPDATE_REVIEW_BY_ID } from "./queries";
import { actions, SliceAction } from "./slice";

export const fetchMovieReview: Epic = (
  action$: Observable<SliceAction["fetch"]>,
  state$: StateObservable<RootState>,
  { client }: EpicDependencies
) => {
  return action$.pipe(
    filter(actions.fetch.match),
    switchMap(async ({ payload }) => {
      try {
        const result = await client.query({
          query: GET_REVIEW_BY_MOVIE_ID,
          variables: { id: payload.id },
        });
        return actions.loaded({ data: result.data });
      } catch (err) {
        return actions.loadError();
      }
    })
  );

}

export const updateMovieReview: Epic = (
  action$: Observable<SliceAction["updateReview"]>,
  state$: StateObservable<RootState>,
  { client }: EpicDependencies) => {
  return action$.pipe(
    filter(actions.updateReview.match),
    switchMap(async ({ payload }) => {
      try {
        const movieReviewPatch = {
          body: payload.content.body || null,
          title: payload.content.title || null,
          rating: payload.content.rating || null,
        }
        const result = await client.mutate({
          mutation: UPDATE_REVIEW_BY_ID,
          variables: { id: payload.id, movieReviewPatch },
        });
        return await actions.fetch({ id: payload.movieID })
      } catch (err) {
        return actions.loadError();
      }
    })
  );

}
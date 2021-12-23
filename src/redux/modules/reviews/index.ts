export * from './types'
export { actions as reviewActions } from './slice';
export { default as reviewReducer } from './slice';
import { combineEpics } from 'redux-observable';
import { fetchMovieReview, updateMovieReview } from './epics';

export const reviewEpics = combineEpics(fetchMovieReview, updateMovieReview);

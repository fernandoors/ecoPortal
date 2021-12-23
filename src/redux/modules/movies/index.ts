export * from './types'
export { actions as movieActions } from './slice';
export { default as movieReducer } from './slice';
import { combineEpics } from 'redux-observable';
import { fetchAllMovies } from './epics';

export const movieEpics = combineEpics(fetchAllMovies);

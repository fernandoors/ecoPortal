import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MoviewState, QueryMovie } from './types'

const initialState: MoviewState = {};

export const slice = createSlice({
  initialState,
  name: 'movies',
  reducers: {
    fetch: () => { },
    clearData: (state) => {
      state.movies = undefined;
    },
    loaded: (state, action: PayloadAction<{ data: QueryMovie }>) => {
      state.movies = action.payload.data;
    },
    loadError: (state) => {
      state.movies = undefined;
      state.moviesError = true;
    },
  },
});

export const { actions } = slice;
export type SliceAction = typeof actions;
export default slice.reducer;

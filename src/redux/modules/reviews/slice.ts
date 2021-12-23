import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReviewState, QueryReview, TReview } from './types'

const initialState: ReviewState = {};

export const slice = createSlice({
  initialState,
  name: 'reviews',
  reducers: {
    fetch: (state, action: PayloadAction<{ id: string }>) => {
      state.reviewsFetching = true
    },
    updateReview: (state, action: PayloadAction<{ id: string, movieID: string, content: Partial<TReview> }>) => {
      state.reviewsFetching = true
    },
    clearData: (state) => {
      state.reviews = undefined;
      state.reviewsFetching = false
    },
    loaded: (state, action: PayloadAction<{ data: QueryReview }>) => {
      state.reviews = action.payload.data;
      state.reviewsFetching = false
    },
    loadError: (state) => {
      state.reviews = undefined;
      state.reviewsError = true;
      state.reviewsFetching = false
    },
  },
});

export const { actions } = slice;
export type SliceAction = typeof actions;
export default slice.reducer;

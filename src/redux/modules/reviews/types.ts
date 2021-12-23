import { TMovie } from ".."

export type TReview = {
  id: string
  body: string
  userByUserReviewerId: {
    name: string
  }
  rating: number
  title: string
}

interface ReviewNodeAndMovie extends TMovie {
}

export interface QueryReview {
  movieById: ReviewNodeAndMovie
}

export interface ReviewState {
  reviews?: QueryReview;
  reviewsError?: boolean;
  reviewsFetching?: boolean;
}

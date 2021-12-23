import { Nodes } from "redux/types"
import { TReview } from ".."

export type TMovie = {
  id: string
  title: string
  releaseDate: string
  movieDirectorByMovieDirectorId: {
    name: string
  }
  movieReviewsByMovieId: Nodes<TReview>
}


export type QueryMovie = {
  allMovies: Nodes<TMovie>
}

export interface MoviewState {
  movies?: QueryMovie;
  moviesError?: boolean;
}

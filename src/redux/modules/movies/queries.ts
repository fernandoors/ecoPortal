
import { gql } from "@apollo/client";

export const GET_ALL_MOVIES = gql`
query AllMovies {
  allMovies {
    nodes {
      id
      title
      releaseDate
      movieDirectorByMovieDirectorId {
        name
      }
      movieReviewsByMovieId {
        totalCount
        nodes {
          rating
        }
      }
    }
  }
}
`;

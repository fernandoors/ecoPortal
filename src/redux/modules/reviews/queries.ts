import { gql } from "@apollo/client";

export const GET_REVIEW_BY_MOVIE_ID = gql`
  query movieById($id: UUID!) {
    movieById(id: $id) {
      id
      title
      releaseDate
      movieDirectorByMovieDirectorId {
        name
      }
      movieReviewsByMovieId {
        nodes {
          id
          body
          userByUserReviewerId {
            name
          }
          rating
          title
        }
      }
    }
  }
`;

export const UPDATE_REVIEW_BY_ID = gql`
  mutation UpdateMovieReviewById(
    $id: UUID!
    $movieReviewPatch: MovieReviewPatch!
  ) {
    updateMovieReviewById(
      input: { movieReviewPatch: $movieReviewPatch, id: $id }
    ) {
      movieReview {
        id
        title
        body
        rating
        userByUserReviewerId {
            name
        }
      }
    }
  }
`;

import React from "react";
import { Typography } from "@mui/material";
import { TReview } from "@reduxjs/toolkit";
import StarIcon from "@mui/icons-material/Star";
import Image from "next/image";
import editIcon from "../../../public/edit.svg";
import { styles } from "./ReviewPreview.styles";

type ReviewPreviewProps = {
  review: TReview;
  handleShowEdit: () => void;
};

export default function ReviewPreview(props: ReviewPreviewProps) {
  const { review, handleShowEdit } = props;
  return (
    <>
      <div css={styles.title}>
        <Typography gutterBottom variant="h5">
          {review.title} by {review.userByUserReviewerId.name}
        </Typography>
        <div css={styles.alignCenter}>
          <StarIcon /> {review.rating}
        </div>
      </div>
      <Typography variant="body1">{review.body}</Typography>
      <div css={styles.editIcon}>
        <Image
          onClick={handleShowEdit}
          src={editIcon}
          alt="Edit Review Icon"
          width="32"
          height="32"
        />
      </div>
    </>
  );
}

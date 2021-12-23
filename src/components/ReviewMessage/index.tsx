import type { ChangeEvent, FormEvent } from "react";
import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  Card,
  CardContent,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import { TReview } from "@reduxjs/toolkit";
import ReviewPreview from "components/ReviewPreview";
import { reviewActions, useAppDispatch } from "../../redux";
import { styles } from "./ReviewMessage.styles";
import ReviewEdit from "components/ReviewEdit";

type ReviewMessageProps = {
  review: TReview;
  load?: boolean;
};

export default function ReviewMessage({ review, load }: ReviewMessageProps) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [formContent, setFormContent] = useState({
    body: "",
    title: "",
    rating: 0,
  });
  const [erroMessage, setErroMessage] = useState<string[]>([]);
  function handleEdit() {
    const { body, title, rating } = review;
    setFormContent({ body, title, rating });
    setIsEdit(true);
  }
  function handleShowEdit() {
    setIsEdit(false);
  }
  function handleFormEdit({ target }: ChangeEvent<HTMLInputElement>) {
    const { name, value } = target;
    setFormContent((prev) => ({ ...prev, [name]: value }));
  }
  function handleFormEditRating(rating: number) {
    setFormContent((prev) => ({ ...prev, rating }));
  }
  function handleSubmitReview(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const hasMessageError = Object.entries(formContent)
      .filter(([_, value]) => !value)
      .map(([key]) => key);
    if (!hasMessageError.length) {
      dispatch(
        reviewActions.updateReview({
          id: review.id,
          movieID: router?.query?.id as string,
          content: { ...formContent },
        })
      );
      handleShowEdit();
    } else {
      setErroMessage(hasMessageError);
    }
  }
  function handleErrorMessageClose() {
    setErroMessage([]);
  }
  if (!!load) {
    return <CircularProgress />;
  }
  return (
    <Card css={styles.root}>
      <CardContent>
        {isEdit ? (
          <ReviewEdit
            formContent={formContent}
            handleShowEdit={handleShowEdit}
            handleSubmitReview={handleSubmitReview}
            handleFormEdit={handleFormEdit}
            handleFormEditRating={handleFormEditRating}
          />
        ) : (
          <ReviewPreview handleShowEdit={handleEdit} review={review} />
        )}
      </CardContent>
      <Snackbar
        open={!!erroMessage.length}
        autoHideDuration={5000}
        onClose={handleErrorMessageClose}
      >
        <Alert
          onClose={handleErrorMessageClose}
          severity="error"
          sx={{ width: "100%" }}
        >
          {erroMessage.map((error) => (
            <li key={error}>Please fill the {error.toUpperCase()} field</li>
          ))}
        </Alert>
      </Snackbar>
    </Card>
  );
}

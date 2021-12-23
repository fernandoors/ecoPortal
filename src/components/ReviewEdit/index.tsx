import type { ChangeEvent, FormEvent } from "react";
import { Button, Tooltip, TextField } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { styles } from "./ReviewEdit.styles";

type ReviewEditProps = {
  formContent: {
    body: string;
    title: string;
    rating: number;
  };
  handleShowEdit: () => void;
  handleSubmitReview: (e: FormEvent<HTMLFormElement>) => void;
  handleFormEdit: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFormEditRating: (rating: number) => void;
};

export default function ReviewEdit(props: ReviewEditProps) {
  const {
    formContent,
    handleShowEdit,
    handleSubmitReview,
    handleFormEdit,
    handleFormEditRating,
  } = props;
  return (
    <form onSubmit={handleSubmitReview} css={styles.form}>
      <TextField
        label="Review Title"
        value={formContent.title}
        name="title"
        sx={{ minWidth: "260px" }}
        onChange={handleFormEdit}
      />
      <br />
      <TextField
        label="Review Body"
        value={formContent.body}
        css={styles.textArea}
        name="body"
        sx={{ minWidth: "260px" }}
        onChange={handleFormEdit}
        multiline
        rows={4}
      />
      <div css={styles.ratings}>
        <label>Rating:</label>
        {[1, 2, 3, 4, 5].map((rating) => (
          <Tooltip
            key={rating}
            title={`${rating} Star${rating === 1 ? "" : "s"}`}
            arrow
          >
            <StarIcon
              onClick={() => handleFormEditRating(rating)}
              style={{
                color: rating <= formContent.rating ? "#ffc107" : "#ccc7b8",
              }}
            />
          </Tooltip>
        ))}
      </div>
      <div css={styles.buttons}>
        <Button variant="contained" color="secondary" onClick={handleShowEdit}>
          Cancel
        </Button>
        <Button variant="contained" type="submit">
          Update
        </Button>
      </div>
    </form>
  );
}

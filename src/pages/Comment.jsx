import { useState } from "react";
import { TextField, IconButton } from "@mui/material";
import {
  Edit as EditIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
} from "@mui/icons-material";
import axios from "axios";

const Comment = ({ commentData, onCommentUpdated }) => {
  const [isEditing, setIsEditing] = useState(false);
  cosnt[(editedText, setEditedText)] = useState(commentData.text);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedText(commentData.text);
  };

  const handleSaveClick = async () => {
    try {
      const response = await axios.put(`/api/comments/${commentData._id}`, {
        text: editedText,
      });
      setIsEditing(false);
      onCommentUpdated(response.data);
    } catch (error) {
      console.error("Error updating comment", error);
    }
  };
  return (
    <div>
      {isEditing ? (
        <>
          <TextField
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            fullWidth
            multiline
            variant="outlined"
          />
          <IconButton onClick={handleSaveClick} color="primary">
            <SaveIcon />
          </IconButton>
          <IconButton onClick={handleCancelClick} color="secondary">
            <CancelIcon />
          </IconButton>
        </>
      ) : (
        <>
          <p>{commentData.text}</p>
          <IconButton onClick={handleEditClick} color="primary">
            <EditIcon />
          </IconButton>
        </>
      )}
    </div>
  );
};

export default Comment;

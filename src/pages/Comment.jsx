import { useState } from "react";
import {
  IconButton,
  ListItem,
  ListItemText,
  TextField,
  Button,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Comment = ({ comment, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(comment.text);

  const handleEdit = async () => {
    await onUpdate(comment._id, editedText);
    setIsEditing(false);
  };
  return (
    <ListItem className="comment-container">
      {isEditing ? (
        <Box className="comment-editing">
          <TextField
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            variant="outlined"
            fullWidth
            className="comment-text"
          />
          <div className="comment-buttons">
            <Button onClick={handleEdit} variant="contained" size="small">
              Save
            </Button>
            <Button
              onClick={() => setIsEditing(false)}
              variant="outlined"
              size="small"
            >
              Cancel
            </Button>
          </div>
        </Box>
      ) : (
        <Box className="comment-container">
          <ListItemText primary={comment.text} />
          <div className="comment-buttons">
            <IconButton
              edge="end"
              aria-label="edit"
              onClick={() => setIsEditing(true)}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => onDelete(comment._id)}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        </Box>
      )}
    </ListItem>
  );
};

export default Comment;

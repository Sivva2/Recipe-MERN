import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Comment from "./Comment";

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState();
  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState("");
  const [loadingComments, setLoadingComments] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/recipes/${recipeId}`)
      .then((response) => {
        setRecipe(response.data);
      })
      .catch((error) => {
        console.error("Error fetching recipe", error);
      });

    axios
      .get(`${import.meta.env.VITE_API_URL}/api/recipes/${recipeId}/comments`)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error("Error fetching comments", error);
      });
  }, [recipeId]);

  const handleCommentSubmit = () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      console.error("No token found. User might not be logged in.");
      alert("You need to be logged in to add comments.");
      return;
    }

    axios
      .post(
        `${import.meta.env.VITE_API_URL}/api/recipes/${recipeId}/comments`,
        {
          text: newCommentText,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setComments((prevComments) => [...prevComments, response.data]);
        setNewCommentText("");
      })
      .catch((error) => {
        console.error("Error creating comment", error);
      });
  };

  const handleDeleteComment = (commentId) => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      alert("You need to be logged in to delete comments.");
      return;
    }
    axios
      .delete(`${import.meta.env.VITE_API_URL}/api/comments/${commentId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setComments((prevComments) =>
          prevComments.filter((comment) => comment._id !== commentId)
        );
      })
      .catch((error) => {
        console.error("Error deleting comment", error);
      });
  };

  const handleUpdateComment = (commentId, newText) => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      alert("You need to be logged in to update comments.");
      return;
    }

    axios
      .put(
        `${import.meta.env.VITE_API_URL}/api/comments/${commentId}`,
        {
          text: newText,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      .then((response) => {
        setComments((prevComments) =>
          prevComments.map((comment) =>
            comment._id === commentId ? response.data : comment
          )
        );
      })
      .catch((error) => {
        console.error("Error updating comment", error);
      });
  };

  if (!recipe) return <CircularProgress />;

  return (
    <div>
      <Typography variant="h3" gutterBottom>
        {recipe.title}
      </Typography>
      <Typography variant="body1">{recipe.description}</Typography>
      <Typography variant="h6">Ingredient</Typography>
      <List>
        {recipe.ingredients.map((ingredient, index) => (
          <ListItem key={index}>
            <ListItemText>
              {ingredient.quantity} {ingredient.unit} {ingredient.name}
            </ListItemText>
          </ListItem>
        ))}
      </List>

      <Typography variant="h6">Steps</Typography>
      <List>
        {recipe.steps.map((step, index) => (
          <ListItem key={index}>
            <ListItemText>
              {index + 1}. {step}
            </ListItemText>
          </ListItem>
        ))}
      </List>

      <Card style={{ marginTop: "2rem" }}>
        <CardContent>
          <Typography variant="h5">Comments</Typography>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <TextField
              label="Add a comment"
              variant="outlined"
              value={newCommentText}
              onChange={(e) => setNewCommentText(e.target.value)}
              fullWidth
            />
            <Button variant="contained" onClick={handleCommentSubmit}>
              Submit
            </Button>
          </Box>
          <List>
            {comments.map((comment) => (
              <Comment
                key={comment._id}
                comment={comment}
                onDelete={handleDeleteComment}
                onUpdate={handleUpdateComment}
              />
            ))}
          </List>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecipeDetails;

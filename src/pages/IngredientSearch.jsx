import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import classes from "../styles/IngredientSearch.module.css";

const IngredientSearch = () => {
  const [ingredients, setIngredients] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = () => {
    setLoading(true);
    setError("");

    axios
      .get(`${import.meta.env.VITE_API_URL}/api/recipes/search`, {
        params: { ingredients },
      })
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((err) => {
        console.error("Error fetching recipes", err);
        setError("Failed to fetch recipes.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className={classes.ingredientSearch}>
      <Typography variant="h4">Find Recipes by Ingredients</Typography>
      <TextField
        label="Enter ingredients (comma-separated)"
        variant="outlined"
        fullWidth
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        className={classes.textField}
      />
      <Button
        variant="contained"
        onClick={handleSearch}
        className={classes.searchButton}
      >
        Search
      </Button>

      {loading && <CircularProgress style={{ marginTop: "1em" }} />}
      {error && <Typography color="error">{error}</Typography>}

      <List className={classes.recipeList}>
        {recipes.map((recipe) => (
          <ListItem key={recipe._id} className={classes.recipeCard}>
            <ListItemText
              primary={recipe.title}
              secondary={recipe.description}
              className={classes.recipeTitle}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default IngredientSearch;

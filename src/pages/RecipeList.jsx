import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, Typography, CardActionArea } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import { Link } from "react-router-dom";
import classes from "../styles/RecipeList.module.css";
const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/recipes`)
      .then((response) => {
        setRecipes(response.data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching recipes", error));
  }, []);

  return (
    <Grid2 container spacing={2} sx={{ marginTop: "1em", marginBottom: "1em" }}>
      {recipes.map((recipe) => (
        <Grid2 item xs={12} md={4} key={recipe._id}>
          <Card className={classes.recipeCard}>
            <CardActionArea component={Link} to={`/recipes/${recipe._id}`}>
              <CardContent>
                <Typography
                  variant="h5"
                  gutterBottom
                  className={classes.recipeTitle}
                >
                  {recipe.title}
                </Typography>
                <Typography
                  variant="body2"
                  className={classes.recipeDescription}
                >
                  {recipe.description}
                </Typography>
                <img src={recipe.imageUrl} />
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
};
export default RecipeList;

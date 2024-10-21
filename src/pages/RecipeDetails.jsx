import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/recipes/${recipeId}`)
      .then((response) => setRecipe(response.data))
      .catch((error) => console.error("Error fetching recipe", error));
  }, [recipeId]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div>
      <Typography variant="h3" gutterBottom>
        {recipe.title}
      </Typography>
      <Typography variant="body1">{recipe.description}</Typography>
      <Typography variant="h6">Ingredient</Typography>
      <List>
        {recipe.ingredient.map((ingredient, index) => (
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
          <CommentsList recipeId={recipe._id} />
        </CardContent>
      </Card>
    </div>
  );
};

export default RecipeDetails;

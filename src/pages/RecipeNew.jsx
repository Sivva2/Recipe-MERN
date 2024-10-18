import React, { useState } from "react";
/* import { Link, useNavigate } from "react-router-dom"; */
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";

/* const API_URL = "http://localhost:5005"; */
const API_URL = import.meta.env.VITE_API_URL;
/* const navigate = useNavigate(); */
import axios from "axios";
import classes from "../styles/Login.module.css";

const RecipeNew = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState([
    { name: "", quantity: "", unit: "" },
  ]);
  const [steps, setSteps] = useState([""]);
  const [time, setTime] = useState("");
  const [servings, setServings] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const handleIngredientChange = (index, event) => {
    const values = [...ingredients];
    values[index][event.target.name] = event.target.value;
    setIngredients(values);
  };

  const handleStepChange = (index, event) => {
    const values = [...steps];
    values[index] = event.target.value;
    setSteps(values);
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { name: "", quantity: "", unit: "" }]);
  };

  const handleRemoveIngredient = (index) => {
    const values = [...ingredients];
    values.splice(index, 1);
    setIngredients(values);
  };

  const handleAddStep = () => {
    setSteps([...steps, ""]);
  };

  const handleRemoveStep = (index) => {
    const values = [...steps];
    values.splice(index, 1);
    setSteps(values);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!title || !steps || !time || !servings) {
      window.alert(
        "Please fill in all required fields to register the new recipe."
      );
      return;
    }

    const newRecipe = { title, ingredients, steps, time, servings };
    const storedToken = localStorage.getItem("authToken");
    axios
      .post(`${API_URL}/api/recipes`, newRecipe, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        console.log("Response to /auth/recipe ");
        window.alert("recipe registered");
      })
      .catch((error) => {
        if (error.response && error.response.status === 500) {
          window.alert("Server error 500: Please try again later.");
        } else {
          const errorDescription = error.response
            ? error.response.data.message
            : "An error occurred";
          setErrorMessage(errorDescription);
        }
        console.log("Error caught");
      });
  };

  /*     try {
      await axios.post(`${API_URL}/api/recipes`, newRecipe);
      // Reset form after successful submission
      setTitle("");
      setIngredients([{ name: "", quantity: "", unit: "" }]);
      setSteps([""]);
      setTime("");
      setServings("");

      navigate("/recipes");
    } catch (error) {
      console.error("There was an error creating the recipe!", error);
    }
  }; */

  return (
    <Container>
      <Typography marginTop="normal" variant="h4" component="h1" gutterBottom>
        Add New Recipe
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <TextField
          label="Recipe Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required={true}
        />
        <Typography variant="h6">Ingredients</Typography>
        {ingredients.map((ingredient, index) => (
          <Box key={index} sx={{ display: "flex", gap: 1 }}>
            <Button variant="contained" onClick={handleAddIngredient}>
              +
            </Button>
            <TextField
              label="Name"
              name="name"
              value={ingredient.name}
              onChange={(e) => handleIngredientChange(index, e)}
              required={true}
            />
            <TextField
              label="Quantity"
              name="quantity"
              value={ingredient.quantity}
              onChange={(e) => handleIngredientChange(index, e)}
              required={true}
            />
            <TextField
              type="string"
              label="Unit"
              name="unit"
              value={ingredient.unit}
              onChange={(e) => handleIngredientChange(index, e)}
              required={true}
            />

            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleRemoveIngredient(index)}
            >
              X
            </Button>
          </Box>
        ))}

        <Typography variant="h5">Steps</Typography>
        {steps.map((step, index) => (
          <Box key={index} sx={{ display: "flex", gap: 1 }}>
            <Button variant="contained" onClick={handleAddStep}>
              +
            </Button>
            <TextField
              label={`Step ${index + 1}`}
              value={step}
              fullWidth
              onChange={(e) => handleStepChange(index, e)}
              required={true}
            />
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleRemoveStep(index)}
            >
              X
            </Button>
          </Box>
        ))}
        <TextField
          label="Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required={true}
        />
        <TextField
          label="Servings"
          type="number"
          value={servings}
          onChange={(e) => setServings(e.target.value)}
          /* onChange={(event) => setServings(event.currentTarget.value)} */
          required={true}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          href="/recipes/new"
        >
          Reset
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          onSubmit={handleSubmit}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default RecipeNew;

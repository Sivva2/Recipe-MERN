import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import RecipeForm from "./components/RecipeForm.jsx";
import RecipeDetails from "./pages/RecipeDetails.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/recipes/new" element={<RecipeForm />} />
        <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
        {/*    <Route path="/recipes" element={<RecipeList />} />
        <Route path="/recipes/:recipesId/update" element={<UpdateRecipe />} />  */}
        <Route path="*" element={<ErrorPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;

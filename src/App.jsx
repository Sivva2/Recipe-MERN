import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import RecipeForm from "./components/RecipeForm.jsx";
import RecipeDetails from "./pages/RecipeDetails.jsx";
import SignupPage2 from "./pages/SignupPage2.jsx";
import LoginPage3 from "./pages/LoginPage3.jsx";
import ErrorPage from "./pages/ErrorPage";
import RecipeList from "./pages/RecipeList";
import RecipeUpdate from "./pages/RecipeUpdate.jsx";
import Navbar from "./components/Navbar.jsx";
import TermsPage from "./pages/TermsPage.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/recipes/new" element={<RecipeForm />} />
        <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
        <Route path="/recipes" element={<RecipeList />} />
        <Route
          path="/recipes/:recipesId/update"
          element={<RecipeUpdate />}
        />{" "}
        <Route path="*" element={<ErrorPage />} />
        <Route path="/signup" element={<SignupPage2 />} />
        <Route path="/login" element={<LoginPage3 />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
    </>
  );
}

export default App;

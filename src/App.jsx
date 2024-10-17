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
import LoginPage from "./pages/LoginPage.jsx";
import ErrorPage from "./pages/ErrorPage";
import RecipeList from "./pages/RecipeList";
import RecipeUpdate from "./pages/RecipeUpdate.jsx";
import Navbar from "./components/Navbar2.jsx";
import TermsPage from "./pages/TermsPage.jsx";

import IsPrivate from "./components/IsPrivate"; // <== IMPORT
import IsAnon from "./components/IsAnon"; // <== IMPORT

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/recipes/new" element={<RecipeForm />} />
        <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
        <Route
          path="/recipes"
          element={
            <IsPrivate>
              <RecipeList />
            </IsPrivate>
          }
        />
        <Route path="/recipes/:recipesId/update" element={<RecipeUpdate />} />{" "}
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route
          path="/signup"
          element={
            <IsAnon>
              {" "}
              <SignupPage />{" "}
            </IsAnon>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        {/* 
        <Route
          path="/login"
          element={
            <IsAnon>
              {" "}
              <LoginPage />{" "}
            </IsAnon>
          } 
        /> */}
      </Routes>
    </>
  );
}

export default App;

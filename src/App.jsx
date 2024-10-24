import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import RecipeDetails from "./pages/RecipeDetails.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ErrorPage from "./pages/ErrorPage";
import RecipeList from "./pages/RecipeList";
import RecipeNew from "./pages/RecipeNew.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import TermsPage from "./pages/TermsPage.jsx";
import IsPrivate from "./components/IsPrivate"; // <== IMPORT
import IsAnon from "./components/IsAnon"; // <== IMPORT
import IngredientSearch from "./pages/IngredientSearch";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/recipes/new" element={<RecipeNew />} />
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
        <Route path="/search" element={<IngredientSearch />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        {/* 
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          } 
        /> */}
        <Route path="/" element={<LoginPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

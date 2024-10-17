import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Button, Box } from "@mui/material";

function Navbar() {
  const { isLoggedIn, user, logOutUser, setAuth } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    // Deactivate the auth token
    localStorage.removeItem("token");
    setAuth(null);
    // Redirect to the home page
    navigate("/");
  };

  return (
    <Box component="nav" sx={{ display: "flex", gap: 2 }}>
      <Link to="/">
        <Button variant="contained" color="primary">
          Home
        </Button>
      </Link>

      {isLoggedIn ? (
        <>
          <Link to="/recipes/:recipesId/update">
            <Button variant="contained" color="primary">
              Recipes Update
            </Button>
          </Link>

          <Link to="/about">
            <Button variant="contained" color="primary">
              About Us
            </Button>
          </Link>
          <Link to="/recipes">
            <Button variant="contained" color="secondary">
              Recipes List In Private
            </Button>
          </Link>
          <Button variant="contained" color="secondary" onClick={logOutUser}>
            Logout
          </Button>
          <span>{user && user.name}</span>
        </>
      ) : (
        <>
          <Link to="/signup">
            <Button variant="contained" color="primary">
              Sign Up
            </Button>
          </Link>
          <Link to="/login">
            <Button variant="contained" color="primary">
              Login
            </Button>
          </Link>
        </>
      )}
    </Box>
  );
}

export default Navbar;

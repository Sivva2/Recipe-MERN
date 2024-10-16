/* import { Link } from "react-router-dom";
import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "../context/auth.context"; // <== IMPORT

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user } = useContext(AuthContext); // <== ADD

  //  Update the rendering logic to display different content
  //  depending on whether the user is logged in or not
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>

     
      {isLoggedIn && (
        <>
          <Link to="/about">
            <button>About Us</button>
          </Link>
          <button>Logout</button>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup">
            {" "}
            <button>Sign Up</button>{" "}
          </Link>
          <Link to="/login">
            {" "}
            <button>Login</button>{" "}
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar; */

////////

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
          <Link to="/about">
            <Button variant="contained" color="primary">
              About Us
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

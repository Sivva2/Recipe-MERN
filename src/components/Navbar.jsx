import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const { isLoggedIn, user, logOutUser, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logOutUser();
    navigate("/");
  };

  return (
    <AppBar position="static" sx={{ margin: "auto" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenu}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} component={Link} to="/">
            <IconButton>Home</IconButton>
          </MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/about">
            <IconButton>About Us</IconButton>
          </MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/recipes">
            <IconButton> Recipes </IconButton>
          </MenuItem>
          {isLoggedIn && (
            <>
              <MenuItem
                onClick={handleClose}
                component={Link}
                to="/recipes/new"
              >
                <IconButton>New Recipe</IconButton>
              </MenuItem>
            </>
          )}
        </Menu>
        <Link to="/recipes">
          <Button variant="contained" color="primary">
            Recipes
          </Button>
        </Link>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Recipes MERN
        </Typography>
        {isLoggedIn ? (
          <>
            <Link to="/recipes/new">
              <Button variant="contained" color="primary">
                Add Recipe
              </Button>
            </Link>
            <Link to="/recipes">
              <Button onClick={logOutUser} variant="contained" color="primary">
                Logout
              </Button>
            </Link>
            <Typography variant="body1" component="span">
              {user && user.name}
            </Typography>
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
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
/* 
<Box component="nav" sx={{ display: "flex" }}>
  <Link to="/">
    <Button variant="contained" color="primary">
      Home
    </Button>
  </Link>

  {isLoggedIn ? (
    <>
      <Link to="/recipes/new">
        <Button variant="contained" color="primary">
          New Recipe
        </Button>
      </Link>

      <Link to="/about">
        <Button variant="contained" color="primary">
          About Us
        </Button>
      </Link>
      <Link to="/recipes">
        <Button variant="contained" color="secondary">
          Recipes List
        </Button>
      </Link>
      <Button variant="contained" color="primary" onClick={logOutUser}>
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
      <Link to="/recipes">
        <Button variant="contained" color="secondary">
          Recipes List
        </Button>
      </Link>
      <Link to="/login">
        <Button variant="contained" color="primary">
          Login
        </Button>
      </Link>
    </>
  )}
</Box>;
 */

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
    localStorage.removeItem("token");
    setAuth(null);
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
            Home
          </MenuItem>
          {isLoggedIn && (
            <>
              <MenuItem onClick={handleClose} component={Link} to="/about">
                About Us
              </MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/recipes">
                Recipes List In Private
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                component={Link}
                to="/recipes/new"
              >
                New Recipe
              </MenuItem>
            </>
          )}
        </Menu>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Recipe MERN
        </Typography>
        {isLoggedIn ? (
          <>
            <Button onClick={handleLogout} color="secondary">
              Logout
            </Button>
            <Typography variant="body1" component="span">
              {user && user.name}
            </Typography>
          </>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/signup">
              Sign Up
            </Button>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

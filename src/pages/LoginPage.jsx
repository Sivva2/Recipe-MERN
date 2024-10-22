import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import "../styles/Login.module.css";
import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Container,
  Paper,
} from "@mui/material";
import classes from "../styles/Login.module.css";

/* const API_URL = "http://localhost:5005/";
 */
const API_URL = import.meta.env.VITE_API_URL;

function LoginPage(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { username, password };

    axios
      .post(`${API_URL}/auth/login`, requestBody)
      .then((response) => {
        console.log("JWT token", response.data.token); //takeout authToken to token if needed

        storeToken(response.data.token); //takeout authToken to token if needed

        authenticateUser();
        navigate("/");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
        console.log("Error catched");
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} className={classes.home}>
        <Typography
          component="h1"
          variant="h5"
          className={classes.paragraphBox}
        ></Typography>
        <Box
          component="form"
          onSubmit={handleLoginSubmit}
          className={classes.paragraphBox}
        >
          {" "}
          <h3>Login</h3>
          <TextField
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(event) => setUsername(event.currentTarget.value)}
            className={classes.input}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
            className={classes.input}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onSubmit={handleLoginSubmit}
            className={classes.input}
          >
            Log In
          </Button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <p>Don't have an account yet?</p>
          <Link to={"/signup"}> Sign Up</Link>
        </Box>
      </Paper>
    </Container>
  );
}

export default LoginPage;

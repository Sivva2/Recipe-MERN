/* import { useState } from "react"; */
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Login.module.css";

const API_URL = import.meta.env.VITE_API_URL;
/////////////
import React, { useState } from "react";
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

function SignupPage(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleUsername = (e) => setUsername(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const requestBody = { username, email, password };

    axios
      .post(`${API_URL}/auth/signup`, requestBody)
      .then((response) => {
        console.log("Response to /auth/signup ");
        window.alert("User registered");
        navigate("/login");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
        console.log("Error catched");
      });
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{ marginTop: "2em", marginBottom: "1em" }}
    >
      <Paper elevation={3} className={classes.home}>
        <Typography
          component="h1"
          variant="h5"
          className={classes.paragraphBox}
        >
          <h3>Sign Up</h3>
        </Typography>
        <Box
          component="form"
          onSubmit={handleSignupSubmit}
          className={classes.paragraphBox}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="username"
            name="username"
            autoComplete="username"
            value={username}
            onChange={(event) => setUsername(event.currentTarget.value)}
            className={classes.input}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
            className={classes.input}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
            className={classes.input}
            sx={{ marginBottom: "2em" }}
          />

          <Link
            scr="/terms"
            to={"/Terms"}
            sx={{ marginTop: "2em", marginBottom: "1em" }}
          >
            terms and conditions{" "}
          </Link>
          <Button
            type="submit"
            fullWidth
            sx={{ marginTop: "2em", marginBottom: "1em" }}
            variant="contained"
            color="primary"
            className={classes.input}
            component="form"
            onSubmit={handleSignupSubmit}
            onClick={handleSignupSubmit}
          >
            Sign Up
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default SignupPage;

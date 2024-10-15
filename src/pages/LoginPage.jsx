/* import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
 */
import "../styles/Login.module.css";

const API_URL = "http://localhost:5005"; // To fix when we get our backend

import React, { useState } from "react";
import {
  Box,
  Title,
  Text,
  TextInput,
  PasswordInput,
  Button,
  Fieldset,
  Checkbox,
} from "@mantine/core";
import classes from "../styles/Login.module.css";
function LoginPage(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <Box className={classes.home}>
      <Title className={`${classes.paragraphBox} ${classes.limitedWidth}`}>
        <h3>Login</h3>
      </Title>
      <Box className={`${classes.paragraphBox} ${classes.limitedWidth}`}>
        <TextInput
          autoComplete={["Web-dev Jr", "Web-dev Sr"]}
          label="Username"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.currentTarget.value)}
          className={`${classes.input} ${classes.limitedWidth}`}
          visibleFrom="xs"
          description="User name or email address"
          withAsterisk
        />

        <PasswordInput
          label="Password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
          className={`${classes.input} ${classes.limitedWidth}`}
        />
        <Fieldset
          legend="Disabled"
          disabled
          className={`${classes.input} ${classes.limitedWidth}`}
        >
          <Checkbox
            className={`${classes.input} ${classes.checkbox}`}
            defaultChecked
            label="I register for the first time"
          />{" "}
          <Checkbox
            className={`${classes.input} ${classes.checkbox}`}
            defaultChecked
            label="I agree to sell my privacy no matter what it cost"
          />{" "}
          <Text> {"  "} </Text>{" "}
          <Button
            className={`${classes.input} ${classes.checkbox}`}
            onClick={handleLogin}
          >
            Log In
          </Button>
        </Fieldset>
      </Box>
    </Box>
  );
}

export default LoginPage;

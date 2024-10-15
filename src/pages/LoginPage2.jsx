/* import { useState, useContext } from "react";
/* import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
 */
import "../styles/Login.module.css";
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

function LoginPage(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} className={classes.home}>
        <Typography
          component="h1"
          variant="h5"
          className={classes.paragraphBox}
        >
          <h3>Login</h3>
        </Typography>
        <Box
          component="form"
          onSubmit={handleLogin}
          className={classes.paragraphBox}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
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
            required
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
            className={classes.input}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.input}
            onClick={handleLogin}
          >
            Log In
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default LoginPage;

/* export default LoginPage; */

//////////////////////////////////////////////

/* 
function LoginPage(props) {
 
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      // Handle login logic here
      console.log("Login attempted with:", { email, password })
    }
  
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Login</CardTitle>
            <CardDescription>
              Enter your email and password to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <Button className="w-full">Sign in</Button>
              </div>
            </form>
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full">
                <GithubIcon className="mr-2 h-4 w-4" />
                Github
              </Button>
              <Button variant="outline" className="w-full">
                <TwitterIcon className="mr-2 h-4 w-4" />
                Twitter
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex flex-wrap items-center justify-between gap-2">
            <div className="text-sm text-muted-foreground">
              <span className="mr-1 hidden sm:inline-block">
                Don&apos;t have an account?
              </span>
              <a
                href="#"
                className="text-primary underline-offset-4 transition-colors hover:underline"
              >
                Sign up
              </a>
            </div>
            <a
              href="#"
              className="text-sm text-primary underline-offset-4 transition-colors hover:underline"
            >
              Forgot password?
            </a>
          </CardFooter>
        </Card>
      </div>
    )
  }
}

export default LoginPage; */

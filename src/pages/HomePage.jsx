import React from "react";
import { Typography, Container, Paper, Box, Button } from "@mui/material";
import classes from "../styles/HomePage.module.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Container component="main" maxWidth="md" className={classes.homeContainer}>
      <Paper elevation={3} className={classes.terms}>
        <Box p={3}>
          <Typography
            variant="h5"
            component="h1"
            gutterBottom
            className={classes.title}
          >
            Please read carefully our Terms and Conditions of Service before you
            sign in
          </Typography>
          <Typography variant="body1" className={classes.termsText}>
            By registering for an account, you agree to be bound by these terms
            and conditions. You warrant that you are at least 18 years old and
            are fully authorized to enter into this agreement. You agree to
            provide accurate and complete information during the registration
            process and to keep your account information up-to-date. You are
            responsible for maintaining the confidentiality of your account and
            password and for restricting access to your computer. You agree to
            accept responsibility for all activities that occur under your
            account or password. We reserve the right to terminate accounts,
            edit or remove content, and cancel orders at our sole discretion.
          </Typography>
          <Link to="/signup" className={classes.link}>
            <Button variant="contained" color="primary">
              Back to Signup
            </Button>
          </Link>
        </Box>
      </Paper>
    </Container>
  );
};

export default HomePage;

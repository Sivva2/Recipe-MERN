import React from "react";
import {
  Typography,
  Container,
  Paper,
  Box,
  Button,
  CardActions,
} from "@mui/material";
import classes from "../styles/Login.module.css";

import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Container
        component="main"
        maxWidth="md"
        sx={{ marginTop: "2em", marginBottom: "1em" }}
      >
        <Paper elevation={3} className={classes.titlebox}>
          <Box p={1}>
            <Typography variant="h6" component="h1" gutterBottom>
              <h1>Recipe MERN</h1>
            </Typography>
          </Box>
        </Paper>
      </Container>
      <Container
        component="main"
        maxWidth="md"
        sx={{ marginTop: "2em", marginBottom: "1em" }}
      >
        <Paper elevation={3} className={classes.terms}>
          <Box p={3}>
            <Typography variant="h5" component="h1" gutterBottom>
              Please read carefull to our Terms and Conditions of Service,
              before you Sign-in
            </Typography>
            <p></p>
            <Typography variant="body1" paragraph>
              By registering for an account, you agree to be bound by these
              terms and conditions. You warrant that you are at least 18 years
              old and are fully authorized to enter into this agreement. You
              agree to provide accurate and complete information during the
              registration process and to keep your account information
              up-to-date. You are responsible for maintaining the
              confidentiality of your account and password and for restricting
              access to your computer. You agree to accept responsibility for
              all activities that occur under your account or password. We
              reserve the right to terminate accounts, edit or remove content,
              and cancel orders at our sole discretion.
            </Typography>
            {/*         <CardActions>
              <Button
                color="primary"
                href={"/signup"}
                to={"/signup"}
                size="small"
              >
                <strong>Sign-Me-Up</strong>
              </Button>
            </CardActions> */}

            {/* <Link to={"/signup"}>Back to Signup</Link> */}
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default HomePage;

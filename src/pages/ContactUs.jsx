import React from "react";
import {
  Typography,
  Container,
  Paper,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import CardActions from "@mui/material/CardActions";
import classes from "../styles/Login.module.css";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";

const ContactUs = () => {
  return (
    <div>
      <Container
        component="main"
        sx={{ marginTop: "5em", marginBottom: "5em" }}
      >
        <Paper elevation={5} square={false} className={classes.terms}>
          <Typography variant="h6" component="h1" gutterBottom>
            <h1>Contact Us</h1>
          </Typography>
          <Card elevation={3} sx={{ marginTop: "0em", marginBottom: "1em" }}>
            <Box
              className={classes.paragraphBox}
              mb={4}
              p={5}
              sx={{ marginTop: "1em", marginBottom: "1em" }}
            >
              <Typography variant="h6" component="h2" gutterBottom>
                Welcome to our web development project{" "}
                <strong>Recipe MERN</strong> by
                <strong> Kevin Abaskaran</strong> &{" "}
                <strong>Alexandro Lastra</strong>.
              </Typography>
              <Typography variant="h6" component="h2" gutterBottom>
                Feel free to explore our work and contact us via{" "}
                <GitHubIcon></GitHubIcon> GitHub:
              </Typography>
            </Box>
          </Card>
          <Box
            className={classes.profile}
            display={"flex"}
            gap={"1em"}
            margin-left={"0.25em"}
            margin-rigth={"0.25em"}
          >
            <Card elevation={3} sx={{ width: 0.5 }}>
              <CardContent>
                {" "}
                <Typography className={classes.name}>
                  {" "}
                  <strong>Kevin Abaskaran</strong>
                </Typography>
                <Typography className={classes.name} color="primary">
                  <Link href="github.com/Sivva2" underline="hover">
                    {" "}
                    <GitHubIcon fontSize="xs"></GitHubIcon> /Sivva2{" "}
                  </Link>
                </Typography>
              </CardContent>
              <CardActions>
                {/*                 <Button size="small" color="primary">
                  Learn More
                </Button> */}
              </CardActions>
            </Card>
            <Card elevation={3} sx={{ width: 0.5 }}>
              <CardContent>
                <Typography className={classes.name}>
                  <strong>Alexandro Lastra</strong>
                </Typography>
                <Typography className={classes.name} color="primary">
                  <Link
                    href="github.com/alexandrolastra"
                    underline="hover"
                    color="primary"
                  >
                    <GitHubIcon fontSize="xs"></GitHubIcon> /alexandrolastra{" "}
                  </Link>
                </Typography>
              </CardContent>
              {/*               <CardContent>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent> */}
            </Card>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};

export default ContactUs;

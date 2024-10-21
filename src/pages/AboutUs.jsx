import React from "react";
import { Typography, Container, Paper, Card, Box } from "@mui/material";
import classes from "../styles/Login.module.css";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";

const AboutUs = () => {
  return (
    <div>
      <Container component="main" maxWidth="md">
        <Box className={classes.paragraphBox}>
          <Typography variant="h5" component="h1" gutterBottom>
            <h1>About Us</h1>
            Welcome to our web development project by
            <strong> Kevin Abaskaran</strong> &{" "}
            <strong>Alexandro Lastra</strong>.
          </Typography>
          <Typography variant="h5" component="h1" gutterBottom>
            Feel free to explore our work and contact us via{" "}
            <GitHubIcon></GitHubIcon> GitHub:
          </Typography>
        </Box>
        <div class="MuiPaper-root">
          <Paper elevation={3} square={false} className={classes.terms}>
            <Box className={classes.profile}>
              <Card>
                {" "}
                <Typography className={classes.name}>
                  {" "}
                  <strong>Kevin Abaskaran</strong>
                </Typography>
                <Typography className={classes.name}>
                  <Link href="github.com/Sivva2" underline="hover">
                    {" "}
                    <GitHubIcon fontSize="xs"></GitHubIcon> /Sivva2{" "}
                  </Link>
                </Typography>
              </Card>
            </Box>

            <Box className={classes.profile}>
              <Card>
                <Typography className={classes.name}>
                  {" "}
                  <strong>Alexandro Lastra</strong>
                </Typography>
                <Typography className={classes.name}>
                  <Link href="github.com/alexandrolastra" underline="hover">
                    <GitHubIcon fontSize="xs"></GitHubIcon> /alexandrolastra{" "}
                  </Link>
                </Typography>
              </Card>
            </Box>
          </Paper>
        </div>
      </Container>

      <Container component="main" maxWidth="md">
        <Paper elevation={3} square={false} className={classes.terms}>
          <Box p={3}>
            <Typography variant="h5" component="h1" gutterBottom>
              Welcome to Recipe MERN
            </Typography>

            <Typography variant="body1">
              Our mission is to provide a platform where users can share and
              discover new recipes. We believe that cooking is an art that
              brings people together, and we aim to foster a community of food
              enthusiasts who can learn from each other. Whether you are a
              professional chef or a home cook, Recipe MERN is the place for you
              to explore new culinary horizons.
            </Typography>
            <Typography variant="body1">
              Our platform offers a wide range of features to enhance your
              cooking experience. You can search for recipes by ingredients,
              cuisine, or dietary preferences. Each recipe comes with detailed
              instructions, ingredient lists, and nutritional information to
              help you make informed choices. You can also save your favorite
              recipes, create shopping lists, and share your culinary creations
              with the community.
            </Typography>
            <Typography variant="body1">
              We are committed to providing a safe and inclusive environment for
              all users. We do not tolerate any form of harassment,
              discrimination, or hate speech. If you encounter any inappropriate
              behavior, please report it to us immediately. We will take
              appropriate action to ensure that our community remains welcoming
              and respectful.
            </Typography>
            <Typography variant="body1">
              Our team is constantly working to improve the platform and add new
              features. We value your feedback and suggestions, so please do not
              hesitate to reach out to us with your ideas. Together, we can make
              Recipe MERN the best place for food lovers to connect and share
              their passion for cooking.
            </Typography>
            <Typography variant="body1">
              Thank you for being a part of our community. We hope you enjoy
              using Recipe MERN and find inspiration in the recipes shared by
              our members. Happy cooking!
            </Typography>
            <Typography variant="body1">
              If you have any questions or need assistance, please visit our
              Help Center or contact our support team. We are here to help you
              make the most of your experience on Recipe MERN.
            </Typography>
            <Typography variant="body1">
              Stay connected with us on social media for the latest updates,
              tips, and recipes. Follow us on Facebook, Twitter, and Instagram
              to join the conversation and share your culinary adventures with
              the world.
            </Typography>
            <Typography variant="body1">
              We look forward to seeing the delicious dishes you create and
              share on Recipe MERN. Let's cook, share, and enjoy the art of
              cooking together!
            </Typography>
            <Link to={"/signup"}>Back to Signup</Link>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};

export default AboutUs;

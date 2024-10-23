import React from "react";
import {
  Typography,
  Container,
  Paper,
  Card,
  CardContent,
  Box,
  Button,
} from "@mui/material";
import CardActions from "@mui/material/CardActions";
import classes from "../styles/Login.module.css";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Margin, Padding } from "@mui/icons-material";

const AboutUs = () => {
  return (
    <div>
      <Container
        component="main"
        sx={{ marginTop: "5em", marginBottom: "5em" }}
      >
        <Paper elevation={5} square={false} className={classes.terms}>
          <Typography variant="h6" component="h1" gutterBottom>
            <h1>About Us</h1>
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
            </Card>
          </Box>

          <Card elevation={3} sx={{ width: 1 }}>
            <Box p={6}>
              <Typography variant="h5" component="h3" paragraph>
                <strong> Welcome to Our Recipe MERN </strong>
              </Typography>

              <Typography variant="body1" align="left" paragraph>
                Our mission is to provide a platform where users can share and
                discover new recipes. We believe that cooking is an art that
                brings people together, and we aim to foster a community of food
                enthusiasts who can learn from each other. Whether you are a
                professional chef or a home cook, Recipe MERN is the place for
                you to explore new culinary horizons.
              </Typography>
              <Typography variant="body1" align="left" paragraph>
                Our platform offers a wide range of features to enhance your
                cooking experience. You can search for recipes by ingredients,
                cuisine, or dietary preferences. Each recipe comes with detailed
                instructions, ingredient lists, and nutritional information to
                help you make informed choices. You can also save your favorite
                recipes, create shopping lists, and share your culinary
                creations with the community.
              </Typography>
              <Typography variant="body1" align="left" paragraph>
                We are committed to providing a safe and inclusive environment
                for all users. We do not tolerate any form of harassment,
                discrimination, or hate speech. If you encounter any
                inappropriate behavior, please report it to us immediately. We
                will take appropriate action to ensure that our community
                remains welcoming and respectful.
              </Typography>
              <Typography variant="body1" align="left" paragraph>
                Our team is constantly working to improve the platform and add
                new features. We value your feedback and suggestions, so please
                do not hesitate to reach out to us with your ideas. Together, we
                can make Recipe MERN the best place for food lovers to connect
                and share their passion for cooking.
              </Typography>
              <Typography variant="body1" align="left" paragraph>
                Thank you for being a part of our community. We hope you enjoy
                using Recipe MERN and find inspiration in the recipes shared by
                our members. Happy cooking!
              </Typography>
              <Typography variant="body1" align="left" paragraph>
                If you have any questions or need assistance, please visit our
                Help Center or contact our support team. We are here to help you
                make the most of your experience on Recipe MERN.
              </Typography>
              <Typography variant="body1" align="left" paragraph>
                Stay connected with us on social media for the latest updates,
                tips, and recipes. Follow us on Facebook, Twitter, and Instagram
                to join the conversation and share your culinary adventures with
                the world.
              </Typography>
              <Typography variant="body1" align="left" paragraph>
                We look forward to seeing the delicious dishes you create and
                share on Recipe MERN. Let's cook, share, and enjoy the art of
                cooking together!
              </Typography>

              <Typography variant="body1" align="right" paragraph>
                {"    "}
                <strong> - Kevin && Alexandro </strong>
              </Typography>
            </Box>
          </Card>
        </Paper>
      </Container>
    </div>
  );
};

export default AboutUs;

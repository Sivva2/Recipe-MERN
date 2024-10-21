import React from "react";
import { Typography, Container, Paper, Box } from "@mui/material";
import classes from "../styles/Login.module.css";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      <h1>About Us</h1>

      <Box className={classes.home}> </Box>
      <Title order={1} className={classes.title}>
        About Us
      </Title>
      <Box className={classes.paragraphBox}>
        <Text className={classes.paragraph}>
          Welcome to our web development project by
          <strong> Kevin Abaskaran</strong> & <strong>Alexandro Lastra</strong>.
        </Text>
        <Text className={classes.paragraph}>
          Feel free to explore our work and contact us via GitHub:
        </Text>
        <Divider my="sm" />
        <Group position="center" spacing="xl" className={classes.team}>
          <Box className={classes.profile}>
            <Avatar src={github} alt="Kevin Abaskaran" size={80} radius="xl" />
            <Text className={classes.name}>Kevin Abaskaran</Text>
            <Anchor
              href="https://www.github.com/Sivva2"
              target="_blank"
              className={classes.githubLink}
            >
              <IconBrandGithub size={20} /> github.com/Sivva2
            </Anchor>
          </Box>

          <Box className={classes.profile}>
            <Avatar src={github} alt="Alexandro Lastra" size={80} radius="xl" />
            <Text className={classes.name}>Alexandro Lastra</Text>
            <Anchor
              href="https://www.github.com/alexandrolastra"
              target="_blank"
              className={classes.githubLink}
            >
              <IconBrandGithub size={20} /> github.com/alexandrolastra
            </Anchor>
          </Box>
        </Group>
        <Divider my="sm" />
      </Box>

      <Container component="main" maxWidth="md">
        <Paper elevation={3} className={classes.terms}>
          <Box p={3}>
            <Typography variant="h5" component="h1" gutterBottom>
              Welcome to Recipe MERN
            </Typography>

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
            <Typography variant="body1" paragraph>
              Our mission is to provide a platform where users can share and
              discover new recipes. We believe that cooking is an art that
              brings people together, and we aim to foster a community of food
              enthusiasts who can learn from each other. Whether you are a
              professional chef or a home cook, Recipe MERN is the place for you
              to explore new culinary horizons.
            </Typography>
            <Typography variant="body1" paragraph>
              Our platform offers a wide range of features to enhance your
              cooking experience. You can search for recipes by ingredients,
              cuisine, or dietary preferences. Each recipe comes with detailed
              instructions, ingredient lists, and nutritional information to
              help you make informed choices. You can also save your favorite
              recipes, create shopping lists, and share your culinary creations
              with the community.
            </Typography>
            <Typography variant="body1" paragraph>
              We are committed to providing a safe and inclusive environment for
              all users. We do not tolerate any form of harassment,
              discrimination, or hate speech. If you encounter any inappropriate
              behavior, please report it to us immediately. We will take
              appropriate action to ensure that our community remains welcoming
              and respectful.
            </Typography>
            <Typography variant="body1" paragraph>
              Our team is constantly working to improve the platform and add new
              features. We value your feedback and suggestions, so please do not
              hesitate to reach out to us with your ideas. Together, we can make
              Recipe MERN the best place for food lovers to connect and share
              their passion for cooking.
            </Typography>
            <Typography variant="body1" paragraph>
              Thank you for being a part of our community. We hope you enjoy
              using Recipe MERN and find inspiration in the recipes shared by
              our members. Happy cooking!
            </Typography>
            <Typography variant="body1" paragraph>
              If you have any questions or need assistance, please visit our
              Help Center or contact our support team. We are here to help you
              make the most of your experience on Recipe MERN.
            </Typography>
            <Typography variant="body1" paragraph>
              Stay connected with us on social media for the latest updates,
              tips, and recipes. Follow us on Facebook, Twitter, and Instagram
              to join the conversation and share your culinary adventures with
              the world.
            </Typography>
            <Typography variant="body1" paragraph>
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

import React, { useRef, useEffect, useState } from "react";
import { AppBar, Button, Toolbar, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

function Footer() {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (
        scrollTop + windowHeight >= documentHeight ||
        documentHeight <= windowHeight
      ) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/*       <h6> Footer Start </h6> */}
      <AppBar
        position="static"
        component="footer"
        ref={footerRef}
        sx={{
          top: "auto",
          bottom: 0,
          display: isVisible ? "block" : "none",
        }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="body1" color="inherit">
              &copy; {new Date().getFullYear()} Recipe MERN
            </Typography>
          </Box>
          <Box>
            {/*      <Link href="/privacy" color="inherit" sx={{ mx: 1 }}>
              Privacy Policy
            </Link> */}
            <Link to="/terms" color="inherit" sx={{ mx: 1 }}>
              Terms of Service
            </Link>
            <Link to="/contact">
              <Button variant="contained" color="primary">
                Contact Us
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Footer;

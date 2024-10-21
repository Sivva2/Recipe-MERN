<<<<<<< HEAD
import React, { useRef, useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Box, Link } from "@mui/material";

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
      <h6> Footer Start </h6>
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
            <Link href="/privacy" color="inherit" sx={{ mx: 1 }}>
              Privacy Policy
            </Link>
            <Link href="/terms" color="inherit" sx={{ mx: 1 }}>
              Terms of Service
            </Link>
            <Link href="/contact" color="inherit" sx={{ mx: 1 }}>
              Contact Us
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      Footer End;
    </>
  );
}

export default Footer;
=======
const Footer = () => {
    return (
      <>
        <h1>Home</h1>
      </>
    );
  };
  
  export default Footer
>>>>>>> main

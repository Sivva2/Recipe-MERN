import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { React } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import { AuthProviderWrapper } from "./context/auth.context.jsx"; // <== IMPORT

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF8A00",
    },
    secondary: {
      main: "#009688",
    },
    background: {
      default: "#f9f9f9",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h4: {
      fontWeight: 600,
      fontSize: "1.8rem",
    },
    body1: {
      fontSize: "1rem",
      color: "#333",
    },
  },
});

createRoot(document.getElementById("root")).render(
  /*  <React.StrictMode> */
  <Router>
    <AuthProviderWrapper>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </AuthProviderWrapper>
  </Router>
  /*  </React.StrictMode> */
);

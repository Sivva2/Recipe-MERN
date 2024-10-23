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
    secondary: { main: "#F5832E" }, // E5832E  Orange <Box color="secondary.main"> <--- replace this with the custom    color you wanna use.
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

import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider
    theme={responsiveFontSizes(
      createTheme({
        palette: {
          mode: "dark",
        },
      })
    )}
  >
    <App />
  </ThemeProvider>
);

import { createTheme } from "@mui/material";



export const theme = createTheme({
  typography: {
    h1: {
      fontSize: "clamp(2rem, 5vw, 3rem)",
    },
    body2: {
      fontSize: "clamp(1.2rem, 5vw, 1.2rem)",
      lineHeight: "1.9rem",
    },
  },
  palette: {
    primary: {
      main: "#db6e29",
      light: "#fff",
      dark: "#f4a371",
      contrastText: "#ffffff2f",
    },
    secondary: {
      main: "#8d8b8b",
      light: "#fbf7f795",
      dark: "#000",
      contrastText: "#ebecee",
    },

    info: {
      main: "#db6e29",
      contrastText: "#fff",
    },
  },
});

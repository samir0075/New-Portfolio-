"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline"; // Import this if you are going to use it in your RootLayout

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#181821", // Primary color
    },
    secondary: {
      main: "#fff", // Secondary color
    },
    background: {
      default: "#181C14", // Sets the background color for the app
    },
    text: {
      primary: "#fff", // Default text color (white)
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily, // Set font family to Roboto
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#181C14", // Set body background color globally
          color: "#fff", // Set the default text color to white
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa", // Info alert color
          }),
        }),
      },
    },
  },
});

export default theme;

"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline"; // Import this if you are going to use it in your RootLayout

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const black = "#181C14";
const white = "#FFFFFF"
const voilet = "#a855f7"
const grey = "#64748b"
const pink = "#f8b3d2"

const theme = createTheme({
  palette: {
    primary: {
      main: black,

    },
    secondary: {
      main: white, // Secondary color
    },
    custom: {
      voilet: voilet,
      grey: grey,
      pink: pink,
    },
    background: {
      default: black, // Sets the background color for the app
    },
    text: {
      primary: white, // Default text color (white)
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily, // Set font family to Roboto
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: black, // Set body background color globally
          color: white, // Set the default text color to white
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

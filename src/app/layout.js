import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../app/theme";
import Head from "next/head";

export const metadata = {
  title: "Samir Portfolio"
}

export default function RootLayout(props) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <body>

        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {props.children}
        </ThemeProvider>
      </body>
    </html>
  );
}

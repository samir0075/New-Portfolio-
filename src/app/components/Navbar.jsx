import { Grid2, Typography } from "@mui/material";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

const Navbar = () => {
  return (
    <Grid2
      container
      justifyContent="space-between"
      alignItems="center"
      sx={{ px: 4, py: 2 }}
    >
      <Grid2>
        <Typography sx={{ fontWeight: "600", fontSize: "4rem" }}>Ss</Typography>
      </Grid2>
      <Grid2 container spacing={{ xs: 2, sm: 5 }}>
        <Link
          href="https://github.com/samir0075/New-Portfolio-"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon sx={{ color: "#fff" }} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/samir-singh-293b4510b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon sx={{ color: "#fff" }} />
        </Link>

        <Link
          href="https://x.com/Samirsingh815"
          target="_blank"
          rel="noopener noreferrer"
        >
          <XIcon sx={{ color: "#fff" }} />
        </Link>

        <InstagramIcon sx={{ color: "#fff" }} />
      </Grid2>
    </Grid2>
  );
};

export default Navbar;

import { Grid2, Typography } from "@mui/material";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

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
        <LinkedInIcon />
        <XIcon />
        <GitHubIcon />
        <InstagramIcon />
      </Grid2>
    </Grid2>
  );
};

export default Navbar;

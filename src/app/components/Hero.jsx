"use client";

import { Box, Button, Grid2, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Samir.png";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const mobileDevice = useMediaQuery("(max-width: 500px)");

  return (
    <Grid2
      container
      sx={{ height: { xs: "100%", md: "calc(100vh - 128px)" } }}
      wrap="wrap-reverse"
    >
      <Grid2
        container
        direction="column"
        alignItems={{ xs: "center", md: "flex-start" }}
        justifyContent="center"
        sx={{ px: 4, width: { xs: "100%", sm: "50%", md: "50%", xl: "50%" } }}
      >
        <Typography
          sx={{ fontSize: { xs: "3rem", md: "4rem" }, fontWeight: "300" }}
        >
          Samir Singh
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "1.5rem", md: "2rem" },
            fontWeight: "400",
            background: "linear-gradient(to right, #f8b3d2, #64748b, #a855f7)",
            webkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Frontend Developer
        </Typography>
        <Typography sx={{ mt: 2 }}>{HERO_CONTENT}</Typography>

        <Box
          sx={{ background: "#FFFFFF", my: 4, borderRadius: "10px", p: 0.5 }}
        >
          <Link
            href="/Samir_Singh.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              sx={{
                background: "#FFF",
                fontWeight: "600",
                background: "#a855f7",
                webkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Download Resume
            </Button>
          </Link>
        </Box>
      </Grid2>
      <Grid2
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ px: 4, width: { xs: "100%", sm: "50%", md: "50%", xl: "50%" } }}
      >
        <Image
          src={profilePic}
          loading="lazy"
          alt="Picture of the author"
          style={{
            borderRadius: "100%",
            overflow: "auto",
            objectFit: "contain",
            width: mobileDevice ? "230px" : "400px",
            height: mobileDevice ? "200px" : "345px",
          }}
          placeholder="blur"
        />
      </Grid2>
    </Grid2>
  );
};

export default Hero;

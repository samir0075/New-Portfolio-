"use client";

import { Box, Button, duration, Grid2, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { HERO_CONTENT } from "../constants";
import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useTheme } from "@emotion/react";

const Hero = () => {

  const theme = useTheme();

  const mobileDevice = useMediaQuery("(max-width: 500px)");

  const motionContainerFromLeft = {
    hidden: {
      x: 25,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,

      transition: {
        type: "spring", stiffness: 15,

        //  Variant 2
        when: "beforChildren"
      }
    }

  }

  const motionContainerFromRight = {
    hidden: {
      x: -25,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring", stiffness: 15,
      }
    }

  }

  // Variant 2

  const childrenMotion = {
    hidden: {
      y: -10,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 2,
      transition: {
        delay: 2,
        duration: 5
      }
    }
  }

  //For Download Resume Button

  const buttonHover = {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px #a855f7",
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {
        duration: 1,
        repeat: Infinity,  // 5 times , Infinity also we can put 
      }
    }
  }

  //For Description

  const descriptionHover = {
    hover: {
      scale: 1.1,
      originX: 0,
      transition: {
        duration: 3
      }
    }
  }

  return (
    <Grid2
      // component={motion.div}
      // whileInView={{ opacity: 1, x: 0 }}
      // initial={{ opacity: 0, x: -25 }}
      // animation={{ duration: 1.5 }}
      container
      sx={{ height: { xs: "100%", md: "calc(100vh - 128px)" } }}
      wrap="wrap-reverse"
    >
      <Grid2
        component={motion.div}
        variants={motionContainerFromLeft}
        initial="hidden"
        whileInView="visible"
        container
        direction="column"
        alignItems={{ xs: "center", md: "flex-start" }}
        justifyContent="center"
        sx={{ px: 4, width: { xs: "100%", sm: "50%", md: "50%", xl: "50%" } }}
      >
        <Typography component={motion.div}
          variants={childrenMotion}
          initial="hidden"
          animate="visible"

          sx={{ fontSize: { xs: "3rem", md: "4rem" }, fontWeight: "300" }}
        >
          Samir
          Singh
        </Typography>


        <TypeAnimation
          sequence={["Frontend Developer", 3000, "Frontend Develope", 500, "Frontend Develop", 500, "Frontend Develo", 500, "Frontend Devel", 500, "Frontend Deve", 500, "Frontend Dev", 500, "Frontend De", 500, "Frontend D", 500, "Frontend Developer", 3000]}
          style={{
            fontSize: !mobileDevice ? '2rem' : "1.5rem",
            fontWeight: "400",
            background: `linear-gradient(to right, ${theme.palette.custom.pink}, ${theme.palette.custom.grey}, ${theme.palette.custom.voilet})`,
            webkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
          deletionSpeed={100}
          repeat={Infinity}
          cursor={false}
        />

        <Typography
          component={motion.div}
          variants={descriptionHover}
          whileHover="hover"

          sx={{ mt: 2 }}>{HERO_CONTENT}</Typography>

        <Box
          component={motion.div}
          variants={buttonHover}
          whileHover="hover"
          sx={{ background: `${theme.palette.secondary.main}`, my: 4, borderRadius: "10px", p: 0.5 }}
        >
          <Link
            href="/Samir_Singh.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              sx={{
                background: `${theme.palette.secondary.main}`,
                fontWeight: "600",
                background: `${theme.palette.custom.voilet}`,
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
        component={motion.div}
        variants={motionContainerFromRight}
        initial="hidden"
        whileInView="visible"
        sx={{ px: 4, width: { xs: "100%", sm: "50%", md: "50%", xl: "50%" } }}
      >
        <img
          src="/assets/Samir.png"
          loading="lazy"
          alt="Picture of the author"
          style={{
            borderRadius: "50%",
            overflow: "auto",
            objectFit: "cover",
            width: mobileDevice ? "200px" : "350px",
            height: mobileDevice ? "200px" : "350px",
          }}
          placeholder="blur"
        />
      </Grid2>
    </Grid2>
  );
};

export default Hero;

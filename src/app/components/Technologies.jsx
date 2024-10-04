"use client"

import { Box, duration, Grid2, Typography, useTheme } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

const Technologies = () => {

  const theme = useTheme();

  const iconVariants = (duration) => ({
    initial: {
      y: -10
    },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse"
      }
    },
  })


  const techVariantsHover = {

    hover: {
      scale: 1.2, transition: {
        duration: 1.5,
      }
    }

  }
  return (
    <>
      <Grid2>
        <Typography
          component={motion.div}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          sx={{
            textAlign: "center",
            fontWeight: "300",
            fontSize: "2rem",
            my: 2,
          }}
        >
          Technologies
        </Typography>

        <Grid2
          // component={motion.div}
          // whileInView={{ opacity: 1, x: 0 }}
          // initial={{ opacity: 0, x: -25 }}
          // animation={{ duration: 1.5 }}
          container
          justifyContent={{ xs: "center", lg: "space-between" }}
          alignItems="center"
          spacing={5}
          wrap="wrap"
          sx={{ my: 5, px: 4 }}

        >
          {/* {Images?.map((image) => (
            <motion.img
              key={image?.id}
              src={image?.name}
              alt="Technology Logo"
              style={{
                borderRadius: "10%",
                overflow: "auto",
                objectFit: "contain",
                 background: `${theme.palette.secondary.main}`,
                width: "100px",
                height: "100px",
                padding: "10px",
                border: "4px solid #FFF",
              }}
               
               variants={techVariantsHover}
               whileHover="hover"
            />
          ))} */}

          <motion.img src="/assets/html.png" alt="Technology Images" variants={iconVariants(2.5)} initial="initial" animate="animate" style={{
            borderRadius: "10%",
            overflow: "auto",
            objectFit: "contain",
            background: `${theme.palette.secondary.main}`,
            width: "100px",
            height: "100px",
            padding: "10px",
            border: "4px solid #FFF",
          }} />


          <motion.img src="/assets/css.png" alt="Technology Images" variants={iconVariants(3)} initial="initial" animate="animate" style={{
            borderRadius: "10%",
            overflow: "auto",
            objectFit: "contain",
            background: `${theme.palette.secondary.main}`,
            width: "100px",
            height: "100px",
            padding: "10px",
            border: "4px solid #FFF",
          }} />


          <motion.img src="/assets/js.png" alt="Technology Images" variants={iconVariants(3.5)} initial="initial" animate="animate" style={{
            borderRadius: "10%",
            overflow: "auto",
            objectFit: "contain",
            background: `${theme.palette.secondary.main}`,
            width: "100px",
            height: "100px",
            padding: "10px",
            border: "4px solid #FFF",
          }} />


          <motion.img src="/assets/react.png" alt="Technology Images" variants={iconVariants(4)} initial="initial" animate="animate" style={{
            borderRadius: "10%",
            overflow: "auto",
            objectFit: "contain",
            background: `${theme.palette.secondary.main}`,
            width: "100px",
            height: "100px",
            padding: "10px",
            border: "4px solid #FFF",
          }} />


          <motion.img src="/assets/next.png" alt="Technology Images" variants={iconVariants(4.5)} initial="initial" animate="animate" style={{
            borderRadius: "10%",
            overflow: "auto",
            objectFit: "contain",
            background: `${theme.palette.secondary.main}`,
            width: "100px",
            height: "100px",
            padding: "10px",
            border: "4px solid #FFF",
          }} />


          <motion.img src="/assets/mui.png" alt="Technology Images" variants={iconVariants(5)} initial="initial" animate="animate" style={{
            borderRadius: "10%",
            overflow: "auto",
            objectFit: "contain",
            background: `${theme.palette.secondary.main}`,
            width: "100px",
            height: "100px",
            padding: "10px",
            border: "4px solid #FFF",
          }} />


          <motion.img src="/assets/redux.png" alt="Technology Images" variants={iconVariants(5.5)} initial="initial" animate="animate" style={{
            borderRadius: "10%",
            overflow: "auto",
            objectFit: "contain",
            background: `${theme.palette.secondary.main}`,
            width: "100px",
            height: "100px",
            padding: "10px",
            border: "4px solid #FFF",
          }}
          />


          <motion.img src="/assets/git.png" alt="Technology Images" variants={iconVariants(6)} initial="initial" animate="animate" style={{
            borderRadius: "10%",
            overflow: "auto",
            objectFit: "contain",
            background: `${theme.palette.secondary.main}`,
            width: "100px",
            height: "100px",
            padding: "10px",
            border: "4px solid #FFF",
          }} />

        </Grid2>
      </Grid2>
    </>
  );
};

export default Technologies;

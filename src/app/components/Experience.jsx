"use client";

import {
  Box,
  Button,
  Grid2,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";

import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {

  const theme = useTheme();

  const motionContainer = {
    hidden: {
      x: -25
    },
    visible: {
      x: 0,
      transition: {
        type: "spring", stiffness: 15,
      }
    }

  }
  return (
    <>
      <Grid2 >
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
          Experience
        </Typography>

        <Grid2 container justifyContent="center" alignItems="center"
          component={motion.div}
          variants={motionContainer}
          initial="hidden"
          whileInView="visible"
        >
          <Box sx={{ p: 4 }}>
            <Stepper orientation="vertical">
              {EXPERIENCES?.map((step, index) => (
                <Step key={step.id} expanded>
                  <StepLabel
                    sx={{
                      "& .MuiStepLabel-label": {
                        color: `${theme.palette.secondary.main}`,
                        fontWeight: "500",
                        fontSize: "1rem",
                        background: `linear-gradient(to right, ${theme.palette.custom.pink}, ${theme.palette.custom.grey}, ${theme.palette.custom.voilet})`,
                        webkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                      },
                    }}
                  >
                    {step.role} - {step.company} ({step.year})
                  </StepLabel>
                  <StepContent>
                    <Typography
                      // component={motion.div}
                      //  variants={motionContainer}
                      //   initial="hidden"
                      //   animate="visible"
                      sx={{ fontSize: "0.8rem", fontWeight: "300", m: 1 }}
                    >
                      {step.description}
                    </Typography>
                    {step?.technologies?.map((tech) => (
                      <Button
                        // component={motion.div}
                        // variants={motionContainer}
                        //   initial="hidden"
                        // animate="visible"
                        key={tech}
                        sx={{
                          fontSize: "0.8rem",
                          fontWeight: "500",
                          background: `${theme.palette.secondary.main}`,
                          color: `${theme.palette.custom.voilet}`,
                          m: 1,
                        }}
                      >
                        {tech}
                      </Button>
                    ))}
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </Box>
        </Grid2>
      </Grid2>
    </>
  );
};

export default Experience;

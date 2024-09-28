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
} from "@mui/material";
import React, { useState } from "react";

import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <>
      <Grid2>
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "300",
            fontSize: "2rem",
            my: 2,
          }}
        >
          Experience
        </Typography>

        <Grid2 container justifyContent="center" alignItems="center">
          <Box sx={{ p: 4 }}>
            <Stepper orientation="vertical">
              {EXPERIENCES?.map((step, index) => (
                <Step key={step.id} expanded>
                  <StepLabel
                    sx={{
                      "& .MuiStepLabel-label": {
                        color: "#fff",
                        fontWeight: "500",
                        fontSize: "1rem",
                        background:
                          "linear-gradient(to right, #f8b3d2, #64748b, #a855f7)",
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
                      sx={{ fontSize: "0.8rem", fontWeight: "300", m: 1 }}
                    >
                      {step.description}
                    </Typography>
                    {step?.technologies?.map((tech) => (
                      <Button
                        key={tech}
                        sx={{
                          fontSize: "0.8rem",
                          fontWeight: "500",
                          background: "#fff",
                          color: "#a855f7",
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

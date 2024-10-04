"use client"

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Grid2,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Project = () => {

  const theme = useTheme();
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
          Projects
        </Typography>

        <Grid2
          sx={{ p: 4 }}
          container
          justifyContent={{ xs: "center", sm: "center", lg: "space-between" }}
          spacing={4}
          wrap="wrap"
        >
          {PROJECTS?.map((card) => (
            <Card
              key={card.id}
              sx={{
                background: `${theme.palette.primary.main}`,
                width: 250,
                boxShadow: "-2px -2px 10px #F5F5F7",
                transform: "scale(1)",
                transition: "transform 0.5s ease-in-out",
                "&:hover": {
                  transform: "scale(1.15)",
                },
              }}
            >
              <Typography
                sx={{
                  p: 2,
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  fontWeight: "500",
                  fontSize: "1rem",
                  background: `linear-gradient(to right, ${theme.palette.custom.pink}, ${theme.palette.custom.grey}, ${theme.palette.custom.voilet})`,
                  webkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                <Tooltip title={card?.title}>{card?.title}</Tooltip>
              </Typography>

              <CardContent>
                <Typography
                  sx={{
                    // color: "text.secondary",
                    fontSize: "0.8rem",
                    fontWeight: "300",
                    height: "100px",
                  }}
                >
                  {card.description}
                </Typography>
              </CardContent>
              <CardActions
                disableSpacing
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap !important",
                }}
              >
                {card?.technologies?.map((tech) => (
                  <Chip
                    key={tech}
                    sx={{
                      fontSize: "0.6rem",
                      fontWeight: "500",
                      background: `${theme.palette.secondary.main}`,
                      color: `${theme.palette.custom.voilet}`,
                      m: 1,
                    }}
                    label={tech}
                  />
                ))}
              </CardActions>
            </Card>
          ))}
        </Grid2>
      </Grid2>
    </>
  );
};

export default Project;

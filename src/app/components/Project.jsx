import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Grid2,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { PROJECTS } from "../constants";

const Project = () => {
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
                background: "#181C14 !important",
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
                  background:
                    "linear-gradient(to right, #f8b3d2, #64748b, #a855f7)",
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
                      background: "#fff",
                      color: "#a855f7",
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

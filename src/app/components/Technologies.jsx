import { Grid2, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import next from "../assets/next.png";
import git from "../assets/git.png";
import mui from "../assets/mui.png";

const Technologies = () => {
  const Images = [
    {
      id: 1,
      name: html,
    },
    {
      id: 2,
      name: css,
    },
    {
      id: 3,
      name: js,
    },
    {
      id: 4,
      name: react,
    },
    {
      id: 5,
      name: redux,
    },
    {
      id: 6,
      name: next,
    },
    {
      id: 7,
      name: git,
    },
    {
      id: 7,
      name: mui,
    },
  ];
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
          Technologies
        </Typography>

        <Grid2
          container
          justifyContent={{ xs: "center", lg: "space-between" }}
          alignItems="center"
          spacing={5}
          wrap="wrap"
          sx={{ my: 5, px: 4 }}
        >
          {Images?.map((image) => (
            <Image
              key={image.id}
              src={image.name}
              loading="lazy"
              alt="Picture of the author"
              style={{
                borderRadius: "10%",
                overflow: "auto",
                objectFit: "contain",
                background: "#fff",
                width: "100px",
                height: "100px",
                padding: "10px",
                border: "4px solid #FFF",
              }}
            />
          ))}
        </Grid2>
      </Grid2>
    </>
  );
};

export default Technologies;

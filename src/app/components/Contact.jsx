import { Grid2, Typography } from "@mui/material";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import Link from "next/link";

const Contact = () => {
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
          Get in Touch
        </Typography>

        <Grid2
          container
          justifyContent="center"
          direction="column"
          alignItems="center"
        >
          <Link
            href="mailto:samir.singh@example.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mt: 2,
                fontWeight: "300",
                color: "#fff !important",
              }}
            >
              <EmailIcon /> samirsingh0075@gmail.com
            </Typography>
          </Link>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              m: 2,
              fontWeight: "300",
            }}
          >
            <CallIcon /> +91-7239066815
          </Typography>
        </Grid2>
      </Grid2>
    </>
  );
};

export default Contact;

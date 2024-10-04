"use client"

import { Grid2, Typography, useTheme } from "@mui/material";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import Link from "next/link";
import { motion } from "framer-motion";

const Contact = () => {

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
              component={motion.div}
              whileHover={{ scale: 1.2 }}
              initial={{ scale: 1 }}

              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mt: 2,
                fontWeight: "300",
                color: `${theme.palette.secondary.main}`,
              }}
            >
              <EmailIcon /> samirsingh0075@gmail.com
            </Typography>
          </Link>
          <Typography
            component={motion.div}
            whileHover={{
              scale: 1.2,

            }}
            initial={{ scale: 1 }}
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

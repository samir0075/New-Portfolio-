import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";
import FloatingButton from "./components/FloatingButton";

export default function Home() {
  const body_external = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Box>
      <Navbar />
      <Box sx={body_external}>
        <Box sx={{ maxWidth: "1400px" }}>
          <Hero />
          <Technologies />
          <Experience />
          <Project />
          <Contact />
          <FloatingButton />
        </Box>
      </Box>
    </Box>
  );
}

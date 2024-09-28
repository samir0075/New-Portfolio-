"use client";

import { useState, useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const FloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "40px",
        right: "40px",
        backgroundColor: "#6200EA",
        color: "#fff",
        border: "none",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        display: isVisible ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "24px",
        cursor: "pointer",
        zIndex: 1000,
      }}
    >
      <KeyboardArrowUpIcon />
    </button>
  );
};

export default FloatingButton;

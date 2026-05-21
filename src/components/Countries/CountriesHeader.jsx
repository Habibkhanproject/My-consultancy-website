import * as React from "react";
import { Box, Typography } from "@mui/material";

export default function CountriesHeader() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 900,
        // mx: "auto",
        textAlign: "left", // ✅ left align
        px: { xs: 2, sm: 3, md: 6 },
        py: { xs: 4, md: 6 },
      }}
    >
      {/* Small Header */}
      <Typography
        sx={{
          fontSize: { xs: 12, sm: 14 },
          fontWeight: 600,
          color: "#0058be",
          letterSpacing: 1,
          textTransform: "uppercase",
          mb: 1,
        }}
      >
        Study Abroad
      </Typography>

      {/* Large Header */}
      <Typography
        sx={{
          fontSize: { xs: "1.6rem", sm: "2.2rem", md: "2.8rem" },
          fontWeight: "bold",
          lineHeight: 1.3,
          mb: 2,
        }}
      >
        Explore Top Countries for Your Education
      </Typography>

      {/* Paragraph */}
      <Typography
        sx={{
          fontSize: { xs: 14, sm: 16 },
          color: "text.secondary",
          maxWidth: 650,
        }}
      >
        Discover world-class universities, diverse cultures, and global
        opportunities. Choose the best destination that matches your academic
        goals and career ambitions.
      </Typography>
    </Box>
  );
}

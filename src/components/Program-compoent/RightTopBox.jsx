import * as React from "react";
import { Box, Typography, Button, Paper } from "@mui/material";

export default function RightTopBox() {
  return (
    <Box
      sx={{
        p: { xs: 2, md: 2.5 }, // responsive padding
        borderRadius: 3,
        boxShadow: 3,
        bgcolor: "#131b2e",
        color: "#fff",
      }}
    >
      {/* TOP HEADERS (LEFT + RIGHT) */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" }, // responsive align
          flexDirection: { xs: "column", sm: "row" }, // stack on mobile
          gap: { xs: 0.5, sm: 0 },
          mb: 2,
          color: "#ffe081",
        }}
      >
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: { xs: "14px", sm: "16px" }, // responsive text
            letterSpacing: "0.5px",
            color: "#ffe081",
          }}
        >
          workspace_premium
        </Typography>

        <Typography
          sx={{
            fontWeight: 800,
            fontSize: { xs: "13px", sm: "15px" },
            letterSpacing: "0.5px",
            paddingLeft: { xs: 0, sm: "10px" }, // remove padding on mobile
          }}
        >
          FEATURED OPPORTUNITIES
        </Typography>
      </Box>

      {/* MAIN HEADER */}
      <Typography
        sx={{
          mb: 2,
          fontWeight: 900,
          fontSize: { xs: "1.3rem", sm: "1.6rem" }, // responsive size
          letterSpacing: "0.5px",
        }}
      >
        Fully-Funded Scholarships
      </Typography>

      {/* BLOCK 1 */}
      <Typography variant="body2">DAAD Germany</Typography>
      <Typography
        sx={{
          fontWeight: 600,
          color: "#faf9f8",
          transition: "0.3s ease",
          cursor: "pointer",
          fontSize: { xs: "14px", sm: "16px" },
          "&:hover": {
            color: "#a8841a",
          },
        }}
      >
        Master’s Scholarship for Public Policy
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        Deadline: Dec 15, 2024
      </Typography>

      {/* BLOCK 2 */}
      <Typography variant="body2">Fulbright Program</Typography>
      <Typography
        sx={{
          fontWeight: 600,
          color: "#faf9f8",
          transition: "0.3s ease",
          cursor: "pointer",
          fontSize: { xs: "14px", sm: "16px" },
          "&:hover": {
            color: "#a8841a",
          },
        }}
      >
        US Student Program (All Disciplines)
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        Deadline: Oct 08, 2024
      </Typography>

      {/* BLOCK 3 */}
      <Typography variant="body2">DAAD Germany</Typography>
      <Typography
        sx={{
          fontWeight: 600,
          color: "#faf9f8",
          transition: "0.3s ease",
          cursor: "pointer",
          fontSize: { xs: "14px", sm: "16px" },
          "&:hover": {
            color: "#a8841a",
          },
        }}
      >
        Joint Masters in Digital Arts
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        Deadline: Jan 31, 2025
      </Typography>

      {/* BUTTON */}
      <Button
        fullWidth
        variant="contained"
        sx={{
          mt: 1,
          bgcolor: "#7c610e",
          borderRadius: 2,
          py: { xs: 1, sm: 1.2 }, // responsive height
          fontSize: { xs: "13px", sm: "14px" },
        }}
      >
        Explore Features
      </Button>
    </Box>
  );
}
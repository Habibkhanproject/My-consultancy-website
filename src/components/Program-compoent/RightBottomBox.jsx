import * as React from "react";
import { Box, Typography, TextField, MenuItem, Button } from "@mui/material";

export default function RightBottomBox() {
  return (
    <Box
      sx={{
        p: { xs: 2, sm: 2.5, md: 3 }, // responsive padding
        borderRadius: 3,
        boxShadow: 3,
        width: "100%",
      }}
    >
      {/* HEADER */}
      <Typography
        variant="h6"
        fontWeight="bold"
        sx={{
          fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" }, // responsive font
        }}
      >
        Get Personalized Advice
      </Typography>

      {/* DESCRIPTION TEXT */}
      <Typography
        variant="body2"
        sx={{
          mt: 1,
          mb: 3,
          color: "gray",
          fontSize: { xs: "13px", sm: "14px" },
        }}
      >
        Speak with our expert consultants to map your path to academic success
      </Typography>

      {/* NAME FIELD */}
      <Typography
        fontWeight="600"
        sx={{ fontSize: { xs: "13px", sm: "14px" } }}
      >
        Name
      </Typography>
      <TextField
        fullWidth
        placeholder="Enter your name"
        sx={{ mt: 1, mb: 2 }}
        size="small" // better on mobile
      />

      {/* TARGET COUNTRY */}
      <Typography
        fontWeight="600"
        sx={{ fontSize: { xs: "13px", sm: "14px" } }}
      >
        Target Country
      </Typography>
      <TextField
        select
        fullWidth
        sx={{ mt: 1, mb: 2 }}
        size="small"
      >
        <MenuItem value="Pakistan">Pakistan</MenuItem>
        <MenuItem value="India">India</MenuItem>
        <MenuItem value="UAE">UAE</MenuItem>
      </TextField>

      {/* GRADUATE SECTION */}
      <Typography
        fontWeight="600"
        sx={{ fontSize: { xs: "13px", sm: "14px" } }}
      >
        Educational Level
      </Typography>

      <TextField
        select
        fullWidth
        sx={{ mb: 3 }}
        size="small"
      >
        <MenuItem value="Matric">Matric</MenuItem>
        <MenuItem value="Intermediate">Intermediate</MenuItem>
        <MenuItem value="Bachelors">Bachelors</MenuItem>
        <MenuItem value="Masters">Masters</MenuItem>
      </TextField>

      <Typography
        variant="body2"
        sx={{
          color: "gray",
          mb: 2,
          fontSize: { xs: "12px", sm: "13px" },
        }}
      >
        verified Accredited Counselors
      </Typography>

      {/* BUTTON */}
      <Button
        fullWidth
        variant="contained"
        sx={{
          bgcolor: "#0058be",
          borderRadius: 2,
          py: { xs: 1, sm: 1.2 }, // responsive height
          fontSize: { xs: "13px", sm: "14px" },
        }}
      >
        Submit
      </Button>
    </Box>
  );
}
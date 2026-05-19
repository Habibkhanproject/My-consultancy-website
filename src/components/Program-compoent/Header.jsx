import * as React from "react";
import { Box, Typography, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Header() {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#f5f7ff",
        p: { xs: 2, md: 4 },
      }}
    >
      {/* MAIN BOX */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 1300,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* LEFT SIDE */}
        <Box>
          <Typography
            variant="body2"
            sx={{
              color: "#0058be",
              fontWeight: 600,
              mb: 1,
              letterSpacing: 1,
            }}
          >
            ACADEMIC EXCELLENCE
          </Typography>

          <Typography variant="h4" fontWeight="bold">
            Find Your Ideal Program
          </Typography>
        </Box>

        {/* RIGHT SIDE (SEARCH BAR) */}
        <Box
          sx={{
            width: { xs: "100%", md: 450 },
          }}
        >
          <TextField
            fullWidth
            placeholder="Search here..."
            variant="outlined"
            sx={{
              bgcolor: "#fff",
              borderRadius: "10px",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#0058be" }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>

      {/* SPACE + LINE */}
      <Box
        sx={{
          mt: 3, // 👈 space between content and line
          borderBottom: "1px solid #e0e0e0",
        }}
      />
    </Box>
  );
}
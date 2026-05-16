import * as React from "react";
import {
  Box,
  Typography,
  Stack,
  TextField,
  InputAdornment,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import SearchIcon from "@mui/icons-material/Search";

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#0d1b2a",
        color: "#fff",
        py: { xs: 4, sm: 6 },
        px: { xs: 3, sm: 6, md: 8 },
      }}
    >
      {/* MAIN CONTAINER */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          gap: 4,
        }}
      >
        {/* BOX 1 */}
        <Box sx={{ flex: 1, minWidth: 220 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Global Scholars Hub
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: "#cbd5e1" }}>
            Your trusted partner in international education and scholarship
            placements since 2018.
          </Typography>

          <Stack direction="row" spacing={2}>
            <HomeIcon />
            <MailIcon />
            <PhoneIcon />
          </Stack>
        </Box>

        {/* BOX 2 */}
        <Box sx={{ flex: 1, minWidth: 180 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Quick Links
          </Typography>

          <Stack spacing={1} sx={{ color: "#cbd5e1" }}>
            <Typography>Study in UK</Typography>
            <Typography>Study in USA</Typography>
            <Typography>Scholarships</Typography>
            <Typography>Visa Guidance</Typography>
          </Stack>
        </Box>

        {/* BOX 3 */}
        <Box sx={{ flex: 1, minWidth: 180 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Legal
          </Typography>

          <Stack spacing={1} sx={{ color: "#cbd5e1" }}>
            <Typography>Privacy Policy</Typography>
            <Typography>Terms of Service</Typography>
            <Typography>Cookie Policy</Typography>
            <Typography>Accreditations</Typography>
          </Stack>
        </Box>

        {/* BOX 4 */}
        <Box sx={{ flex: 1, minWidth: 250 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Newsletter
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: "#cbd5e1" }}>
            Stay updated with the latest scholarship deadlines.
          </Typography>

          {/* ✅ FIXED TextField (ONLY place InputProps is used) */}
          <TextField
            fullWidth
            placeholder="Your Email Address"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#fff" }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <MailIcon sx={{ color: "#fff", cursor: "pointer" }} />
                </InputAdornment>
              ),
            }}
            sx={{
              input: { color: "#fff" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#334155" },
                "&:hover fieldset": { borderColor: "#64748b" },
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
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
        px: { xs: 2, sm: 4, md: 8 },
      }}
    >
      {/* MAIN CONTAINER */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: { xs: 3, sm: 4 },
        }}
      >
        {/* BOX 1 */}
        <Box
          sx={{
            flex: { xs: "1 1 100%", sm: "1 1 45%", md: 1 },
            minWidth: { xs: "100%", sm: 220 },
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            gutterBottom
            sx={{ fontSize: { xs: "1.1rem", sm: "1.25rem" } }}
          >
            Global Scholars Hub
          </Typography>

          <Typography
            variant="body2"
            sx={{
              mb: 2,
              color: "#cbd5e1",
              fontSize: { xs: 13, sm: 14 },
            }}
          >
            Your trusted partner in international education and scholarship
            placements since 2018.
          </Typography>

          <Stack
            direction="row"
            spacing={{ xs: 1.5, sm: 2 }}
            flexWrap="wrap"
          >
            <HomeIcon />
            <MailIcon />
            <PhoneIcon />
          </Stack>
        </Box>

        {/* BOX 2 */}
        <Box
          sx={{
            flex: { xs: "1 1 100%", sm: "1 1 45%", md: 1 },
            minWidth: { xs: "100%", sm: 180 },
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            gutterBottom
            sx={{ fontSize: { xs: "1.1rem", sm: "1.25rem" } }}
          >
            Quick Links
          </Typography>

          <Stack spacing={1} sx={{ color: "#cbd5e1" }}>
            <Typography sx={{ fontSize: { xs: 13, sm: 14 } }}>
              Study in UK
            </Typography>
            <Typography sx={{ fontSize: { xs: 13, sm: 14 } }}>
              Study in USA
            </Typography>
            <Typography sx={{ fontSize: { xs: 13, sm: 14 } }}>
              Scholarships
            </Typography>
            <Typography sx={{ fontSize: { xs: 13, sm: 14 } }}>
              Visa Guidance
            </Typography>
          </Stack>
        </Box>

        {/* BOX 3 */}
        <Box
          sx={{
            flex: { xs: "1 1 100%", sm: "1 1 45%", md: 1 },
            minWidth: { xs: "100%", sm: 180 },
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            gutterBottom
            sx={{ fontSize: { xs: "1.1rem", sm: "1.25rem" } }}
          >
            Legal
          </Typography>

          <Stack spacing={1} sx={{ color: "#cbd5e1" }}>
            <Typography sx={{ fontSize: { xs: 13, sm: 14 } }}>
              Privacy Policy
            </Typography>
            <Typography sx={{ fontSize: { xs: 13, sm: 14 } }}>
              Terms of Service
            </Typography>
            <Typography sx={{ fontSize: { xs: 13, sm: 14 } }}>
              Cookie Policy
            </Typography>
            <Typography sx={{ fontSize: { xs: 13, sm: 14 } }}>
              Accreditations
            </Typography>
          </Stack>
        </Box>

        {/* BOX 4 */}
        <Box
          sx={{
            flex: { xs: "1 1 100%", sm: "1 1 45%", md: 1 },
            minWidth: { xs: "100%", sm: 250 },
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            gutterBottom
            sx={{ fontSize: { xs: "1.1rem", sm: "1.25rem" } }}
          >
            Newsletter
          </Typography>

          <Typography
            variant="body2"
            sx={{
              mb: 2,
              color: "#cbd5e1",
              fontSize: { xs: 13, sm: 14 },
            }}
          >
            Stay updated with the latest scholarship deadlines.
          </Typography>

          {/* TextField */}
          <TextField
            fullWidth
            placeholder="Your Email Address"
            variant="outlined"
            size="small"
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
              input: {
                color: "#fff",
                fontSize: { xs: 13, sm: 14 },
              },
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
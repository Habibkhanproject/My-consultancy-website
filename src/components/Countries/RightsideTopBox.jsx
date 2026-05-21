import * as React from "react";
import { Box, Typography, Paper, LinearProgress, Button } from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import LanguageIcon from "@mui/icons-material/Language";
import InfoIcon from "@mui/icons-material/Info";

const progressData = [
  {
    titleLeft: "Undergraduate Tuition",
    titleRight: "£10,000 - £25,000/yr",
    icon: <SchoolIcon />,
    value: 75,
  },
  {
    titleLeft: "Postgraduate Tuition",
    titleRight: "£12,000 - £35,000/yr",
    icon: <StarIcon />,
    value: 85,
  },
  {
    titleLeft: "Language Level",
    titleRight: "£9,000 - £12,000/yr",
    icon: <LanguageIcon />,
    value: 60,
  },
];

const infoData = [
  { text: "High quality education system with globally recognized degrees." },
  {
    text: "Affordable tuition fees and living costs for international students.",
  },
  { text: "Strong career opportunities after graduation." },
];

export default function RightsideTopBox() {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        borderRadius: 3,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 6,
        },
      }}
    >
      {/* ================= HEADER ================= */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <InfoIcon color="primary" />
        <Typography fontWeight="bold" fontSize={16}>
          Cost of Study & Living
        </Typography>
      </Box>

      {/* ================= PROGRESS SECTION ================= */}
      {progressData.map((item, index) => (
        <Box key={index} sx={{ mb: 2 }}>


          {/* Left + Right Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 0.8,
            }}
          >
            <Typography variant="body2" color="text.secondary">
             {item.titleLeft}
            </Typography>

            <Typography variant="body2" fontWeight="bold">
              {item.titleRight}
            </Typography>
          </Box>

          {/* Progress Bar */}
          <LinearProgress
            variant="determinate"
            value={item.value}
            sx={{
              mt: 1,
              height: 7,
              borderRadius: 5,
            }}
          />
        </Box>
      ))}
    </Paper>
  );
}
